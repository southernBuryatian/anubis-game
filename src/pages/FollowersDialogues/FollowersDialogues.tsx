import './FollowersDialogues.css';
import { FollowersConfig } from '../../config/config';
import { useDispatch } from 'react-redux';
import { chooseFollower } from '../../reducers/followerReducer';
import { openFollowerWindow } from '../../reducers/screenReducer';
import { Container, Text } from 'nes-ui-react';

function FollowersDialogues() {
    const dispatch = useDispatch();

    const content = FollowersConfig.map(
      (follower, index) => {
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
          >
            <Text size={'xlarge'}>
              { follower.name }
            </Text>
          </Container>
        </div>
      }
);
    return (
      <div>
          { content }
      </div>
    )
}

export default FollowersDialogues;
