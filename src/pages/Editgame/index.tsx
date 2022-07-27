/** @format */

import ContainerForm from "components/form";
import ReturnPage from "components/ReturnPage";
import swal from "sweetalert";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetGames } from "Service/gamesService";
import { CreateGameType, GamesTypes } from "types/interfaces";
import * as Style from "./style";

const EditGameId = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [gameInfo, setGameInfo] = useState<CreateGameType>({
    title: "",
    description: "",
    coverImageUrl: "",
    year: 0,
    imbScore: 0,
    trailerYoutubeUrl: "",
    gameplayYouTubeUrl: "",
    genreGame: "",
  });

  useEffect(() => {
    GameId();
  }, []);

  const GameId = async () => {
    if (id) {
      const payloadId = await GetGames.GameById(id);

      const gameInfosValues = {
        title: payloadId?.data.title,
        description: payloadId?.data.description,
        coverImageUrl: payloadId?.data.coverImageUrl,
        year: payloadId?.data.year,
        imbScore: payloadId?.data.imbScore,
        trailerYoutubeUrl: payloadId?.data.trailerYoutubeUrl,
        gameplayYouTubeUrl: payloadId?.data.gameplayYouTubeUrl,
        genreGame: payloadId?.data.genders[0].name,
      };

      console.log(payloadId?.data);
      console.log("Aqui" + gameInfosValues.genreGame);
      setGameInfo({
        ...gameInfo,
        ...gameInfosValues,
      });
    }
  };

  const handleChangesValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGameInfo((values: CreateGameType) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEditGameInfos = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (id) {
      const payloadEdit = await GetGames.EditGame(id, gameInfo);

      if (payloadEdit) {
        swal({
          title: "Game edited successfully!",
          icon: "success",
          timer: 6000,
        });
        navigate(-1);
      } else {
        swal({
          title: "Error",
          text: "Error updating game!",
          icon: "error",
          timer: 6000,
        });
        console.error(payloadEdit);
      }
    }
  };

  return (
    <Style.MainPage
      style={{
        backgroundImage: `url(${gameInfo?.coverImageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <ReturnPage Route={() => navigate(-1)} />

      <ContainerForm>
        <Style.CoverImgGame
          src={gameInfo.coverImageUrl ? gameInfo.coverImageUrl : ""}
        />

        <Style.Form onSubmit={handleEditGameInfos}>
          <Style.Inputs
            type='text'
            placeholder='Name'
            name='title'
            id='title'
            value={gameInfo.title}
            onChange={handleChangesValues}
            required
          />

          <Style.Inputs
            type='text'
            placeholder='game cover'
            name='coverImageUrl'
            id='coverImageUrl'
            value={gameInfo.coverImageUrl}
            onChange={handleChangesValues}
            required
          />

          <Style.Inputs
            type='text'
            placeholder='Brief description about the game'
            name='description'
            id='description'
            value={gameInfo.description}
            onChange={handleChangesValues}
            required
          />

          <Style.Inputs
            type='number'
            placeholder='year of release'
            name='year'
            id='year'
            value={gameInfo.year}
            onChange={handleChangesValues}
            required
          />

          <Style.Inputs
            type='number'
            placeholder='Game score (0 to 5)'
            name='imbScore'
            id='imbScore'
            value={gameInfo.imbScore}
            onChange={handleChangesValues}
            required
          />

          <Style.Inputs
            type='text'
            placeholder='game trailer'
            name='trailerYoutubeUrl'
            id='trailerYoutubeUrl'
            value={gameInfo.trailerYoutubeUrl}
            onChange={handleChangesValues}
            required
          />

          <Style.Inputs
            type='text'
            placeholder='Game gameplay'
            name='gameplayYouTubeUrl'
            id='gameplayYouTubeUrl'
            value={gameInfo.gameplayYouTubeUrl}
            onChange={handleChangesValues}
            required
          />

          <Style.Inputs
            type='text'
            placeholder='game genre'
            name='genreGame'
            id='genreGame'
            value={gameInfo.genreGame}
            onChange={handleChangesValues}
            required
          />

          <Style.EditBtn type='submit'>Update</Style.EditBtn>
        </Style.Form>
      </ContainerForm>
    </Style.MainPage>
  );
};

export default EditGameId;
