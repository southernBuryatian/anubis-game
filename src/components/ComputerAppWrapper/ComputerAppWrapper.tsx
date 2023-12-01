import { useDispatch } from 'react-redux';
import { openDesktopScreen } from '../../reducers/screenReducer';
import { Header, Heading, IconButton, Modal, PixelIcon, Spacer } from 'nes-ui-react';
import ComputerScreenPageWrapper from '../../components/ComputerScreenPageWrapper/ComputerScreenPageWrapper';
import React, { ReactNode } from 'react';

function ComputerAppWrapper({ onCloseCallback, children }: { onCloseCallback?: () => void, children: ReactNode} ){
  const dispatch = useDispatch();
  const onClick = onCloseCallback ? () => { onCloseCallback() } : () => {dispatch(openDesktopScreen())}

  return (
    <ComputerScreenPageWrapper>
      <Modal open={true} backdrop={false}>
        <Header>
          <Spacer />
          <Heading dense></Heading>
          <Spacer />
          <IconButton color="error" size="small" onClick={() => onClick()}>
            <PixelIcon name="pixelicon-close" size='small' />
          </IconButton>
        </Header>

        { children }

      </Modal>
    </ComputerScreenPageWrapper>
  )
}

export default ComputerAppWrapper;
