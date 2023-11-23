import './FollowersDialogues.css';
import { FollowersConfig } from '../../config/config';
import { useDispatch } from 'react-redux';
import { chooseFollower } from '../../reducers/followerReducer';
import { openFollowerWindow } from '../../reducers/screenReducer';


function FollowersDialogues() {
    
    const dispatch = useDispatch();

    let content = FollowersConfig.map(
        (follower, index) => <li onClick={() => {dispatch(chooseFollower(index)); dispatch(openFollowerWindow());}} 
        id='dialogue'>{follower.name}</li>);
    return (
        <ul id='listOfDialogues'>
            {content}
        </ul>
    )
}

export default FollowersDialogues;