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

// todo: remove hack
export const OfficeUpgrades = {
  [Offices.Poor]: 35,
  [Offices.Mediocre]: 2500,
  [Offices.Luxury]: 10000000000
}

export const OfficeCoolness = [Offices.Poor, Offices.Mediocre, Offices.Luxury];
