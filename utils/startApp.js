import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import domBuilder from '../components/domBuilder';
import { getVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';
import navigationEvents from '../components/events/navigationEvents';
import domEvents from '../components/events/domEvents';
import formEvents from '../components/events/formEvents';
import searchVocab from '../components/events/search';

const startApp = (user) => {
  domBuilder();
  logoutButton();
  navBar();
  navigationEvents(user);
  domEvents(user);
  formEvents(user);
  searchVocab(user);

  getVocab(user.uid).then((vocab) => showVocab(vocab));
};

export default startApp;
