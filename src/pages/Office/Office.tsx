import { ReactComponent as OfficeImage } from "./office.svg";
import SvgWrapper from '../../components/SvgWrapper/SvgWrapper';

function OfficePage () {

  const monitorElementId = 'monitor';

  return (
    <SvgWrapper elementId={monitorElementId}>
      <OfficeImage/>
    </SvgWrapper>
  )
}

export default OfficePage;
