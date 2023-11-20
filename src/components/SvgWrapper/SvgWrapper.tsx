import React, { ReactNode } from 'react';

const SvgWrapper = ({elementId, callback, children }: {
  elementId: string,
  callback: () => void,
  children: ReactNode
}) => {

  React.useEffect(() => {

    const onClick = () => {
      callback();
    };
    const clickableElement = document.getElementById(elementId);
    clickableElement?.addEventListener("click", onClick);

    return () => clickableElement?.removeEventListener("click", onClick);
  }, [callback, elementId]);

  return (
    <>
      { children }
    </>
  );
};

export default SvgWrapper;
