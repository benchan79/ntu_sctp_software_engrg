function Movie({ title, year, link }) {
  return (
    <>
      <ul>
        <li>
          <b> Title </b>: <a href={link}>{title}</a>
        </li>
        <li>
          <b> Year </b>: {year}
        </li>
      </ul>
    </>
  );
}

export default Movie;
