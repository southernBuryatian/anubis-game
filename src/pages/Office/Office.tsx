import { ReactComponent as MediocreOfficeImg } from './Images/mediocreOffice.svg';
import { ReactComponent as PoorOfficeImg } from './Images/poorOffice.svg';
import { ReactComponent as LuxuryOffice } from './Images/luxuryOffice.svg';
import SvgWrapper from '../../components/SvgWrapper/SvgWrapper';
import { closeDesktop, openDesktopScreen } from '../../reducers/screenReducer';
import { useDispatch, useSelector } from 'react-redux';
import { GodsCharacters, openScriptLine } from '../../reducers/dialogueReducer';
import { switchTimeBlock } from '../../reducers/timeReducer';
import store from '../../reducers/store';
import { OfficeCoolness, OfficeElements, OfficeUpgrades } from './OfficeElements';
import { scriptLinesConfig } from '../../config/scriptLinesConfig';
import React, { useEffect } from 'react';
import { changeOffice, markOfficeAsSeen, Offices } from '../../reducers/officeReducer';

function OfficePage () {

  const dispatch = useDispatch();

  const godlyParameters = useSelector((state: ReturnType<typeof store.getState>) => state.providence);
  const OfficeState = useSelector((state: ReturnType<typeof store.getState>) => state.office);
  const scriptLines = scriptLinesConfig.Office[OfficeState.currentOffice];

  const getOfficeImage = (office: Offices) => {
    switch(office) {
      case Offices.Poor:
        return (<LuxuryOffice/>)
      case Offices.Mediocre:
        return (<MediocreOfficeImg/>);
      case Offices.Luxury:
        return (<LuxuryOffice/>)
      default:
        return (<PoorOfficeImg/>);
    }
  }

  useEffect(() => {
    if (OfficeState.isNewOffice) {
      dispatch(openScriptLine({
        text: scriptLines.firstLook,
        speaker: GodsCharacters.Anubis
      }));
      dispatch(markOfficeAsSeen());
    }
  }, [OfficeState.currentOffice])

  return (
    <SvgWrapper
      interactiveElements={[
        {
          elementId: OfficeElements.monitorElementId,
          callback: () => {
            dispatch(openDesktopScreen());
          }
        },
        {
          elementId: OfficeElements.clockElementId,
          callback: () => {
            dispatch(openScriptLine({text: scriptLines[OfficeElements.clockElementId], speaker: GodsCharacters.Anubis}));
          }
        },
        {
          elementId: OfficeElements.clockElementId,
          eventType: 'dblclick',
          callback: () => {
            dispatch(switchTimeBlock());
            if (
              godlyParameters.followers >= OfficeUpgrades[OfficeState.currentOffice] &&
              OfficeCoolness.indexOf(OfficeState.currentOffice) + 1 < OfficeCoolness.length
            ) {
              const nextCoolnessOfficeIndex = OfficeCoolness.indexOf(OfficeState.currentOffice) + 1;
              dispatch(closeDesktop());
              dispatch(changeOffice(OfficeCoolness[nextCoolnessOfficeIndex]));
            }
            dispatch(openScriptLine({text: "There it goes - some time has passed and someone again needs Anubis for some reason.", speaker: GodsCharacters.Anubis}));
          }
        },
        {
          elementId: OfficeElements.scalesElementId,
          callback: () => {
            dispatch(openScriptLine({
              text: scriptLines[OfficeElements.scalesElementId]
                + `Let's see... I have ${godlyParameters.followers} followers and ${godlyParameters.providenceAmount} mystical points of providence. Huh?`,
              speaker: GodsCharacters.Anubis
            }))
          }
        },
        {
          elementId: OfficeElements.chairElementId,
          callback: () => {
            dispatch(openScriptLine({
              text: scriptLines[OfficeElements.chairElementId],
              speaker: GodsCharacters.Anubis
            }))
          }
        },
        {
          elementId: OfficeElements.plantsElementId,
          callback: () => {
            dispatch(openScriptLine({
              text: scriptLines[OfficeElements.plantsElementId],
              speaker: GodsCharacters.Anubis
            }))
          }
        },
        {
          elementId: OfficeElements.secondMonitorElementId,
          callback: () => {
            dispatch(openScriptLine({
              text: scriptLines[OfficeElements.secondMonitorElementId],
              speaker: GodsCharacters.Anubis
            }))
          }
        },
        {
          elementId: OfficeElements.pictureElementId,
          callback: () => {
            dispatch(openScriptLine({
              text: scriptLines[OfficeElements.pictureElementId],
              speaker: GodsCharacters.Anubis
            }))
          }
        }
      ]}
    >
      { getOfficeImage(OfficeState.currentOffice) }
    </SvgWrapper>
  )
}

export default OfficePage;
