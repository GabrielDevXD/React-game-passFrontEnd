/** @format */

import Login from "pages/Login/login";
import Profiles from "pages/Profiles/profiles";
import CreateProfile from "pages/createProfile";
import SingUp from "pages/register/singup";
import { useRoutes } from "react-router-dom";
import { RoutesPath } from "types/routes";
import EditProfile from "pages/editprofile/EditProfile";
import Homepage from "pages/Homepage/homepage";
import CrudGamesGenrer from "pages/addgameandgenre";
import GamesList from "pages/ListGames/Games";
import Mygames from "pages/mygames";
import CrudGenrer from "pages/CreateandupdateGenre/index";
import GameDefinitions from "pages/Gameopt";
import EditGameId from "pages/Editgame";

const Router = () => {
  return useRoutes([
    {
      path: RoutesPath.LOGIN,
      element: <Login />,
    },
    {
      path: RoutesPath.REGISTER,
      element: <SingUp />,
    },
    {
      path: RoutesPath.PROFILES,
      element: <Profiles />,
    },
    {
      path: RoutesPath.CREATEPROFILES,
      element: <CreateProfile />,
    },
    {
      path: RoutesPath.EDITPROFILE,
      element: <EditProfile />,
    },
    {
      path: RoutesPath.HOMEPAGE,
      element: <Homepage />,
    },
    {
      path: RoutesPath.GAMESLIST,
      element: <GamesList />,
    },
    {
      path: RoutesPath.MYGAMES,
      element: <Mygames />,
    },
    {
      path: RoutesPath.CREATEGAMES,
      element: <CrudGamesGenrer />,
    },
    {
      path: RoutesPath.CREATEGENRES,
      element: <CrudGenrer />,
    },
    {
      path: RoutesPath.GAMEOPT,
      element: <GameDefinitions />,
    },
    {
      path: RoutesPath.EDITGAME,
      element: <EditGameId />,
    },
  ]);
};

export default Router;
