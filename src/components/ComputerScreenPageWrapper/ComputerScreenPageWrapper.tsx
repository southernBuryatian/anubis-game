import './ComputerScreenPageWrapper.css';
import { ReactNode } from 'react';
import ShutdownButton from './ShutdownButton/ShutdownButton';

function ComputerScreenPageWrapper ({children, BGColor}: { children: ReactNode, BGColor?: string }) {
  return (
    <div className="ComputerWrapper" style={{backgroundColor: BGColor}}>
        { children }
      <div className="ShutdownButton">
        <ShutdownButton/>
      </div>
    </div>
    )
}

export default ComputerScreenPageWrapper;
