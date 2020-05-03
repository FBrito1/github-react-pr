/* eslint-disable react/static-property-placement */
/* eslint-disable react/state-in-constructor */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';

import { store } from '../../store/state';

import Container from '../../components/Container';
import {
  Owner,
  RepositoryList,
  FollowStats,
  SeeMoreLink,
  LinkWrapper,
} from './styles';

export default function UserDetails() {
  const globalState = useContext(store);
  const { state } = globalState;
  const { userDetails } = state;
  const repoImg =
    'https://f1.pngfuel.com/png/553/861/236/git-line-github-version-control-computer-software-repository-branching-commit-merge-png-clip-art.png';

  console.log('userDetaails', userDetails);

  return (
    <Container>
      {userDetails.user ? (
        <>
          <Owner>
            <Link to="/">Voltar a pagina principal</Link>
            <img
              src={userDetails.user.avatar_url}
              alt={userDetails.user.name}
            />
            <h1>{userDetails.user.name}</h1>
            <p>{userDetails.user.bio}</p>
            <FollowStats>
              <p>
                <FaStar /> {userDetails.user.followers} seguidores
              </p>
              <p>
                <FaRegStar /> {userDetails.user.following} seguidos
              </p>
            </FollowStats>
          </Owner>

          <RepositoryList>
            {userDetails.repos &&
              userDetails.repos.slice(0, 50).map(repository => (
                <li key={String(repository.id)}>
                  <img src={repoImg} alt="Repository Image" />
                  <div>
                    <strong>
                      <a target="_blank" href={repository.html_url}>
                        {repository.name}
                      </a>
                      {repository.language && (
                        <span>{repository.language}</span>
                      )}
                    </strong>
                    <p>{repository.description}</p>
                  </div>
                </li>
              ))}
          </RepositoryList>
          <LinkWrapper>
            <SeeMoreLink
              href={`https://github.com/${userDetails.user.login}?tab=repositories`}
              target="_blank"
            >
              Ver Mais
            </SeeMoreLink>
          </LinkWrapper>
        </>
      ) : (
        <>
          <h2>Nenhum usuário selecionado</h2>
          <Link to="/">Voltar a pagina principal</Link>
        </>
      )}
    </Container>
  );
}
