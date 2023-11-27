import React from 'react';
import logo from './creepy-face.jpeg';
import './FollowerRequest.css';
import { Button, Toast, Text, Menu, Modal, Spacer, Header, Heading, IconButton, PixelIcon, ModalContent } from "nes-ui-react";
import { FollowersConfig } from '../../config/config';
import { useDispatch, useSelector } from 'react-redux';
import { chooseAnswer } from '../../reducers/answersReducer';
import { openFollowersDialogues } from '../../reducers/screenReducer';
import store from '../../reducers/store';

function FollowerRequest( { followerIndex }: { followerIndex: number } ) {

  const followerConfig = FollowersConfig[followerIndex];

  // todo: remove hardcode
  const storylineStepId = 0;
  const followerRequest = followerConfig.storyline[storylineStepId];

  const dispatch = useDispatch();

  const answers = useSelector((state: ReturnType<typeof store.getState>) => state.answers);
  const followerAnswers = answers[followerIndex];

  // todo: iterate storyline to display all that available

  return (
    <Modal open={true} backdrop={false}>
      <Header>
        <Spacer />
        <Heading dense></Heading>
        <Spacer />
        <IconButton color="error" size="small" onClick={() => {dispatch(openFollowersDialogues())}}>
          <PixelIcon name="pixelicon-close" size='small' />
        </IconButton>
      </Header>

      <ModalContent className='ModalContent'>

          <img src={logo} className="FollowerAvatar" alt={followerConfig.name} />

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

              <Menu>
                {followerRequest.options.map((option, index) => {
                  return (
                    <Button
                      style={{ flexBasis: '50%'}}
                      key={index.toString()}
                      color={index % 2 === 0 ? "warning" : undefined}
                      onClick={async () => {
                        try {
                          dispatch(chooseAnswer({followerIndex, storylineStepId, chosenOption: index}))
                        } catch (err) {
                          console.log(err);
                        }
                      }}>
                      { option.optionText }
                    </Button>
                  )
                })}
              </Menu>
          }

      </ModalContent>
    </Modal>
  );
}

export default FollowerRequest;
