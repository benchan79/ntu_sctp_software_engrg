import Genre from "./Genre";

function Container() {
  return (
    <>
      <header className="header">Movie App</header>
      <div id="comedy">
        <Genre
          name="Comedy"
          description="Whether you like dark comedy, slapstick, satire, or romcoms, there's a funny movie for every taste."
          movieTitle1="The Big Lebowski"
          movieTitle2="Shaun of the Dead"
        />
      </div>
      <div id="romance">
        <Genre
          name="Romance"
          description="Movies that are sure to get you in the mood for love. Cuddle up close and don't forget to the share the popcorn."
          movieTitle1="Amelie"
          movieTitle2="When Harry Met Sally"
        />
      </div>
    </>
  );
}

export default Container;
