import React from 'react';
import logo from './creepy-face.jpeg';
import './FollowerRequest.css';
import { Button, Toast, Text } from "nes-ui-react";
import { FollowersConfig } from '../../config/config';

function FollowerRequest( {followerId }: { followerId: string } ) {

  const followerConfig = FollowersConfig[followerId];

  const storylineStepId = 0;

  // todo: iterate storyline to display all that available

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Text size={'xlarge'}> {followerConfig.displayName} </Text>
        <Toast style={{ float: 'left' }} bubblePostion='left'>
          <Text>
            {followerConfig.storyline[storylineStepId].requestText}
          </Text>
        </Toast>

        <div className='Flex-container'>

          <Button
            color="warning"

            onClick={async () => {
                try {
                  console.log('1');
                } catch (err) {
                  console.log(err);
                  alert('Пожалуйста, проверьте введённую информацию. Может, вы уже оставляли нам свой контакт?');
                }
            }}>

            {/*todo: simplify, iterate options and display correct amount of buttons*/}

            {followerConfig.storyline[storylineStepId].options[0].optionText}
          </Button>

          <Button
            onClick={async () => {
                try {
                  console.log('2');
                } catch (err) {
                  console.log(err);
                }
            }}>

            {/*//todo: simplify*/}

            {followerConfig.storyline[storylineStepId].options[1].optionText}
          </Button>



        </div>
      </header>
    </div>
  );
}

export default FollowerRequest;
