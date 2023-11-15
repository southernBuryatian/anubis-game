import React, { useState } from 'react';
import './Button.css';

function Button({onClick, text, success = false }: {onClick: () => void, text: string, success?: boolean}) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onClick={success? ()=> {}: onClick}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      className={`Button ${isHover? 'onHover': ''} ${success? 'success': ''}`}
    >
      {text}
    </div>
  );
}

export default Button;
