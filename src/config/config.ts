interface replyOption {
  optionText: string,
  outcomeStep: number | null
}

interface storylineStep {
  requestText: string,
  options: replyOption[]
}

interface FollowerInfo {
  name: string,
  storyline: storylineStep[]
}

export const FollowersConfig: FollowerInfo[] = [
  {
    name: "the famous Ville Valo",
    storyline: [
      {
        requestText: "We are so young, Our lives have just begun, But already we're considering escape from this world...",
        options: [
          {
            optionText: "Do it, Ville, nobody likes your songs anyway",
            outcomeStep: null
          },
          {
            optionText: "Wait! I will join you in death",
            outcomeStep: 1
          }
        ]
      }
    ]
  },

  {
    name: "Bob the Burly Bodybuilder",
    storyline: [
      {
        requestText: "I have called out my crash's supervisor to arm-wrestling. I don't know what to do now...",
        options: [
          {
            optionText: "What? You better talk honeslty to her about your feelings!",
            outcomeStep: null
          },
          {
            optionText: "You should apologize about this challenge, my friend.",
            outcomeStep: 1
          }
        ]
      }
    ]
  }
]
