import { ResponsitoryItem } from "./RepositoryItem";

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

export function ReponsitoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <ResponsitoryItem repository={repository} /> 
        <ResponsitoryItem repository={repository} /> 
      </ul>
    </section>
  )
}