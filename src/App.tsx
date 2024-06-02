import { repos } from './static-repos'

export const App = () => {

  return (
    <>
      <h1>yoyomo's github pages</h1>
      <ul>
        {repos.map((repo) => (
          <li key={repo.name}>
            <a href={`https://yoyomo.github.io/${repo.name}/`}>{repo.name}</a>
          </li>
        ))}
      </ul>
    </>
  )
}
