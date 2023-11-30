import { ReactComponent as OfficeImage } from './office.svg';
import SvgWrapper from '../../components/SvgWrapper/SvgWrapper';
import { openDesktopScreen } from '../../reducers/screenReducer';
import { useDispatch } from 'react-redux';
import { Button } from 'nes-ui-react';
import { GodsCharacters, openScriptLine } from '../../reducers/dialogueReducer';
import { switchTimeBlock } from '../../reducers/timeReducer';

function OfficePage () {

  const monitorElementId = 'monitor';
  const clockElementId = 'clock';
  const scalesElementId = 'scales';

  const dispatch = useDispatch();

  // todo: remove hardcode

  //dispatch(openScriptLine('What a dull office. Three thousand of years ago work conditions were much better.'))

  return (
    <SvgWrapper
      interactiveElements={[
        {
          elementId: monitorElementId,
          callback: () => {
            dispatch(openDesktopScreen());
          }
        },
        {
          elementId: clockElementId,
          callback: () => {
            dispatch(openScriptLine({text: "I wonder, who decided on this clock design.", speaker: GodsCharacters.Anubis}));
            dispatch(switchTimeBlock());
          }
        },
        {
          elementId: scalesElementId,
          callback: () => {
            dispatch(openScriptLine({text: "Ah, my dear old scales.", speaker: GodsCharacters.Anubis}))
          }
        }
      ]}
    >
      <OfficeImage/>
    </SvgWrapper>
  )
}

export default OfficePage;
