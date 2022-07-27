/** @format */

import XboxBackground from 'assets/img/gamepass.gif';
import background from 'assets/img/gamepassb.jpg';
import returns from 'assets/icon/return.png';
import back from 'assets/img/background.gif';
import AddGames from 'assets/icon/addicon.png';
import Category from 'assets/icon/edit.png';
import gif from 'assets/img/imageback.gif';

export const constants = {
  logoFontFamily: 'Roboto, Cursive',
  logoFontSize: '2rem',
  logoLineHeight: '140%',

  subTitleFontFamily: 'Roboto Mono, monospace, Cursive',
  subTitleFontSize: '1.6rem',
  subTitleFontHeight: '140%',

  bodyFontFamily: 'Share Tech Mono, monospace',
  bodyFontSize: '1rem',
  bodyLineHeight: '140%',

  xboxBackground: `url(${XboxBackground})`,
  xboxWallpaper: `url(${background})`,
  xboxPlayGameBackground: `url(${gif})`,
  returnsicon: `url(${returns})`,

  homepageBackground: `url(${back})`,
  createGamesIcon: `url(${AddGames})`,
  createGenresIcon: `url(${Category})`,

  transitionEvents: 'all ease-in-out .6s',
  transformeScale: 'scale(1.2)',
};
