import { ReactComponent as OfficeImage } from "./office.svg";
import SvgWrapper from '../../components/SvgWrapper/SvgWrapper';
import { openDesktopScreen } from '../../reducers/screenReducer';
import { useDispatch } from 'react-redux';
import { Button } from "nes-ui-react";
import { openScriptLine } from '../../reducers/dialogueReducer';
import { switchTimeBlock } from '../../reducers/timeReducer';

function OfficePage () {

  const monitorElementId = 'monitor';
  const dispatch = useDispatch();

  // todo: remove hardcode

  //dispatch(openScriptLine('What a dull office. Three thousands of years ago work conditions were much better.'))

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
          dispatch(switchTimeBlock());
        }}
      >
        'Next day'
      </Button>
    </SvgWrapper>
  )
}

export default OfficePage;
