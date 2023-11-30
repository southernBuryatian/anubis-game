import { Offices } from '../../reducers/officeReducer';

export const OfficeElements = {
  monitorElementId: 'monitor',
  clockElementId: 'clock',
  chairElementId: 'chair',
  scalesElementId: 'scales',
}

//todo: balance considering followers config

export const OfficeUpgrades = {
  [Offices.Poor]: 6,
  [Offices.Mediocre]: 1000,
  [Offices.Luxury]: 1000000
}

export const OfficeCoolness = [Offices.Poor, Offices.Mediocre, Offices.Luxury];
