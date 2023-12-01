import { Offices } from '../../reducers/officeReducer';

export const OfficeElements = {
  monitorElementId: 'monitor',
  clockElementId: 'clock',
  chairElementId: 'chair',
  scalesElementId: 'scales',
  plantsElementId: 'greens',
  secondMonitorElementId: 'sec-monitor',
  pictureElementId: 'pharaoh'
}

export const OfficeUpgrades = {
  [Offices.Poor]: 400,
  [Offices.Mediocre]: 8000,
  [Offices.Luxury]: 10000000
}

export const OfficeCoolness = [Offices.Poor, Offices.Mediocre, Offices.Luxury];
