import { ReactComponent as OfficeImage } from "./office.svg";
import SvgWrapper from '../../components/SvgWrapper/SvgWrapper';
import { openDesktopScreen } from '../../reducers/screenReducer';
import { useDispatch } from 'react-redux';

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
    </SvgWrapper>
  )
}

export default OfficePage;
