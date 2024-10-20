import React, { useState } from 'react';
import './App.css';

function App() {
  // Estado para armazenar os dados dos usuários
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Estado para os campos do formulário
  const [formData, setFormData] = useState({
    id: '',
    nome: '',
    gmail: '',
    telefone: '',
    dataEntrada: '',
    dataSaida: ''
  });

  // Função para atualizar os campos do formulário
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Função para adicionar um novo usuário
  const handleAddUser = () => {
    if (formData.nome && formData.gmail && formData.telefone && formData.dataEntrada && formData.dataSaida) {
      setUsers([...users, { ...formData, id: users.length + 1 }]);
      setFormData({
        id: '',
        nome: '',
        gmail: '',
        telefone: '',
        dataEntrada: '',
        dataSaida: ''
      });
    }
  };

  // Função para editar um usuário
  const handleEditUser = (id) => {
    const user = users.find((user) => user.id === id);
    if (user) {
      setFormData(user);
    }
  };

  // Função para atualizar um usuário existente
  const handleUpdateUser = () => {
    setUsers(users.map((user) => (user.id === formData.id ? formData : user)));
    setFormData({
      id: '',
      nome: '',
      gmail: '',
      telefone: '',
      dataEntrada: '',
      dataSaida: ''
    });
  };

  // Função para deletar um usuário
  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Função para buscar usuário por ID ou Nome
  const handleSearchUser = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filtragem de usuários com base no ID ou Nome
  const filteredUsers = users.filter((user) =>
    user.id.toString().includes(searchTerm) || user.nome.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="App">
      <h1>Administração de Usuários do Hotel</h1>

      {/* Barra de pesquisa por ID ou Nome */}
      <input
        type="text"
        placeholder="Buscar por ID ou Nome"
        value={searchTerm}
        onChange={handleSearchUser}
      />

      {/* Formulário */}
      <div>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
        />
        <input
          type="text"
          name="gmail"
          placeholder="Gmail"
          value={formData.gmail}
          onChange={handleChange}
        />
        <input
          type="text"
          name="telefone"
          placeholder="Telefone"
          value={formData.telefone}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dataEntrada"
          value={formData.dataEntrada}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dataSaida"
          value={formData.dataSaida}
          onChange={handleChange}
        />
        <button onClick={formData.id ? handleUpdateUser : handleAddUser}>
          {formData.id ? 'Atualizar' : 'Adicionar'}
        </button>
      </div>

      {/* Lista de usuários */}
      <h2>Lista de Usuários</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Gmail</th>
            <th>Telefone</th>
            <th>Data de Entrada</th>
            <th>Data de Saída</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nome}</td>
              <td>{user.gmail}</td>
              <td>{user.telefone}</td>
              <td>{user.dataEntrada}</td>
              <td>{user.dataSaida}</td>
              <td>
                <button onClick={() => handleEditUser(user.id)}>Editar</button>
                <button onClick={() => handleDeleteUser(user.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;