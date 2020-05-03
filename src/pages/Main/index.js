/* eslint-disable react/state-in-constructor */
import React, { useState } from 'react';
import { FaGithubAlt, FaSpinner, FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';

import api from '../../services/api';
import Container from '../../components/Container';
import { Form, SubmitButton } from './styles';

export default function Main() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [redirectTo, setRedirectTo] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      const [userData, reposData] = await Promise.all([
        api.get(`/users/${username}`),
        api.get(`/users/${username}/repos`),
      ]);
      // const response = await api.get(`/users/${username}`);
      // setLoading(false);

      console.log('response', userData);
      console.log('reposdata', reposData);
    } catch (err) {
      setLoading(false);
      toast.error('Usuário não encontrado');
    }
  };

  if (redirectTo) return <Redirect push to={redirectTo} />;
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Buscar usuário
      </h1>

      <Form onSubmit={e => handleSubmit(e)}>
        <input
          value={username}
          type="text"
          placeholder="Digite o @ do usuário"
          onChange={e => setUsername(e.target.value)}
        />

        <SubmitButton loading={loading}>
          {loading ? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
            <FaSearch color="#FFF" size={14} />
          )}
        </SubmitButton>
      </Form>
    </Container>
  );
}
