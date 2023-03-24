import { useAuth0 } from '@auth0/auth0-react';
import { useMemo } from 'react';

import './styles.scss';

import LoginButton from './login-button';
import LogoutButton from './logout-button';
import Profile from './profile';

function Login() {
  const { isLoading, error } = useAuth0();

  const userInfo = useMemo(() => {
    if (error) {
      return <p>Authentication error</p>;
    }
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div className="user-info">
        <LoginButton />
        <Profile className="profile" />
        <LogoutButton />
      </div>
    );
  }, [error, isLoading]);

  return <section className="login">{userInfo}</section>;
}

export default Login;
