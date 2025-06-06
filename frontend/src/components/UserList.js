import React, { useEffect, useState } from 'react';

function UserList() {
  // Define backendURL de acordo com onde está rodando
  const backendURL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000' 
    : 'http://backend:3000';

  const [usuarios, setUsuarios] = useState([]);
  const [novoUsuario, setNovoUsuario] = useState('');

  useEffect(() => {
    fetch(`${backendURL}/usuarios`)
      .then(res => res.json())
      .then(data => setUsuarios(data))
      .catch(err => console.error('Erro ao buscar usuários:', err));
  }, [backendURL]);

  const adicionarUsuario = () => {
    if (novoUsuario.trim() === '') return;

    fetch(`${backendURL}/usuarios`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome: novoUsuario }),
    })
      .then(res => {
        if (!res.ok) throw new Error('Erro ao adicionar usuário');
        return res.json();
      })
      .then(usuarioCriado => {
        setUsuarios([...usuarios, usuarioCriado]);
        setNovoUsuario('');
      })
      .catch(err => {
        console.error(err);
        alert('Erro ao adicionar usuário');
      });
  };

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>{usuario.nome}</li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Nome do novo usuário"
        value={novoUsuario}
        onChange={e => setNovoUsuario(e.target.value)}
      />
      <button onClick={adicionarUsuario}>Adicionar Usuário</button>
    </div>
  );
}

export default UserList;
