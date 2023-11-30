import './FollowersDialogues.css';
import { FollowersConfig } from '../../config/followersConfig';
import { useDispatch, useSelector } from 'react-redux';
import { chooseFollower } from '../../reducers/followerReducer';
import { openDesktopScreen, openFollowerWindow } from '../../reducers/screenReducer';
import { Container, Header, Heading, IconButton, Modal, PixelIcon, Spacer, Text } from 'nes-ui-react';
import ComputerScreenPageWrapper from '../../components/ComputerScreenPageWrapper/ComputerScreenPageWrapper';
import React from 'react';
import store from '../../reducers/store';
import { executeNextStep } from '../../reducers/answersReducer';

function FollowersDialogues() {
  const dispatch = useDispatch();
  const currentTimeBlock = useSelector((state: ReturnType<typeof store.getState>) => state.time).currentTimeBlock;
  const answers = useSelector((state: ReturnType<typeof store.getState>) => state.storylines);

  const followersADay = 5;

  const content = FollowersConfig.slice(0, followersADay * currentTimeBlock + 1).map(
    (follower, index) => {

      const followerStoryline = answers[index];

      if (followerStoryline.nextStorylineStepId && followerStoryline.lastInteractionTimeBlock < currentTimeBlock) {
        dispatch(executeNextStep(index));
      }

      let imageSrc = null;
      try {
        imageSrc = require(`../../config/FollowersAvatars/${follower.name}.png`);
      } catch (e) {
        console.log(follower.name);
      }
      const storylineStepId = answers[index].currentStorylineStepId;

      return <div
        key={index}
        onClick={ () =>
        {
          dispatch(chooseFollower(index));
          dispatch(openFollowerWindow());
        }
        }>
        <Container
          roundedCorners={true}
          align={'center'}
          className="FollowerListItem"
        >
          {imageSrc && <img
            src={imageSrc}
            alt={`${follower.name}`}
            className="FollowerListItemImage"
          />}
          <Text
            size={'xlarge'}
            className="FollowerListItemText"
          >
            { follower.name }
          </Text>
          {
            !Object.keys(answers[index].chosenOptions)[storylineStepId] &&
            <span className="nes-ui-badge nes-ui-is-error FollowerListItemBadge">Not answered</span>
          }
        </Container>
      </div>
    }
    );
    return (
      <ComputerScreenPageWrapper>
        <Modal open={true} backdrop={false}>
          <Header>
            <Spacer />
            <Heading dense></Heading>
            <Spacer />
            <IconButton color="error" size="small" onClick={() => {
              dispatch(openDesktopScreen())
            }}>
              <PixelIcon name="pixelicon-close" size='small' />
            </IconButton>
          </Header>
          { content }
        </Modal>
      </ComputerScreenPageWrapper>
    )
}

export default FollowersDialogues;
