import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { google } from "googleapis";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(cookieParser());

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    `${process.env.APP_URL}/auth/callback`
  );

  // API Routes
  app.get("/api/auth/google/url", (req, res) => {
    const scopes = [
      "https://www.googleapis.com/auth/calendar.events",
      "https://www.googleapis.com/auth/userinfo.email"
    ];

    const url = oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: scopes,
      prompt: "consent"
    });

    res.json({ url });
  });

  app.get("/auth/callback", async (req, res) => {
    const { code } = req.query;

    try {
      const { tokens } = await oauth2Client.getToken(code as string);
      // In a real app, you'd store these tokens in a database linked to the user
      // For this demo, we'll just send a success message to the parent window
      
      res.send(`
        <html>
          <body>
            <script>
              if (window.opener) {
                window.opener.postMessage({ type: 'OAUTH_AUTH_SUCCESS', tokens: ${JSON.stringify(tokens)} }, '*');
                window.close();
              } else {
                window.location.href = '/';
              }
            </script>
            <p>Autenticação concluída com sucesso! Esta janela fechará automaticamente.</p>
          </body>
        </html>
      `);
    } catch (error) {
      console.error("Error exchanging code for tokens:", error);
      res.status(500).send("Erro na autenticação com o Google.");
    }
  });

  app.post("/api/calendar/sync", async (req, res) => {
    const { tokens, event } = req.body;
    if (!tokens) return res.status(401).json({ error: "Não autenticado" });

    const auth = new google.auth.OAuth2();
    auth.setCredentials(tokens);

    const calendar = google.calendar({ version: "v3", auth });

    try {
      const response = await calendar.events.insert({
        calendarId: "primary",
        requestBody: {
          summary: event.summary,
          description: event.description,
          start: {
            dateTime: event.start,
            timeZone: "America/Sao_Paulo",
          },
          end: {
            dateTime: event.end,
            timeZone: "America/Sao_Paulo",
          },
        },
      });
      res.json({ success: true, data: response.data });
    } catch (error) {
      console.error("Error syncing with Google Calendar:", error);
      res.status(500).json({ error: "Erro ao sincronizar com o Google Calendar" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
