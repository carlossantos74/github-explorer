const responsitoryName = 'unform';

export function ReponsitoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <li>
          <strong>{responsitoryName}</strong>
          <p>Forms in react</p>
          <a href="">Acessar reponsitório</a>
        </li>

        <li>
          <strong>unform</strong>
          <p>Forms in react</p>
          <a href="">Acessar reponsitório</a>
        </li>

        <li>
          <strong>unform</strong>
          <p>Forms in react</p>
          <a href="">Acessar reponsitório</a>
        </li>
      </ul>
    </section>
  )
}