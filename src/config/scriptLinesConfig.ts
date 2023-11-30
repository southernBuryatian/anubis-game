import { GodsCharacters } from '../reducers/dialogueReducer';
import { OfficeElements } from '../pages/Office/OfficeElements';
import { Offices } from '../reducers/officeReducer';

export const scriptLinesConfig = {
  Intro: [
    { "character": GodsCharacters.Isis, "line": "You're awake, child." },
    { "character": GodsCharacters.Anubis, "line": "Isis?" },
    { "character": GodsCharacters.Isis, "line": "I am glad to welcome you, Anubis. I will show you your new workplace." },
    { "character": GodsCharacters.Anubis, "line": "If you insist... But could you first explain why did I wake up? I feel like I was asleep for an eternity." },
    { "character": GodsCharacters.Isis, "line": "I thought, it is obvious, child. After all these years you somehow have a new worshiper. And he needs his god, my dear." }
  ],
  Office: {
    [Offices.Poor]: {
      firstLook: 'What a dull office. Three thousand of years ago work conditions were much better.',
      [OfficeElements.scalesElementId]: 'Ah, my dear old scales. ',
      [OfficeElements.clockElementId]: 'I wonder, who decided on this clock design. Anyway, Isis said that if I want to finish work for now, I can \'double-click\' this clock - whatever this means.',
      [OfficeElements.monitorElementId]: '',
      [OfficeElements.chairElementId]: '',
    },
    [Offices.Mediocre]: {
      firstLook: 'Look at this! They gave me a new office, didn\'t they!',
      [OfficeElements.scalesElementId]: 'I definitely need to replace it to somewhere less dangerous. Later. Anyway, ',
      [OfficeElements.clockElementId]: 'They messed up Sphinx! But to be honest I somehow like this version better. If I want to finish work for now, I can \'double-click\' this clock. And now I even know how!',
      [OfficeElements.monitorElementId]: 'For some reason I hoped computer would look better too... Well, maybe next time.',
      [OfficeElements.chairElementId]: 'Ah, the chair looks like just what I need for my old godly back. Thank you, Isis, I guess?'
    },
    [Offices.Luxury]: {
      firstLook: '',
      [OfficeElements.scalesElementId]: 'Ah, my dear old scales. ',
      [OfficeElements.clockElementId]: 'I wonder, who decided on this clock design. Anyway, Isis said that if I want to finish work for now, I can \'double-click\' this clock - whatever this means.',
      [OfficeElements.monitorElementId]: '',
      [OfficeElements.chairElementId]: '',
    }
  }
}
