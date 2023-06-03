import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import domBuilder from '../components/domBuilder';
import getVocab from '../api/vocabData';
import { showVocab } from '../pages/vocab';
import navigationEvents from '../components/navigationEvents';

const startApp = (user) => {
  domBuilder(user);
  logoutButton(user);
  navBar(user);
  navigationEvents(user);

  getVocab().then((vocab) => showVocab(vocab));
};

export default startApp;
