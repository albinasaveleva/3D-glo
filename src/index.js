'use strict';

import calc from './modules/calc';
import checkInputs from './modules/checkInputs';
import clearForm from './modules/clearForm';
import countTimer from './modules/countTimer';
import handlerCommand from './modules/handlerCommand';
import scrollIntoView from './modules/scrollIntoView';
import sendForm from './modules/sendForm';
import slider from './modules/slider';
import tabs from './modules/tabs';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';


countTimer('20 july 2021');
toggleMenu();
togglePopup();
tabs();
slider();
calc(100);
checkInputs();
handlerCommand();
sendForm();

const toServiceBlockButton = document.querySelector('[href="#service-block"]');
scrollIntoView(toServiceBlockButton, '#service-block');