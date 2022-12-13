import Movie from "./Movie";

function Genre({ name, description, movieTitle1, movieTitle2 }) {
  let movieYear1, movieYear2, movieLink1, movieLink2;
  if (name === "Comedy") {
    movieYear1 = "1998";
    movieLink1 = "https://www.imdb.com/title/tt0118715/"
    movieYear2 = "2004";
    movieLink2 = "https://www.imdb.com/title/tt0365748/"
  } else {
    movieYear1 = "2001";
    movieLink1 = "https://www.imdb.com/title/tt0211915/"
    movieYear2 = "1989";
    movieLink2 = "https://www.imdb.com/title/tt0098635/"
  }
  return (
    <>
      <h2>{name}</h2>
      <h3>{description}</h3>
      <Movie title={movieTitle1} year={movieYear1} link={movieLink1} />
      <Movie title={movieTitle2} year={movieYear2} link={movieLink2} />
    </>
  );
}

export default Genre;
