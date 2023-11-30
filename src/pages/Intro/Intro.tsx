import { useDispatch, useSelector } from 'react-redux';
import { GodsCharacters, openScriptLine } from '../../reducers/dialogueReducer';
import { scriptLinesConfig } from '../../config/scriptLinesConfig';
import store from '../../reducers/store';
import { useEffect, useState } from 'react';
import { closeDesktop } from '../../reducers/screenReducer';

function Intro () {

  const dispatch = useDispatch();
  const currentScriptLine = useSelector((state: ReturnType<typeof store.getState>) => state.dialogues.currentScriptLine);

  const [currentIntroLineIndex, setCurrentIntroLineIndex] = useState(0);

  const IntroScript = scriptLinesConfig.Intro;

  useEffect(() => {
    dispatch(openScriptLine({ text: IntroScript[currentIntroLineIndex].line, speaker: GodsCharacters.Isis }));
  }, [])

  useEffect(() => {
    if (IntroScript.length > currentIntroLineIndex && !currentScriptLine) {
      setCurrentIntroLineIndex(currentIntroLineIndex + 1);
      dispatch(openScriptLine({
        text: IntroScript[currentIntroLineIndex].line,
        speaker: IntroScript[currentIntroLineIndex].character
      }))
    } else if (!currentScriptLine) {
      dispatch(closeDesktop());
    }
  }, [IntroScript, currentIntroLineIndex, currentScriptLine, dispatch])

  return (
    <>
    </>
  )
}

export default Intro;
