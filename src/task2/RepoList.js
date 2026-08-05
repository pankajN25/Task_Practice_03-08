import { useState } from 'react';

function RepoList({ repos }) {
  const [sortBy, setSortBy] = useState('stars');

  if (repos.length === 0) {
    return (
      <p className="t2-no-repos">
        This user has no public repositories.
      </p>
    );
  }

  const sortedRepos = [...repos].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }

    return b.stargazers_count - a.stargazers_count;
  });

 return (
  <div className="t2-repo-list">

    <div className="t2-repo-header">
      <h2>Top Repositories</h2>

      <div className="t2-sort-buttons">
        <span>Sort by: </span>

        <button onClick={() => setSortBy('stars')}>
          Stars
        </button>

        <button onClick={() => setSortBy('name')}>
          Name
        </button>
      </div>
    </div>
<div className="t2-repos">
    {sortedRepos.map((repo) => (
        <div
  className="t2-repo-card"
  key={repo.id}
>
    <a
  href={repo.html_url}
  target="_blank"
  rel="noreferrer"
>
  {repo.name}
</a>
<p>
  {repo.description || 'No description available'}
</p>
<div className="t2-repo-details">

  <span>
    ★ {repo.stargazers_count}
  </span>
  <span>
  {repo.language || 'Not specified'}
</span>

</div>

</div>

))}

</div>
  </div>
);
}

export default RepoList;