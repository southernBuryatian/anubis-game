import React, { useEffect } from 'react';
import OfficePage from './pages/Office/Office';
import { useDispatch, useSelector } from 'react-redux';
import store from './reducers/store';
import { openEndingScreen, Screens } from './reducers/screenReducer';
import FollowerRequest from './pages/FollowerRequest/FollowerRequest';
import DesktopPage from './pages/Desktop/Desktop';
import FollowersDialogues from './pages/FollowersDialogues/FollowersDialogues';
import SpeechBalloon from './components/SpeechBaloon/SpeechBalloon';
import GodsRating from './pages/GodsRating/GodsRating';
import Cutscene from './pages/Cutscene/Cutscene';
import { gameDuration } from './reducers/timeReducer';

function App() {
  const currentFollowerId = useSelector((state: ReturnType<typeof store.getState>) => state.currentFollower.currentFollowerId);
  const currentScreen = useSelector((state: ReturnType<typeof store.getState>) => state.screen.currentScreenId);

  const currentScriptLine = useSelector((state: ReturnType<typeof store.getState>) => state.dialogues);
  const currentTimeBlock = useSelector((state: ReturnType<typeof store.getState>) => state.time.currentTimeBlock);

  const dispatch = useDispatch();
  useEffect(() => {
    if (currentTimeBlock >= gameDuration) {
      dispatch(openEndingScreen());
    }
  }, [currentTimeBlock, dispatch])

  const renderScreen = (screen: Screens) => {
    switch(screen) {
      case Screens.Intro:
        return (<Cutscene/>)
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
      case Screens.Ending:
        return (<Cutscene scene={'Ending'}/>)
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
