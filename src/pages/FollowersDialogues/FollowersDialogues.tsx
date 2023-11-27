import './FollowersDialogues.css';
import { FollowersConfig } from '../../config/followersConfig';
import { useDispatch } from 'react-redux';
import { chooseFollower } from '../../reducers/followerReducer';
import { openDesktopScreen, openFollowerWindow } from '../../reducers/screenReducer';
import { Container, Header, Heading, IconButton, Modal, PixelIcon, Spacer, Text } from 'nes-ui-react';
import ComputerScreenPageWrapper from '../../components/ComputerScreenPageWrapper/ComputerScreenPageWrapper';
import React from 'react';

function FollowersDialogues() {
    const dispatch = useDispatch();

    const content = FollowersConfig.map(
      (follower, index) => {
        let imageSrc = null;
        try {
          imageSrc = require(`../../config/FollowersAvatars/${follower.name}.png`);
        } catch (e) {
          console.log(follower.name);
        }
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
