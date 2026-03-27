/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Lock, 
  ChevronRight, 
  Users, 
  UserPlus, 
  Calendar, 
  FileText, 
  LogOut, 
  Menu, 
  X,
  LayoutDashboard,
  Stethoscope,
  Search,
  ClipboardList,
  Mail,
  RefreshCw
} from 'lucide-react';

// --- Types ---
type View = 'dashboard' | 'profissional' | 'cliente' | 'consultar_cliente' | 'ficha_atendimento' | 'agenda';

// --- Components ---

const SidebarItem = ({ 
  icon: Icon, 
  label, 
  active, 
  onClick 
}: { 
  icon: any, 
  label: string, 
  active: boolean, 
  onClick: () => void,
  key?: string | number
}) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
      active 
        ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' 
        : 'text-slate-400 hover:bg-white/5 hover:text-white'
    }`}
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </button>
);

const ProfissionalForm = () => {
  const [formData, setFormData] = useState({
    cpf: '',
    crp: '',
    nome: '',
    endereco: '',
    telefone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Cadastro de Profissional:', formData);
    alert('Profissional cadastrado com sucesso! (Simulação)');
    setFormData({ cpf: '', crp: '', nome: '', endereco: '', telefone: '' });
  };

  const inputClasses = "w-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all";
  const iconClasses = "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-400 transition-colors";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-8"
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Cadastrar Profissional</h1>
        <p className="text-slate-400">Preencha as informações abaixo para registrar um novo profissional no sistema.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group">
            <div className={iconClasses}><FileText size={20} /></div>
            <input
              type="text"
              placeholder="CPF"
              required
              value={formData.cpf}
              onChange={(e) => setFormData({...formData, cpf: e.target.value})}
              className={inputClasses}
            />
          </div>

          <div className="relative group">
            <div className={iconClasses}><FileText size={20} /></div>
            <input
              type="text"
              placeholder="CRP"
              required
              value={formData.crp}
              onChange={(e) => setFormData({...formData, crp: e.target.value})}
              className={inputClasses}
            />
          </div>
        </div>

        <div className="relative group">
          <div className={iconClasses}><User size={20} /></div>
          <input
            type="text"
            placeholder="Nome Completo"
            required
            value={formData.nome}
            onChange={(e) => setFormData({...formData, nome: e.target.value})}
            className={inputClasses}
          />
        </div>

        <div className="relative group">
          <div className={iconClasses}><LayoutDashboard size={20} /></div>
          <input
            type="text"
            placeholder="Endereço"
            required
            value={formData.endereco}
            onChange={(e) => setFormData({...formData, endereco: e.target.value})}
            className={inputClasses}
          />
        </div>

        <div className="relative group">
          <div className={iconClasses}><Users size={20} /></div>
          <input
            type="text"
            placeholder="Telefone"
            required
            value={formData.telefone}
            onChange={(e) => setFormData({...formData, telefone: e.target.value})}
            className={inputClasses}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-3 rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center space-x-2 transition-all"
        >
          <span>Salvar Cadastro</span>
          <ChevronRight size={18} />
        </motion.button>
      </form>
    </motion.div>
  );
};

const ClienteForm = () => {
  const [formData, setFormData] = useState({
    codigo: '',
    cpf: '',
    rg: '',
    nome: '',
    endereco: '',
    telefone: '',
    contato: '',
    pai: '',
    mae: '',
    cid: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Cadastro de Cliente:', formData);
    alert('Cliente cadastrado com sucesso! (Simulação)');
    setFormData({
      codigo: '',
      cpf: '',
      rg: '',
      nome: '',
      endereco: '',
      telefone: '',
      contato: '',
      pai: '',
      mae: '',
      cid: ''
    });
  };

  const inputClasses = "w-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all";
  const iconClasses = "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-400 transition-colors";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-8"
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Cadastrar Cliente</h1>
        <p className="text-slate-400">Preencha as informações abaixo para registrar um novo paciente no sistema.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative group">
            <div className={iconClasses}><FileText size={20} /></div>
            <input
              type="text"
              placeholder="Código Cliente"
              required
              value={formData.codigo}
              onChange={(e) => setFormData({...formData, codigo: e.target.value})}
              className={inputClasses}
            />
          </div>

          <div className="relative group">
            <div className={iconClasses}><FileText size={20} /></div>
            <input
              type="text"
              placeholder="CPF"
              required
              value={formData.cpf}
              onChange={(e) => setFormData({...formData, cpf: e.target.value})}
              className={inputClasses}
            />
          </div>

          <div className="relative group">
            <div className={iconClasses}><FileText size={20} /></div>
            <input
              type="text"
              placeholder="RG"
              required
              value={formData.rg}
              onChange={(e) => setFormData({...formData, rg: e.target.value})}
              className={inputClasses}
            />
          </div>
        </div>

        <div className="relative group">
          <div className={iconClasses}><User size={20} /></div>
          <input
            type="text"
            placeholder="Nome Completo"
            required
            value={formData.nome}
            onChange={(e) => setFormData({...formData, nome: e.target.value})}
            className={inputClasses}
          />
        </div>

        <div className="relative group">
          <div className={iconClasses}><LayoutDashboard size={20} /></div>
          <input
            type="text"
            placeholder="Endereço"
            required
            value={formData.endereco}
            onChange={(e) => setFormData({...formData, endereco: e.target.value})}
            className={inputClasses}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group">
            <div className={iconClasses}><Users size={20} /></div>
            <input
              type="text"
              placeholder="Telefone"
              required
              value={formData.telefone}
              onChange={(e) => setFormData({...formData, telefone: e.target.value})}
              className={inputClasses}
            />
          </div>

          <div className="relative group">
            <div className={iconClasses}><Users size={20} /></div>
            <input
              type="text"
              placeholder="Contato de Emergência"
              value={formData.contato}
              onChange={(e) => setFormData({...formData, contato: e.target.value})}
              className={inputClasses}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group">
            <div className={iconClasses}><User size={20} /></div>
            <input
              type="text"
              placeholder="Nome do Pai"
              value={formData.pai}
              onChange={(e) => setFormData({...formData, pai: e.target.value})}
              className={inputClasses}
            />
          </div>

          <div className="relative group">
            <div className={iconClasses}><User size={20} /></div>
            <input
              type="text"
              placeholder="Nome da Mãe"
              value={formData.mae}
              onChange={(e) => setFormData({...formData, mae: e.target.value})}
              className={inputClasses}
            />
          </div>
        </div>

        <div className="relative group">
          <div className={iconClasses}><Stethoscope size={20} /></div>
          <input
            type="text"
            placeholder="CID (Classificação Internacional de Doenças)"
            value={formData.cid}
            onChange={(e) => setFormData({...formData, cid: e.target.value})}
            className={inputClasses}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-3 rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center space-x-2 transition-all"
        >
          <span>Salvar Cadastro</span>
          <ChevronRight size={18} />
        </motion.button>
      </form>
    </motion.div>
  );
};

const ConsultarCliente = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data for clients
  const clients = [
    { id: 1, codigo: 'CLI001', nome: 'Ana Oliveira', cpf: '123.456.789-00', prontuario: 'PRONT-2024-001' },
    { id: 2, codigo: 'CLI002', nome: 'Bruno Santos', cpf: '234.567.890-11', prontuario: 'PRONT-2024-002' },
    { id: 3, codigo: 'CLI003', nome: 'Carla Lima', cpf: '345.678.901-22', prontuario: 'PRONT-2024-003' },
    { id: 4, codigo: 'CLI004', nome: 'Daniel Costa', cpf: '456.789.012-33', prontuario: 'PRONT-2024-004' },
    { id: 5, codigo: 'CLI005', nome: 'Eduarda Rocha', cpf: '567.890.123-44', prontuario: 'PRONT-2024-005' },
  ];

  const filteredClients = clients.filter(client => 
    client.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.codigo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.cpf.includes(searchTerm)
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-8"
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Consultar Cliente</h1>
        <p className="text-slate-400">Busque e visualize informações básicas dos clientes cadastrados.</p>
      </div>

      <div className="mb-6 relative group max-w-md">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-400 transition-colors">
          <Search size={20} />
        </div>
        <input
          type="text"
          placeholder="Buscar por nome, código ou CPF..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
        />
      </div>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-6 py-4 text-slate-300 font-semibold text-sm uppercase tracking-wider">Código</th>
                <th className="px-6 py-4 text-slate-300 font-semibold text-sm uppercase tracking-wider">Nome</th>
                <th className="px-6 py-4 text-slate-300 font-semibold text-sm uppercase tracking-wider">CPF</th>
                <th className="px-6 py-4 text-slate-300 font-semibold text-sm uppercase tracking-wider">Prontuário</th>
                <th className="px-6 py-4 text-slate-300 font-semibold text-sm uppercase tracking-wider text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredClients.length > 0 ? (
                filteredClients.map((client) => (
                  <motion.tr 
                    key={client.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-white/5 transition-colors group"
                  >
                    <td className="px-6 py-4 text-emerald-400 font-mono text-sm">{client.codigo}</td>
                    <td className="px-6 py-4 text-white font-medium">{client.nome}</td>
                    <td className="px-6 py-4 text-slate-300">{client.cpf}</td>
                    <td className="px-6 py-4 text-slate-300">
                      <span className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded text-xs font-medium border border-blue-500/20">
                        {client.prontuario}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-emerald-500/10">
                        <FileText size={18} />
                      </button>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                    Nenhum cliente encontrado com os termos de busca.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

const FichaAtendimentoForm = () => {
  const [formData, setFormData] = useState({
    codigo: '',
    nome: '',
    cpf: '',
    cid: '',
    profissional: '',
    prontuario: ''
  });

  const profissionaisMock = [
    { id: 1, nome: 'Dr. João Silva - Psicólogo' },
    { id: 2, nome: 'Dra. Maria Oliveira - Psiquiatra' },
    { id: 3, nome: 'Dr. Carlos Santos - Terapeuta' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Ficha de Atendimento Vinculada:', formData);
    alert('Prontuário vinculado à ficha do cliente com sucesso!');
    setFormData({ codigo: '', nome: '', cpf: '', cid: '', profissional: '', prontuario: '' });
  };

  const inputClasses = "w-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all appearance-none";
  const iconClasses = "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-400 transition-colors";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-8"
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Ficha de Atendimento</h1>
        <p className="text-slate-400">Preencha os dados do atendimento e vincule o prontuário ao cliente.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative group">
            <div className={iconClasses}><FileText size={20} /></div>
            <input
              type="text"
              placeholder="Código Cliente"
              required
              value={formData.codigo}
              onChange={(e) => setFormData({...formData, codigo: e.target.value})}
              className={inputClasses}
            />
          </div>

          <div className="relative group md:col-span-2">
            <div className={iconClasses}><User size={20} /></div>
            <input
              type="text"
              placeholder="Nome Completo"
              required
              value={formData.nome}
              onChange={(e) => setFormData({...formData, nome: e.target.value})}
              className={inputClasses}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group">
            <div className={iconClasses}><FileText size={20} /></div>
            <input
              type="text"
              placeholder="CPF"
              required
              value={formData.cpf}
              onChange={(e) => setFormData({...formData, cpf: e.target.value})}
              className={inputClasses}
            />
          </div>

          <div className="relative group">
            <div className={iconClasses}><Stethoscope size={20} /></div>
            <input
              type="text"
              placeholder="CID"
              value={formData.cid}
              onChange={(e) => setFormData({...formData, cid: e.target.value})}
              className={inputClasses}
            />
          </div>
        </div>

        <div className="relative group">
          <div className={iconClasses}><Users size={20} /></div>
          <select
            required
            value={formData.profissional}
            onChange={(e) => setFormData({...formData, profissional: e.target.value})}
            className={inputClasses}
          >
            <option value="" disabled className="bg-slate-900">Selecione o Profissional</option>
            {profissionaisMock.map((prof) => (
              <option key={prof.id} value={prof.nome} className="bg-slate-900">
                {prof.nome}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
            <ChevronRight size={18} className="rotate-90" />
          </div>
        </div>

        <div className="relative group">
          <div className="absolute top-3 left-4 pointer-events-none text-slate-400 group-focus-within:text-emerald-400 transition-colors">
            <FileText size={20} />
          </div>
          <textarea
            placeholder="Prontuário (Até 2000 caracteres)"
            required
            maxLength={2000}
            rows={8}
            value={formData.prontuario}
            onChange={(e) => setFormData({...formData, prontuario: e.target.value})}
            className="w-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all resize-none"
          />
          <div className="text-right mt-1">
            <span className={`text-xs ${formData.prontuario.length > 1900 ? 'text-amber-400' : 'text-slate-500'}`}>
              {formData.prontuario.length} / 2000
            </span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-3 rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center space-x-2 transition-all"
        >
          <span>Vincular Prontuário</span>
          <ChevronRight size={18} />
        </motion.button>
      </form>
    </motion.div>
  );
};

const AgendaForm = () => {
  const [formData, setFormData] = useState({
    paciente: '',
    data: '',
    hora: '',
    descricao: '',
    gmail: ''
  });
  const [isSyncing, setIsSyncing] = useState(false);
  const [googleTokens, setGoogleTokens] = useState<any>(null);

  const pacientesMock = [
    { id: 1, nome: 'Ana Oliveira' },
    { id: 2, nome: 'Bruno Santos' },
    { id: 3, nome: 'Carla Lima' },
    { id: 4, nome: 'Daniel Costa' },
    { id: 5, nome: 'Eduarda Rocha' },
  ];

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'OAUTH_AUTH_SUCCESS') {
        setGoogleTokens(event.data.tokens);
        alert('Conta Google conectada com sucesso!');
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleConnectGoogle = async () => {
    try {
      const response = await fetch('/api/auth/google/url');
      const { url } = await response.json();
      window.open(url, 'google_oauth', 'width=600,height=700');
    } catch (error) {
      console.error('Erro ao obter URL de autenticação:', error);
      alert('Erro ao conectar com o Google. Verifique as configurações do servidor.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (googleTokens) {
      setIsSyncing(true);
      try {
        const startDateTime = `${formData.data}T${formData.hora}:00`;
        const endDateTime = new Date(new Date(startDateTime).getTime() + 60 * 60 * 1000).toISOString();

        const response = await fetch('/api/calendar/sync', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            tokens: googleTokens,
            event: {
              summary: `Consulta: ${formData.paciente}`,
              description: formData.descricao,
              start: startDateTime,
              end: endDateTime
            }
          })
        });

        if (response.ok) {
          alert('Agendamento salvo e sincronizado com o Google Calendar!');
        } else {
          alert('Agendamento salvo localmente, mas houve um erro na sincronização.');
        }
      } catch (error) {
        console.error('Erro na sincronização:', error);
        alert('Erro ao sincronizar com o Google.');
      } finally {
        setIsSyncing(false);
      }
    } else {
      alert('Agendamento salvo localmente! (Conecte ao Google para sincronizar)');
    }

    setFormData({ paciente: '', data: '', hora: '', descricao: '', gmail: '' });
  };

  const inputClasses = "w-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all";
  const iconClasses = "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-400 transition-colors";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-8"
    >
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Agenda de Compromissos</h1>
          <p className="text-slate-400">Agende consultas e sincronize com o Google Calendar.</p>
        </div>
        {!googleTokens ? (
          <button
            onClick={handleConnectGoogle}
            className="bg-white text-slate-900 px-4 py-2 rounded-xl font-semibold flex items-center space-x-2 hover:bg-slate-200 transition-colors"
          >
            <Mail size={18} />
            <span>Conectar Gmail</span>
          </button>
        ) : (
          <div className="flex items-center space-x-2 text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20">
            <RefreshCw size={18} className="animate-spin-slow" />
            <span className="text-sm font-medium">Gmail Conectado</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl">
        <div className="relative group">
          <div className={iconClasses}><User size={20} /></div>
          <select
            required
            value={formData.paciente}
            onChange={(e) => setFormData({...formData, paciente: e.target.value})}
            className={`${inputClasses} appearance-none`}
          >
            <option value="" disabled className="bg-slate-900">Selecione o Paciente</option>
            {pacientesMock.map((paciente) => (
              <option key={paciente.id} value={paciente.nome} className="bg-slate-900">
                {paciente.nome}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
            <ChevronRight size={18} className="rotate-90" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group">
            <div className={iconClasses}><Calendar size={20} /></div>
            <input
              type="date"
              required
              value={formData.data}
              onChange={(e) => setFormData({...formData, data: e.target.value})}
              className={inputClasses}
            />
          </div>

          <div className="relative group">
            <div className={iconClasses}><Calendar size={20} /></div>
            <input
              type="time"
              required
              value={formData.hora}
              onChange={(e) => setFormData({...formData, hora: e.target.value})}
              className={inputClasses}
            />
          </div>
        </div>

        <div className="relative group">
          <div className={iconClasses}><Mail size={20} /></div>
          <input
            type="email"
            placeholder="E-mail do Gmail para Sincronização"
            value={formData.gmail}
            onChange={(e) => setFormData({...formData, gmail: e.target.value})}
            className={inputClasses}
          />
        </div>

        <div className="relative group">
          <div className="absolute top-3 left-4 pointer-events-none text-slate-400 group-focus-within:text-emerald-400 transition-colors">
            <FileText size={20} />
          </div>
          <textarea
            placeholder="Descrição da Consulta"
            rows={4}
            value={formData.descricao}
            onChange={(e) => setFormData({...formData, descricao: e.target.value})}
            className="w-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all resize-none"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSyncing}
          className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-3 rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center space-x-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSyncing ? (
            <>
              <RefreshCw size={18} className="animate-spin" />
              <span>Sincronizando...</span>
            </>
          ) : (
            <>
              <span>Salvar Agendamento</span>
              <ChevronRight size={18} />
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

const Dashboard = ({ onLogout }: { onLogout: () => void }) => {
  const [activeView, setActiveView] = useState<View>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'profissional', label: 'Cadastrar Profissional', icon: Stethoscope },
    { id: 'cliente', label: 'Cadastrar Cliente', icon: UserPlus },
    { id: 'consultar_cliente', label: 'Consultar Cliente', icon: Search },
    { id: 'ficha_atendimento', label: 'Ficha de Atendimento', icon: ClipboardList },
    { id: 'agenda', label: 'Agenda', icon: Calendar },
  ];

  const renderContent = () => {
    switch (activeView) {
      case 'profissional':
        return <ProfissionalForm />;
      case 'cliente':
        return <ClienteForm />;
      case 'consultar_cliente':
        return <ConsultarCliente />;
      case 'ficha_atendimento':
        return <FichaAtendimentoForm />;
      case 'agenda':
        return <AgendaForm />;
      default:
        return (
          <div className="p-8 text-white">
            <h1 className="text-2xl font-bold mb-6">Bem-vindo ao MindCare Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Pacientes Ativos', value: '124', color: 'bg-blue-500' },
                { label: 'Consultas Hoje', value: '12', color: 'bg-emerald-500' },
                { label: 'Profissionais', value: '18', color: 'bg-purple-500' },
                { label: 'Pendências', value: '3', color: 'bg-amber-500' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl"
                >
                  <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <div className={`h-1 w-12 ${stat.color} mt-4 rounded-full`} />
                </motion.div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`fixed lg:static inset-y-0 left-0 w-72 bg-white/5 border-r border-white/10 z-50 transform transition-transform duration-300 lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col p-6">
          <div className="flex items-center space-x-3 mb-10 px-2">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Stethoscope className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">MindCare</span>
          </div>

          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => (
              <SidebarItem
                key={item.id}
                icon={item.icon}
                label={item.label}
                active={activeView === item.id}
                onClick={() => {
                  setActiveView(item.id as View);
                  setIsSidebarOpen(false);
                }}
              />
            ))}
          </nav>

          <button
            onClick={onLogout}
            className="mt-auto flex items-center space-x-3 px-4 py-3 text-slate-400 hover:bg-red-500/10 hover:text-red-400 rounded-xl transition-all duration-200"
          >
            <LogOut size={20} />
            <span className="font-medium">Sair</span>
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-20 border-b border-white/10 flex items-center justify-between px-8 bg-white/5 backdrop-blur-md sticky top-0 z-30">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden text-slate-400 hover:text-white transition-colors"
          >
            <Menu size={24} />
          </button>
          
          <div className="flex-1 lg:flex-none" />

          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-white">Dr. Ricardo Silva</p>
              <p className="text-xs text-slate-400">Administrador</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
              RS
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'Estrela@2012') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Usuário ou senha incorretos.');
    }
  };

  if (isLoggedIn) {
    return <Dashboard onLogout={() => setIsLoggedIn(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4 font-sans relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-3xl" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl relative z-10"
      >
        <div className="text-center mb-8">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-white tracking-tight mb-2"
          >
            Login
          </motion.h1>
          <p className="text-slate-400 text-sm">Bem-vindo ao MindCare System</p>
        </div>

        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded-xl mb-6 text-center"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-400 transition-colors">
              <User size={20} />
            </div>
            <input
              type="text"
              placeholder="Nome de usuário"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
            />
          </div>

          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-400 transition-colors">
              <Lock size={20} />
            </div>
            <input
              type="password"
              placeholder="Senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="peer h-5 w-5 appearance-none rounded border border-white/20 bg-white/5 checked:bg-emerald-500 checked:border-emerald-500 transition-all cursor-pointer"
                />
                <svg
                  className="absolute h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-slate-300 group-hover:text-white transition-colors">Lembrar</span>
            </label>
            <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
              Esqueci minha senha
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-3 rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center space-x-2 transition-all"
          >
            <span>Entrar</span>
            <ChevronRight size={18} />
          </motion.button>

          <div className="text-center pt-4">
            <p className="text-slate-400 text-sm">
              Não tem conta?{' '}
              <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
                Registrar
              </a>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
