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
    name: "Samantha the Sculptor",
    storyline: [
      {
        requestText: "Hi! I have accidentally broken my neighbor's garden gnome while creating my new statue. I wonder what I could do now...",
        options: [
          {
            optionText: "Offer to repair the damaged garden gnome",
            outcomeStep: null
          },
          {
            optionText: "Create a unique sculpture for the neighbor as a gesture of goodwill",
            outcomeStep: null
          },
          {
            optionText: "Collaborate with the neighbor on a joint art project",
            outcomeStep: null
          },
          {
            optionText: "Suggest turning all garden gnomes into abstract art to create a trend",
            outcomeStep: null
          },
          {
            optionText: "Sculpt a pineapple as a symbol of a new era in garden art",
            outcomeStep: null
          },
          {
            optionText: "Turn the damaged gnome into a performance art piece",
            outcomeStep: null
          },
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
