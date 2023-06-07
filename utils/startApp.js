import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import domBuilder from '../components/domBuilder';
import { getVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';
import navigationEvents from '../components/navigationEvents';
import domEvents from '../components/domEvents';
import formEvents from '../components/formEvents';

const startApp = (user) => {
  domBuilder();
  logoutButton(user);
  navBar(user);
  navigationEvents(user);
  domEvents(user);
  formEvents(user);

  getVocab(user.uid).then((vocab) => showVocab(vocab));
};

export default startApp;
