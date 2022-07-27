/** @format */

import ContainerForm from 'components/form';
import ReturnPage from 'components/ReturnPage';
import swal from 'sweetalert';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetGames } from 'Service/gamesService';
import { CreateGameType } from 'types/interfaces';
import * as Style from './style';

const CrudGamesGenrer = () => {
  const navigate = useNavigate();

  const [game, setGame] = useState<CreateGameType>({
    title: '',
    coverImageUrl: '',
    description: '',
    year: 0,
    imbScore: 0,
    gameplayYouTubeUrl: '',
    trailerYoutubeUrl: '',
    genreGame: '',
  });
  const handleValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'year' || e.target.name === 'imbScore') {
      setGame((value: CreateGameType) => ({
        ...value,
        [e.target.name]: parseInt(e.target.value),
      }));
    } else {
      setGame((value: CreateGameType) => ({
        ...value,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleCreateGame = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payloadGame = await GetGames.CreateGame(game);

    if (payloadGame) {
      swal({
        title: 'Game registered successfully!',
        icon: 'success',
        timer: 6000,
      });
      console.log(payloadGame.data);
    } else {
      swal({
        title: 'Error registering game',
        icon: 'error',
        timer: 6000,
      });
      console.log(payloadGame);
    }
  };

  return (
    <Style.Page>
      <ReturnPage Route={() => navigate(-1)} />

      <ContainerForm>
        <Style.CoverImgGame
          src={game.coverImageUrl ? game.coverImageUrl : ''}
        />

        <Style.Form onSubmit={handleCreateGame}>
          <Style.InputCreate
            type="text"
            placeholder="Put the name of the game (preferably not unique)"
            name="title"
            id="title"
            onChange={handleValues}
            required
          />

          <Style.InputCreate
            type="text"
            placeholder="Game cover url"
            name="coverImageUrl"
            id="coverImageUrl"
            onChange={handleValues}
            required
          />

          <Style.InputCreate
            type="text"
            placeholder="Brief description about the game"
            name="description"
            id="description"
            onChange={handleValues}
            required
          />

          <Style.InputCreate
            type="number"
            placeholder="Release year"
            name="year"
            id="year"
            onChange={handleValues}
            required
          />

          <Style.InputCreate
            type="number"
            placeholder="Game ImbScore (from 0 to 5)"
            name="imbScore"
            id="imbScore"
            onChange={handleValues}
            required
          />

          <Style.InputCreate
            type="text"
            placeholder="Game trailer url"
            name="trailerYoutubeUrl"
            id="trailerYoutubeUrl"
            onChange={handleValues}
            required
          />

          <Style.InputCreate
            type="text"
            placeholder="gameplay url"
            name="gameplayYouTubeUrl"
            id="gameplayYouTubeUrl"
            onChange={handleValues}
            required
          />

          <Style.InputCreate
            type="text"
            placeholder="Game genre/category type"
            name="genreGame"
            id="genreGame"
            onChange={handleValues}
            required
          />

          <Style.CreateBtn type="submit">register game</Style.CreateBtn>
        </Style.Form>
      </ContainerForm>
    </Style.Page>
  );
};

export default CrudGamesGenrer;
