import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import domBuilder from '../components/domBuilder';

const startApp = () => {
  domBuilder();
  logoutButton();
  navBar();
};

export default startApp;
