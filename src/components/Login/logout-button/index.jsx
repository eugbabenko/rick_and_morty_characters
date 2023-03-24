import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton({ className }) {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button className={className} type="submit" onClick={() => logout()}>
        Sign out
      </button>
    )
  );
}

export default LogoutButton;
