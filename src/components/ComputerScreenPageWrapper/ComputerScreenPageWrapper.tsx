import './ComputerScreenPageWrapper.css';
import { ReactNode } from 'react';

function ComputerScreenPageWrapper ({children, BGColor}: { children: ReactNode, BGColor?: string }) {
  return (
    <div className="Wrapper" style={{backgroundColor: BGColor}}>
        { children }
    </div>
    )
}

export default ComputerScreenPageWrapper;
