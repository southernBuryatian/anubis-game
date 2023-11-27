import { ReactComponent as OfficeImage } from "./test-office.svg";
import SvgWrapper from '../../components/SvgWrapper/SvgWrapper';
import { openDesktopScreen } from '../../reducers/screenReducer';
import { useDispatch } from 'react-redux';
import { Button } from "nes-ui-react";

function OfficePage () {

  const monitorElementId = 'monitor';
  const dispatch = useDispatch();

  return (
    <SvgWrapper
      elementId={monitorElementId}
      callback={() => {
        dispatch(openDesktopScreen());
      }
    }
    >
      <OfficeImage/>
      <Button
        onClick={() => {
          console.log('change day')
        }}
      >
        'Next day'
      </Button>
    </SvgWrapper>
  )
}

export default OfficePage;
