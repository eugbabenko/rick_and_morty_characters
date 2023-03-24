import { useAuth0 } from '@auth0/auth0-react';

function Profile({ className }) {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className={className}>
        {user.picture && <img src={user.picture} alt={user?.name} />}
        <h2>{user?.name}</h2>
      </div>
    )
  );
}

export default Profile;
