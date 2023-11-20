import React, { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { openFollowerWindow } from '../../reducers/screenReducer';

// todo: input: add callback

const SvgWrapper = ({ elementId, children }: {elementId: string, children: ReactNode}) => {

  const dispatch = useDispatch();

  React.useEffect(() => {

    const onClick = () => {
      dispatch(openFollowerWindow());
    };

    const monitor = document.getElementById(elementId);

    monitor?.addEventListener("click", onClick);

    return () => monitor?.removeEventListener("click", onClick);
  }, [dispatch, elementId]);

  return (
    <>
      { children }
    </>
  );
};

export default SvgWrapper;
