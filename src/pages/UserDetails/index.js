/* eslint-disable react/static-property-placement */
/* eslint-disable react/state-in-constructor */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';

import { store } from '../../store/store';

import api from '../../services/api';

import Container from '../../components/Container';
import { Loading, Owner, RepositoryList, FollowStats } from './styles';

export default function UserDetails() {
  const repositories = [
    {
      id: 122561570,
      user: {
        avatar_url:
          'https://f1.pngfuel.com/png/553/861/236/git-line-github-version-control-computer-software-repository-branching-commit-merge-png-clip-art.png',
        login: 'fbrito1',
      },
      html_url: 'https://github.com/FBrito1/adyen-php-sample-code',
      title: 'adyen-php-sample-code',
      labels: [
        {
          id: 845655483,
          node_id: 'MDU6TGFiZWw4NDU2NTU0ODM=',
          url:
            'https://api.github.com/repos/FBrito1/adyen-php-sample-code/labels/bug',
          name: 'bug',
          color: 'd73a4a',
          default: true,
          description: "Something isn't working",
        },
      ],
    },
  ];

  const globalState = useContext(store);
  const { state, dispatch } = globalState;

  console.log('bloab', state);

  return (
    <Container>
      <Owner>
        <Link to="/">Voltar a pagina principal</Link>
        <img
          src="https://avatars1.githubusercontent.com/u/31147881?v=4"
          alt="teste"
        />
        <h1>Fabio Brito</h1>
        <p>Prepared to be a lifelong learner!</p>
        <button onClick={() => dispatch({ type: 'SET_BLUE_TRUE' })}>
          click
        </button>
        <FollowStats>
          <p>
            <FaStar /> 5 seguidores
          </p>
          <p>
            <FaRegStar /> 2 seguidos
          </p>
        </FollowStats>
      </Owner>

      <RepositoryList>
        {repositories.map(repository => (
          <li key={String(repository.id)}>
            <img src={repository.user.avatar_url} alt={repository.user.login} />
            <div>
              <strong>
                <a href={repository.html_url}>{repository.title}</a>
                {repository.labels.map(label => (
                  <span key={String(label.id)}>{label.name}</span>
                ))}
              </strong>
              <p>{repository.user.login}</p>
            </div>
          </li>
        ))}
      </RepositoryList>
    </Container>
  );
}
