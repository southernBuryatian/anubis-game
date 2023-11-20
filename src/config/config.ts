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

interface FollowerInfo {
  displayName: string,
  storyline: storylineStep[]
}

interface Config {
 [key: string]: FollowerInfo
}

export const FollowersConfig: Config = {
  Ville: {
    displayName: 'the famous Ville Valo',
    storyline:  [
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
    ]
  }
}

