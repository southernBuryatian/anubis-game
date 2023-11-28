import { useDispatch } from 'react-redux';
import { openDesktopScreen } from '../../reducers/screenReducer';
import { Header, Heading, IconButton, Modal, PixelIcon, Spacer } from 'nes-ui-react';
import ComputerScreenPageWrapper from '../../components/ComputerScreenPageWrapper/ComputerScreenPageWrapper';
import React from 'react';

function GodsRating() {
  const dispatch = useDispatch();

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
      </Modal>
    </ComputerScreenPageWrapper>
  )
}

export default GodsRating;
