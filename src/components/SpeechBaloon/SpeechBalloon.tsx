import { Text, Toast } from 'nes-ui-react';
import React from 'react';
import { ReactComponent as Anubis } from './Avatars/anubis.svg';
import './SpeechBalloon.css';
import { useDispatch } from 'react-redux';
import { closeScriptLine, GodsCharacters } from '../../reducers/dialogueReducer';
import Isis from './Avatars/Isis.png';

function SpeechBalloon ({ text, avatar } : { text: string, avatar?: GodsCharacters | null  }) {

  const dispatch = useDispatch();


  return (
    <>
    {
      avatar !== GodsCharacters.Anubis ? (
        <div
          className="BalloonWrapper"
          onClick={() => {dispatch(closeScriptLine())}}
        >

          <div>
            <img src={Isis} alt={'Isis'} className="ImgSize"/>
          </div>

          <div className="BalloonWidth" style={{float: 'right'}}>
            <Toast
              style={{ float: 'left' }}
              bubblePostion={ 'left' }>
              <Text size={'xlarge'}>
                {text}
              </Text>
            </Toast>
          </div>
    </div>) :
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
    }
    </>
  )
}

export default SpeechBalloon;
