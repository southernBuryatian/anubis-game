import './Desktop.css';
import { useDispatch } from 'react-redux';
import { openFollowerWindow } from '../../reducers/screenReducer';
import { chooseFollower } from '../../reducers/followerReducer';

function DesktopPage () {
  const dispatch = useDispatch();
  return (<div className="DesktopWrapper" onClick={
    () => {
      dispatch(openFollowerWindow());
      dispatch(chooseFollower('Ville'));
    }
  }></div>)
}

export default DesktopPage;
