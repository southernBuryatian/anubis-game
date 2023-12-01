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
      firstLook: 'Ahh, a decent workplace. Finally!',
      [OfficeElements.scalesElementId]: 'Are they... digital now? ',
      [OfficeElements.clockElementId]: 'I am getting used to its weird design. And to its \'double-click\' feature too.',
      [OfficeElements.monitorElementId]: '',
      [OfficeElements.chairElementId]: 'Oh, so slippery! Riding this chair, I probably could outrun Ra\'s fancy barque.',
      [OfficeElements.plantsElementId]: 'How do they keep it alive? Where is an irrigation system?',
      [OfficeElements.secondMonitorElementId]: 'Seems that I need to learn how to use yet another device... I\'ll deal with it later, I promise.',
      [OfficeElements.pictureElementId]: 'I remember this one! Very nice person, very religious.',
    }
  },
  Ending: [
    { "character": GodsCharacters.Isis, "line": "It is the end of your probation, dear." },
    { "character": GodsCharacters.Anubis, "line": "Wait, did I have a probation?" },
    { "character": GodsCharacters.Anubis, "line": "It is funny... Sometimes I felt some invisible power to guide me." },
    { "character": GodsCharacters.Isis, "line": "It is true, dear. But now it is time for you two to part. Their game ends here, but your path just begins." },
  ]
}
