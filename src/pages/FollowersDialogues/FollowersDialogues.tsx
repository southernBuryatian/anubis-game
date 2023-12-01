import './FollowersDialogues.css';
import { FollowersConfig } from '../../config/followersConfig';
import { useDispatch, useSelector } from 'react-redux';
import { chooseFollower } from '../../reducers/followerReducer';
import { openFollowerWindow } from '../../reducers/screenReducer';
import { Container, Text } from 'nes-ui-react';
import React from 'react';
import store from '../../reducers/store';
import { executeNextStep } from '../../reducers/answersReducer';
import ComputerAppWrapper from '../../components/ComputerAppWrapper/ComputerAppWrapper';

function FollowersDialogues() {
  const dispatch = useDispatch();
  const currentTimeBlock = useSelector((state: ReturnType<typeof store.getState>) => state.time).currentTimeBlock;
  const answers = useSelector((state: ReturnType<typeof store.getState>) => state.storylines);

  const followersADay = 6;

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
            Object.keys(answers[index].chosenOptions)[storylineStepId] === undefined &&
            <span className="nes-ui-badge nes-ui-is-error FollowerListItemBadge">Not answered</span>
          }
        </Container>
      </div>
    }
    );
    return (
      <ComputerAppWrapper>
        { content }
      </ComputerAppWrapper>
    )
}

export default FollowersDialogues;
