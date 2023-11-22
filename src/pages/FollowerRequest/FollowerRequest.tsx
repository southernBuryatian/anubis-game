import React from 'react';
import logo from './creepy-face.jpeg';
import './FollowerRequest.css';
import { Button, Toast, Text } from "nes-ui-react";
import { FollowersConfig } from '../../config/config';
import { useDispatch, useSelector } from 'react-redux';
import { chooseAnswer } from '../../reducers/answersReducer';
import store from '../../reducers/store';

function FollowerRequest( { followerIndex }: { followerIndex: number } ) {

  const followerConfig = FollowersConfig[followerIndex];

  const storylineStepId = 0;
  const followerRequest = followerConfig.storyline[storylineStepId];

  const dispatch = useDispatch();

  const answers = useSelector((state: ReturnType<typeof store.getState>) => state.answers);
  const followerAnswers = answers[followerIndex];

  // todo: iterate storyline to display all that available

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Text size={'xlarge'} color='white'> {followerConfig.name} </Text>
        <Toast style={{ float: 'left' }} bubblePostion='left'>
          <Text>
            {followerRequest.requestText}
          </Text>
        </Toast>

        {
          (followerAnswers.currentStorylineStepId === storylineStepId
          && Object.keys(followerAnswers.chosenOptions).length !== 0
          && typeof followerAnswers.chosenOptions[storylineStepId] === 'number') ?
            <Toast style={{ float: 'right' }} bubblePostion='right'>
              <Text>
                {followerRequest.options[followerAnswers.chosenOptions[storylineStepId]].optionText}
              </Text>
            </Toast>

            :

            <div className='Flex-container'>
              {followerRequest.options.map((option, index) => {
                return (
                  <Button
                    key={index.toString()}
                    color={index % 2 === 0 ? "warning" : undefined}
                    onClick={async () => {
                      try {
                        dispatch(chooseAnswer({followerIndex, storylineStepId, chosenOption: index}))
                      } catch (err) {
                        console.log(err);
                      }
                    }}>
                    {option.optionText}
                  </Button>
                )
              })}
            </div>

        }

      </header>
    </div>
  );
}

export default FollowerRequest;
