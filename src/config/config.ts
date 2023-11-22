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


// todo: type FollowerId = 'Ville' | 'Bob' | etc;

export type FollowerId = keyof typeof FollowersConfig;

export const FollowersConfig: any = {
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
  },

  Bob: {
    displayName: "Bob the Burly Bodybuilder",
    storyline: [
      {
        "requestText": "",
        "options": []
      }
    ]

  },

  Samantha: {
    displayName: "Bob the Sculptor",
    storyline: [
      {
        "requestText": "",
        "options": []
      }
    ]

  },

} as const

