function UserCard({ user }) {
  return (
    <div className="t2-user-card">

      <img
        className="t2-avatar"
        src={user.avatar_url}
        alt={user.login}
      />

      <div className="t2-user-info">

        <h2>{user.name || user.login}</h2>

        <p>@{user.login}</p>

        <p>{user.bio || 'No bio available'}</p>

        <div className="t2-user-stats">
          <span>Followers: {user.followers}</span>
          <span>Following: {user.following}</span>
          <span>Repos: {user.public_repos}</span>
        </div>

        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub
        </a>

      </div>

    </div>
  );
}

export default UserCard;