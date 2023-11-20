import React from 'react';
import logo from './creepy-face.jpeg';
import './FollowerRequest.css';
import { Button, Toast, Text } from "nes-ui-react";
import { FollowersConfig } from '../../config/config';

function FollowerRequest( {followerId }: { followerId: string } ) {

  const followerConfig = FollowersConfig[followerId];

  const storylineStepId = 0;
  const followerRequest = followerConfig.storyline[storylineStepId];

  // todo: iterate storyline to display all that available

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Text size={'xlarge'}> {followerConfig.displayName} </Text>
        <Toast style={{ float: 'left' }} bubblePostion='left'>
          <Text>
            {followerRequest.requestText}
          </Text>
        </Toast>

        <div className='Flex-container'>

          {followerRequest.options.map((option, index) => {
            return (
              <Button
                key={index.toString()}
                color={index % 2 === 0 ? "warning" : undefined}
                onClick={async () => {
                  try {
                    console.log('1');
                  } catch (err) {
                    console.log(err);
                  }
                }}>
                {option.optionText}

              </Button>
            )
          })}

        </div>
      </header>
    </div>
  );
}

export default FollowerRequest;
