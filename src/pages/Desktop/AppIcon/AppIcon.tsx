import './Desktop.css';
import { Text } from 'nes-ui-react';

function AppIcon (
  { onClick, imgSrc, imgAlt, AppName } :
    { onClick: () => void, imgSrc: string, imgAlt: string, AppName: string }
) {
  return (
    <div onClick={() => onClick()}>
        <img src={imgSrc} alt={imgAlt} className="AppIcon"/>
        <Text size={'large'} className="AppIcon">
          { AppName }
        </Text>
    </div>
  )
}

export default AppIcon;
