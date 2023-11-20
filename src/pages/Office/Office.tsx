import { ReactComponent as OfficeImage } from "./office.svg";
import SvgWrapper from '../../components/SvgWrapper/SvgWrapper';
import { openFollowerWindow } from '../../reducers/screenReducer';
import { chooseFollower } from '../../reducers/followerReducer';
import { useDispatch } from 'react-redux';

function OfficePage () {

  const monitorElementId = 'monitor';
  const dispatch = useDispatch();

  return (
    <SvgWrapper
      elementId={monitorElementId}
      callback={() => {
        dispatch(openFollowerWindow());
        dispatch(chooseFollower('Ville'));
      }
    }
    >
      <OfficeImage/>
    </SvgWrapper>
  )
}

export default OfficePage;
