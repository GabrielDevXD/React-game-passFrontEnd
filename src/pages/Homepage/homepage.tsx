/** @format */

import CreateGamesAdmin from "components/Create/CreateGames";
import CreateGenrerAdmin from "components/Create/CreateGenre";
import ReturnPage from "components/ReturnPage";
import ReactStars from "react-stars";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Favorite } from "Service/favoriteService";
import { FavoriteGamesType } from "types/interfaces";
import * as Style from "./homepage-style";

const Homepage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [favoriteGames, setFavoriteGames] = useState<FavoriteGamesType>({
    games: [
      {
        id: "",
        title: "",
        coverImageUrl: "",
        description: "",
        imbScore: 0,
        genders: [
          {
            name: "",
          },
        ],
      },
    ],
    id: "",
  });

  useEffect(() => {
    profileFavoriteGames();
  }, []);

  const profileFavoriteGames = async () => {
    if (id) {
      const res = await Favorite.GetFavoriteByProfileId(id);
      setFavoriteGames(res?.data.favoriteGames);
    }
  };

  return (
    <Style.Homepage>
      <ReturnPage Route={() => navigate("/profiles")} />

      <CreateGamesAdmin
        Route={() => navigate(`/profile/createGames&Genrer/${id}`)}
      />
      <CreateGenrerAdmin Route={() => navigate(`/profile/genrers/${id}`)} />

      <Style.CardSection>
        {favoriteGames
          ? favoriteGames.games.map((game, index) => (
              <Style.ContentCard key={index}>
                <Style.TitleGame>{game.title}</Style.TitleGame>
                <Style.CoverImageGame
                  onClick={() => navigate(`/profile/game/${game.id}`)}
                  src={game.coverImageUrl}
                  alt={"image de fundo do jogo" + game.title}
                />
                <Style.ScoreGame>
                  <ReactStars
                    count={5}
                    value={game.imbScore}
                    edit={false}
                    size={35}
                    color2={"#ffd700"}
                  />
                </Style.ScoreGame>
              </Style.ContentCard>
            ))
          : ""}
      </Style.CardSection>

      <Style.InfoSection>
        <Style.InfoCard
          onClick={() => navigate(`/profile/homepage/list/${id}`)}>
          <p>My games</p>
        </Style.InfoCard>
        <Style.InfoCard onClick={() => navigate(`/profile/homepage/library`)}>
          <p>see all available</p>
        </Style.InfoCard>
      </Style.InfoSection>
    </Style.Homepage>
  );
};

export default Homepage;
