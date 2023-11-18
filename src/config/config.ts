interface followerStorylineState {
  "storylineStepId": number,
  "chosenOptions": number[],
  "storyline": [{
    "requestText": string,
    "options": replyOption[]
  }]
}

interface replyOption {
  optionText: string,
  outcomeStep: number | null
}

interface storylineStep {
  requestText: string,
  options: replyOption[]
}

const Ville: storylineStep[] = [
  {
    "requestText": "We are so young, Our lives have just begun, But already we're considering escape from this world...",
    "options": [
      {
        "optionText": "Do it, Ville, nobody likes your songs anyway",
        "outcomeStep": null
      },
      {
        "optionText": "Wait! I will join you in death",
        "outcomeStep": 1
      }
    ]
  },
  {
    "requestText": "This live ain't worth living... Baby join me in death.",
    "options": [
      {
        "optionText": "I will die tonight for love.",
        "outcomeStep": null
      }
    ]
  },
];

export const config = {
  "Slimey Jackie": {
    "storylineStepId": 0,
    "chosenOptions": [],
    "storyline": []
  },
  "Sad sad Ville": {
    "storylineStepId": 0,
    "chosenOptions": [],
    "storyline": [{
      "requestText": "We are so young, Our lives have just begun, But already we're considering escape from this world...",
      "options": [
        {
          "optionText": "Do it, Ville, nobody likes your songs anyway",
          "outcomeStep": null
        },
        {
          "optionText": "Wait! I will join you in death",
          "outcomeStep": null
        }
      ]
    }]
  },
  "Clownfaced Joe": {

  },
  "Flattering Ryan": {

  }
}
