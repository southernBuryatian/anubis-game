import React, { ReactNode } from 'react';

const SvgWrapper = ({interactiveElements, children }: {
  interactiveElements: {
    elementId: string,
    callback: () => void
  } [],
  children: ReactNode
}) => {

  React.useEffect(() => {

    interactiveElements.forEach((element) => {
      const onClick = () => {
        element.callback();
      };
      const clickableElement = document.getElementById(element.elementId);
      clickableElement?.addEventListener("click", onClick);

    });

    return () => {
      interactiveElements.forEach((element) => {
        const clickableElement = document.getElementById(element.elementId);
        const onClick = () => {
          element.callback();
        };
        clickableElement?.removeEventListener("click", onClick)
      });
    }

    }, [interactiveElements])


  return (
    <>
      { children }
    </>
  );
};

export default SvgWrapper;
