import './Desktop.css';
import { useDispatch } from 'react-redux';
import { openFollowerWindow } from '../../reducers/screenReducer';
import { chooseFollower } from '../../reducers/followerReducer';
import {ReactComponent as TempleOSLogo} from './TempleOS.svg'

function DesktopPage () {
  const dispatch = useDispatch();
  return (
      <div
        className="DesktopWrapper"
        onClick={() => {
          dispatch(openFollowerWindow());
          dispatch(chooseFollower(0));
        }}>
        <TempleOSLogo className="logo"/>
        <span className="loader"/>
      </div>
  )
}

export default DesktopPage;
