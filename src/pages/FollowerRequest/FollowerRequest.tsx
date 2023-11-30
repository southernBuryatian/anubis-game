import React from 'react';
import './FollowerRequest.css';
import { Button, Toast, Text, Menu, Modal, Spacer, Header, Heading, IconButton, PixelIcon, ModalContent } from "nes-ui-react";
import { FollowersConfig } from '../../config/followersConfig';
import { useDispatch, useSelector } from 'react-redux';
import { chooseAnswer } from '../../reducers/answersReducer';
import { openFollowersDialogues } from '../../reducers/screenReducer';
import store from '../../reducers/store';
import ComputerScreenPageWrapper from '../../components/ComputerScreenPageWrapper/ComputerScreenPageWrapper';

function FollowerRequest( { followerIndex }: { followerIndex: number } ) {

  const dispatch = useDispatch();

  const followerConfig = FollowersConfig[followerIndex];

  const currentTimeBlock = useSelector((state: ReturnType<typeof store.getState>) => state.time).currentTimeBlock;
  const storylines = useSelector((state: ReturnType<typeof store.getState>) => state.storylines);

  const storylineStepId = storylines[followerIndex].currentStorylineStepId;
  const followerRequest = followerConfig.storyline[storylineStepId];

  const followerStoryline = storylines[followerIndex];

  let imageSrc = null;
  try {
    imageSrc = require(`../../config/FollowersAvatars/${followerConfig.name}.png`);
  } catch (e) {
    console.log(followerConfig.name);
  }

  // todo: iterate storyline to display all that available

  return (
    <ComputerScreenPageWrapper>
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
          {imageSrc && <img src={imageSrc} className="FollowerAvatar" alt={followerConfig.name} />}

          <Text size={'xlarge'} color='white'> {followerConfig.name} </Text>
          <Toast style={{ float: 'left' }} bubblePostion='left'>
            <Text>
              {followerRequest.requestText}
            </Text>
          </Toast>

          {(
            followerStoryline.currentStorylineStepId === storylineStepId
            && typeof followerStoryline.chosenOptions[storylineStepId] === 'number'
          ) ?
              <Toast style={{ float: 'right' }} bubblePostion='right'>
                <Text>
                  {followerRequest.options[followerStoryline.chosenOptions[storylineStepId]].optionText}
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
                          dispatch(chooseAnswer({
                            followerIndex,
                            storylineStepId,
                            chosenOption: index,
                            nextStep: option.outcomeStep,
                            timeBlock: currentTimeBlock,
                          }))
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
    </ComputerScreenPageWrapper>
  );
}

export default FollowerRequest;
