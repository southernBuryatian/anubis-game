import React from 'react';
import OfficePage from './pages/Office/Office';
import { useSelector } from 'react-redux';
import store from './reducers/store';
import { Screens } from './reducers/screenReducer';
import FollowerRequest from './pages/FollowerRequest/FollowerRequest';

function App() {

  const renderScreen = (screen: Screens) => {
    switch(screen) {
      case Screens.Office:
        return (<OfficePage/>);
      case Screens.FollowerDialogue:
        return (<FollowerRequest/>);
      default:
        return (<OfficePage/>);
    }
  }

  const currentScreen = useSelector((state: ReturnType<typeof store.getState>) => state.screen.currentScreenId);

  console.log(currentScreen);
  return (
    renderScreen(currentScreen)
  );
}

export default App;
