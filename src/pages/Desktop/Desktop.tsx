import './Desktop.css';
import { useDispatch } from 'react-redux';
import { openCreators, openFollowersDialogues, openGodsRating } from '../../reducers/screenReducer';
import { ReactComponent as TempleOSLogo } from './TempleOS.svg'
import GodMighty from './AppIcons/GodMighty.png'
import Creators from './AppIcons/Creators.png'
import WorshiperService from './AppIcons/WorshiperService.png'
import { useEffect, useState } from 'react';
import AppIcon from './AppIcon/AppIcon';
import ComputerScreenPageWrapper from '../../components/ComputerScreenPageWrapper/ComputerScreenPageWrapper';

function DesktopPage () {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    isLoading ?
      <ComputerScreenPageWrapper BGColor={'blue'}>
      <div
        className="DesktopWrapper"
        onClick={() => {
          setIsLoading(false);
        }}>
        <TempleOSLogo className="OSLogo"/>
        <span className="loader"/>
      </div>
        </ComputerScreenPageWrapper>
      :
      <ComputerScreenPageWrapper BGColor={'teal'}>
        <div className="DesktopWrapper">
          <AppIcon onClick={ () => {dispatch(openFollowersDialogues()); } } imgSrc={WorshiperService} imgAlt={WorshiperService} AppName={'Worshiper Service'} />
          <AppIcon onClick={ () => {dispatch(openGodsRating()); } } imgSrc={GodMighty} imgAlt={GodMighty} AppName={'GodMighty'} />
          <AppIcon onClick={ () => {dispatch(openCreators()); } } imgSrc={Creators} imgAlt={Creators} AppName={'Creators'} />
        </div>
      </ComputerScreenPageWrapper>
  )
}

export default DesktopPage;
