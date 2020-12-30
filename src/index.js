import countTimer from './modules/countTimer';
import formValidator from './modules/formValidator';
import getTeamImages from './modules/getTeamImages';
import priceCalculator from './modules/priceCalculator';
import sendForm from './modules/sendForm';
import slider from './modules/slider';
import tabs from './modules/tabs';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';

//timer
const interval = setInterval(countTimer, 1000, '31 december 2020');

//menu
toggleMenu();

//popup
togglePopUp();

//tabs
tabs();

//slider
slider();

//showTeamPhotos
getTeamImages();

//pricealculator
priceCalculator(100);

//fetch form
sendForm();

//validateFormInputs
formValidator();
