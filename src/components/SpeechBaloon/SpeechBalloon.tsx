import { Text, Toast } from 'nes-ui-react';
import React from 'react';
import { ReactComponent as Anubis } from "./Avatars/anubis.svg";
import './SpeechBalloon.css';
import { useDispatch } from 'react-redux';
import { closeScriptLine } from '../../reducers/dialogueReducer';

function SpeechBalloon ({text} : {text: string}) {

  const dispatch = useDispatch();

  return (
    <div
      className="BalloonWrapper"
      onClick={() => {dispatch(closeScriptLine())}}
    >
      <div className="BalloonWidth">
        <Toast style={{ float: 'right' }} bubblePostion={'right'}>
          <Text size={'xlarge'}>
            {text}
          </Text>
        </Toast>
      </div>
      <Anubis className="SpeakerSVG"/>
    </div>
  )
}

export default SpeechBalloon;
