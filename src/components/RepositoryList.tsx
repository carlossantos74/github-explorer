import { ResponsitoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useEffect, useState } from "react";

interface Repository {
  name: string,
  description: string,
  node_id: string,
  html_url: string,
}

export function ReponsitoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data))
  }, [])
  
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository: Repository) => {
          return <ResponsitoryItem repository={repository} key={repository.node_id} /> 
        })}
      </ul>
    </section>
  )
}