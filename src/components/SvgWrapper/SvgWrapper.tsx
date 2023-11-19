import React, { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { openFollowerWindow } from '../../reducers/screenReducer';

// todo: input: elementId and callback

const SvgWrapper = ({children}: {children: ReactNode}) => {


  const dispatch = useDispatch();

  React.useEffect(() => {

    const onClick = () => {
      dispatch(openFollowerWindow());
    };

    const monitor = document.getElementById("monitor");

    monitor?.addEventListener("click", onClick);

    return () => monitor?.removeEventListener("click", onClick);
  }, [dispatch]);

  return (
    <>
      { children }
    </>
  );
};

export default SvgWrapper;
