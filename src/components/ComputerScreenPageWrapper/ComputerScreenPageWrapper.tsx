import './ComputerScreenPageWrapper.css';
import { ReactNode } from 'react';

function ComputerScreenPageWrapper ({children, BGColor}: { children: ReactNode, BGColor?: string }) {
  return (
    <div className={`Wrapper background-color: blue`} style={{backgroundColor: BGColor}}>
        { children }
    </div>
    )
}

export default ComputerScreenPageWrapper;
