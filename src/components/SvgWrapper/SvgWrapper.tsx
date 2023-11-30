import React, { ReactNode } from 'react';

const SvgWrapper = ({interactiveElements, children }: {
  interactiveElements: {
    elementId: string,
    callback: () => void,
    eventType?: keyof HTMLElementEventMap,
  } [],
  children: ReactNode
}) => {

  React.useEffect(() => {

    const eventListeners: (() => void)[] = [];

    interactiveElements.forEach((element, index) => {
      eventListeners.push(() => {
        element.callback();
      });

      const event = element.eventType ? element.eventType : "click";

      const clickableElement = document.getElementById(element.elementId);
      clickableElement?.addEventListener(event, eventListeners[index]);
    });

    return () => {
      interactiveElements.forEach((element, index) => {
        const event = element.eventType ? element.eventType : "click";

        const clickableElement = document.getElementById(element.elementId);
        clickableElement?.removeEventListener(event, eventListeners[index])
      });
    }

    }, [children])


  return (
    <>
      { children }
    </>
  );
};

export default SvgWrapper;
