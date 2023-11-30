import React from 'react';
import OfficePage from './pages/Office/Office';
import { useSelector } from 'react-redux';
import store from './reducers/store';
import { Screens } from './reducers/screenReducer';
import FollowerRequest from './pages/FollowerRequest/FollowerRequest';
import DesktopPage from './pages/Desktop/Desktop';
import FollowersDialogues from './pages/FollowersDialogues/FollowersDialogues';
import SpeechBalloon from './components/SpeechBaloon/SpeechBalloon';
import GodsRating from './pages/GodsRating/GodsRating';
import Intro from './pages/Intro/Intro';

function App() {
  const currentFollowerId = useSelector((state: ReturnType<typeof store.getState>) => state.currentFollower.currentFollowerId);
  const currentScreen = useSelector((state: ReturnType<typeof store.getState>) => state.screen.currentScreenId);

  const currentScriptLine = useSelector((state: ReturnType<typeof store.getState>) => state.dialogues);

  const renderScreen = (screen: Screens) => {
    switch(screen) {
      case Screens.Intro:
        return (<Intro/>)
      case Screens.Office:
        return (<OfficePage/>);
      case Screens.Desktop:
        return (<DesktopPage/>)
      case Screens.GodsRating:
        return (<GodsRating/>)
      case Screens.FollowerDialogue:
        return ((currentFollowerId !== null) ? <FollowerRequest followerIndex={currentFollowerId}/> : <OfficePage/>);
      case Screens.FollowersList:
        return (<FollowersDialogues/>);
      default:
        return (<OfficePage/>);
    }
  }


  return (
    <>
      {currentScriptLine.currentScriptLine && <SpeechBalloon text={currentScriptLine.currentScriptLine} avatar={currentScriptLine.speaker}/>}
      {renderScreen(currentScreen)}
    </>
  );
}

export default App;
