import React, { ReactNode } from 'react';

const SvgWrapper = ({interactiveElements, children }: {
  interactiveElements: {
    elementId: string,
    callback: () => void
  } [],
  children: ReactNode
}) => {

  React.useEffect(() => {

    const eventListeners: (() => void)[] = [];

    interactiveElements.forEach((element, index) => {
      eventListeners.push(() => {
        element.callback();
      });

      const clickableElement = document.getElementById(element.elementId);
      clickableElement?.addEventListener("click", eventListeners[index]);
    });

    return () => {
      interactiveElements.forEach((element, index) => {
        const clickableElement = document.getElementById(element.elementId);
        clickableElement?.removeEventListener("click", eventListeners[index])
      });
    }

    }, [])


  return (
    <>
      { children }
    </>
  );
};

export default SvgWrapper;
