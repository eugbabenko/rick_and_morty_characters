import { useAuth0 } from '@auth0/auth0-react';

function LoginButton({ className }) {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button className={className} type="submit" onClick={() => loginWithRedirect()}>
        Sign in
      </button>
    )
  );
}

export default LoginButton;
