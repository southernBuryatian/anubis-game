import React from 'react';
import './ShutdownButton.css';
import { useDispatch } from 'react-redux';
import { closeDesktop } from '../../../reducers/screenReducer';

function ShutdownButton () {

  const dispatch = useDispatch();

  return (
    <div
      className="shutdown"
      onClick={() => {dispatch(closeDesktop())}}
    >
      I
    </div>
  )
}

export default ShutdownButton;
