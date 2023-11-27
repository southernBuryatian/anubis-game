import { ReactComponent as OfficeImage } from "./test-office.svg";
import SvgWrapper from '../../components/SvgWrapper/SvgWrapper';
import { openDesktopScreen } from '../../reducers/screenReducer';
import { useDispatch } from 'react-redux';
import { openScriptLine } from '../../reducers/dialogueReducer';

function OfficePage () {

  const monitorElementId = 'monitor';
  const dispatch = useDispatch();

  // todo: remove hardcode

  dispatch(openScriptLine('What a dull office. Three thousands of years ago work conditions were much better.'))

  return (
    <SvgWrapper
      elementId={monitorElementId}
      callback={() => {
        dispatch(openDesktopScreen());
      }
    }
    >
      <OfficeImage/>
    </SvgWrapper>
  )
}

export default OfficePage;
