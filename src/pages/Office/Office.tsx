import { ReactComponent as OfficeImage } from './office.svg';
import SvgWrapper from '../../components/SvgWrapper/SvgWrapper';
import { openDesktopScreen } from '../../reducers/screenReducer';
import { useDispatch, useSelector } from 'react-redux';
import { GodsCharacters, openScriptLine } from '../../reducers/dialogueReducer';
import { switchTimeBlock } from '../../reducers/timeReducer';
import store from '../../reducers/store';

function OfficePage () {

  const monitorElementId = 'monitor';
  const clockElementId = 'clock';
  const scalesElementId = 'scales';

  const dispatch = useDispatch();

  const godlyParameters = useSelector((state: ReturnType<typeof store.getState>) => state.providence);

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
            dispatch(openScriptLine({text: "I wonder, who decided on this clock design. Anyway, Isis said that if I want to finish work for now, I can 'double-click' this clock - whatever this means. ", speaker: GodsCharacters.Anubis}));
          }
        },
        {
          elementId: clockElementId,
          eventType: 'dblclick',
          callback: () => {
            dispatch(switchTimeBlock());
            dispatch(openScriptLine({text: "There it goes - some time has passed and someone again needs Anubis for some reason.", speaker: GodsCharacters.Anubis}));
          }
        },
        {
          elementId: scalesElementId,
          callback: () => {
            dispatch(openScriptLine({text: `Ah, my dear old scales. Let's see... I have ${godlyParameters.followers} followers and ${godlyParameters.providenceAmount} mystical points of providence. Huh?`, speaker: GodsCharacters.Anubis}))
          }
        }
      ]}
    >
      <OfficeImage/>
    </SvgWrapper>
  )
}

export default OfficePage;
