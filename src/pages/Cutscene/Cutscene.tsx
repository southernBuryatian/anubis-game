import { useDispatch, useSelector } from 'react-redux';
import { openScriptLine } from '../../reducers/dialogueReducer';
import { scriptLinesConfig } from '../../config/scriptLinesConfig';
import store from '../../reducers/store';
import { useEffect, useState } from 'react';
import { closeDesktop } from '../../reducers/screenReducer';
import { Text } from 'nes-ui-react';

function Cutscene ({scene}: {scene?: string }) {

  const dispatch = useDispatch();
  const currentScriptLine = useSelector((state: ReturnType<typeof store.getState>) => state.dialogues.currentScriptLine);

  const [currentIntroLineIndex, setCurrentIntroLineIndex] = useState(0);
  const [isDialogueEnded, setIsDialogueEnded] = useState(false);

  // @ts-ignore
  const IntroScript = scene && scriptLinesConfig[scene] ? scriptLinesConfig[scene] : scriptLinesConfig.Intro;

  useEffect(() => {
    dispatch(openScriptLine({ text: IntroScript[currentIntroLineIndex].line, speaker: IntroScript[currentIntroLineIndex].character }));
  }, [])

  useEffect(() => {
    if (IntroScript.length > currentIntroLineIndex && !currentScriptLine) {
      setCurrentIntroLineIndex(currentIntroLineIndex + 1);
      dispatch(openScriptLine({
        text: IntroScript[currentIntroLineIndex].line,
        speaker: IntroScript[currentIntroLineIndex].character
      }))
    } else if (!currentScriptLine) {
      setIsDialogueEnded(true);
      if (scene!=='Ending') {
        dispatch(closeDesktop());
      }
    }
  }, [IntroScript, currentIntroLineIndex, currentScriptLine, dispatch, scene])

  return (<>
    {scene === 'Ending' && isDialogueEnded
      &&
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '40%'
      }}>
      <Text size={'xlarge'} centered={true}>
        Thank you for playing.
      </Text>
      </div>
    }
    </>
  )
}

export default Cutscene;
