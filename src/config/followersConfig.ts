interface replyOption {
  optionText: string,
  outcomeStep: number | null,
  followers?: number,
  providenceMultiplier?: number,
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
    "name": "Eugene the heuristic Egyptologist ex-(h)Ermeneutist",
    "storyline": [
      {
        "requestText": "Great Anubis, the guide of the underworld. It is desperate times therefore I am reaching you. I hope my prayers find you well. Tell me, please, if there is anything beyond this world? I am afraid that I might fail my Papyrology test, and my heart will explode.",
        "options": [
          {
            "optionText": "Acknowledge the fear and anxiety, encourage focused study for the test! Success is within your reach.",
            "outcomeStep": 1
          },
          {
            optionText: "Hey Eugene, why not form a study group with fellow history enthusiasts? Collective preparation not only eases the burden but also builds a supportive community. Together, you'll conquer the Papyrology test!",
            outcomeStep: 1,
            followers: 6,
            providenceMultiplier: 1,
          },
          {
            "optionText": "Eugene, you're not just a student; you're the Keeper of Ancient Wisdom. Passing the test is crucial for maintaining cosmic balance and preserving the knowledge of the ages. Rise to the occasion.",
            "outcomeStep": 1
          }
        ]
      },
      {
        "requestText": "Mighty Anubis, I have recently graduated from the university and am enthusiastic about founding my own private archaeological expedition. However, I've been facing rejection after rejection in my funding applications. Frustration and self-doubt are starting to creep in. What advice would you offer me?",
        "options": [
          {
            "optionText": "Setbacks are a natural part of any journey. Reevaluate your proposal, seek feedback, and persevere. The right opportunity might be just around the corner.",
            "outcomeStep": 4
          },
          {
            "optionText": "Eugene, take a moment to reflect on your passion and commitment. Consider reaching out to experienced archaeologists for mentorship and guidance. Their insights might open new doors for your expedition.",
            "outcomeStep": 3
          },
          {
            "optionText": "Hey Eugene, have you explored alternative funding sources, like crowdfunding or partnerships with archaeological institutions? Sometimes, unconventional paths lead to extraordinary discoveries.",
            "outcomeStep": 3
          },
          {
            "optionText": "Remember the inspiring story of the discovery of Richard III's tomb. Embrace the challenges as part of your unique journey. Your perseverance may lead to a groundbreaking archaeological find!",
            "outcomeStep": 2
          }
        ]
      },
      {
        "requestText": "hey, Anubis, how are you doing? My expedition was a great success. I found ancient scripts, and something that I believe might be the remains of undiscovered civilization... What should be my next move?",
        "options": [
          {
            "optionText": "Carefully document the findings and collaborate with renowned archaeologists to conduct in-depth research on the newly discovered tomb. Share the knowledge with the world, contributing to the understanding of ancient Egyptian history.",
            "outcomeStep": null
          },
          {
            "optionText": "Organize a press conference to share the groundbreaking discovery with the public. Initiate partnerships with museums and academic institutions to ensure the proper preservation and exhibition of the newfound artifacts.",
            "outcomeStep": null
          },
          {
            "optionText": "Consider forming an international team of archaeologists to continue exploring the site and uncover more details about the civilization you mentioned. This discovery could rewrite history!",
            "outcomeStep": null
          },
          {
            "optionText": "Wow, I think you found my jackal-pet Misty's doghouse! Well done, Eugene! Tell her that I miss her",
            "outcomeStep": null
          },
        ]
      },
      {
        "requestText": "hey, Anubis, how are you doing? What should be my next move? despite my efforts, the funding for the archaeological expedition fell through. However, a prestigious university offers me a position as a history teacher. How do I respond?",
        "options": [
          {
            "optionText": "Accept the teaching position with gratitude. Use the opportunity to inspire the next generation with your passion for history, sharing your knowledge and fostering a love for learning.",
            "outcomeStep": null
          },
          {
            "optionText": "Politely decline the teaching offer and continue searching for alternative funding options for your archaeological endeavors. You believe in the importance of your expedition and want to pursue it.",
            "outcomeStep": null
          },
          {
            "optionText": "Negotiate with the university to incorporate archaeological projects into your teaching role. Create a unique curriculum that blends theoretical knowledge with practical, hands-on experiences for your students.",
            "outcomeStep": null
          }
        ]
      },
      {
        "requestText": 'Dear Anubis,\n\nI hope this letter finds you well. As I reflect on my journey and seek guidance from you, I want to share a significant decision I\'ve made. After careful consideration and exploring various paths, I\'ve decided to embrace a new chapter in my life—I\'m diving into the world of game development.\n\nThis shift allows me to channel my love for history into creating educational and engaging historical games. I believe this endeavor will not only bring the past to life for players worldwide but also serve as a unique way to share the richness of our shared heritage.\n\nI appreciate the guidance you\'ve provided throughout my archaeological pursuits, and I\'m excited to embark on this new creative journey. Your continued blessings and support mean a lot to me.\n\nThank you for being a constant source of inspiration. I will be glad to receive one last advice from you before I continue this way by myself.\n\nSincerely,\nEugene\n',
        "options": [
          {
            "optionText": "Embrace the shift and enroll in game development courses. Channel your love for history into creating educational and engaging historical games that bring the past to life for players worldwide.",
            "outcomeStep": null
          },
          {
            "optionText": "Explore opportunities to collaborate with game developers who share your passion for history. Offer your expertise as a historical consultant to ensure accuracy and authenticity in historical video games.",
            "outcomeStep": null
          },
          {
            "optionText": "Continue to pursue archaeology and history as hobbies while maintaining your current career. Use your free time to contribute to historical game development projects as a side endeavor.",
            "outcomeStep": null
          }
        ]
      }
    ]
  },
  {
    name: "Samantha the Sculptor",
    storyline: [
      {
        requestText: "Hi! I have accidentally broken my neighbor's garden gnome while creating my new statue. I wonder what I could do now...",
        options: [
          {
            optionText: "Repair the damaged garden gnome",
            outcomeStep: null,
            followers: 1,
            providenceMultiplier: 3.5
          },
          {
            optionText: "Create a unique sculpture for the neighbor as a gesture of goodwill",
            outcomeStep: null,
            followers: 2,
            providenceMultiplier: 0.5
          },
          {
            optionText: "Collaborate with the neighbor on a joint art project",
            outcomeStep: null,
            followers: 4,
            providenceMultiplier: 0.5
          },
          {
            optionText: "Suggest turning all their garden gnomes into abstract art to create a trend",
            outcomeStep: null,
            followers: 10,
            providenceMultiplier: 0
          },
          {
            optionText: "Sculpt a pineapple instead of a gnome as a symbol of a new era in garden art",
            outcomeStep: null,
            followers: 15,
            providenceMultiplier: 0
          },
          {
            optionText: "Turn the damaged gnome into a performance art piece",
            outcomeStep: null,
            followers: 15,
            providenceMultiplier: 0
          },
        ]
      }
    ]
  },
  {
    "name": "Bob the Burly Bodybuilder",
    "storyline": [
      {
        "requestText": "I have called out my crush's supervisor to arm-wrestling. I don't know what to do now...",
        "options": [
          {
            "optionText": "You should apologize about this challenge, my friend.",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 3.5
          },
          {
            "optionText": "Showcase your strength through achievements at work instead.",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 2.5
          },
          {
            "optionText": "What? You better talk honestly to her about your feelings!",
            "outcomeStep": null,
            followers: 5,
            providenceMultiplier: 3.5
          },
          {
            "optionText": "Challenge everyone in the office to arm-wrestling matches to assert dominance.",
            "outcomeStep": null,
            followers: 100,
            providenceMultiplier: 0
          },
          {
            "optionText": "Start a rumor that arm-wrestling prowess is directly linked to job performance.",
            "outcomeStep": null,
            followers: 200,
            providenceMultiplier: 0
          },
          {
            "optionText": "Solve workplace conflicts with thumb wrestling matches.",
            "outcomeStep": null,
            followers: 20,
            providenceMultiplier: 0
          }
        ]
      }
    ]
  },
  {
    "name": "Charlie the Culinary Artist",
    "storyline": [
      {
        "requestText": "I accidentally added too much spice to the company potluck... It's been three days already since, but everyone is still complaining about heartburn. What should I do?",
        "options": [
          {
            "optionText": "Apologize and offer to organize a milder potluck next time.",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 3.5
          },
          {
            "optionText": "Host a spice-tasting event to showcase different flavors.",
            "outcomeStep": null,
            followers: 29,
            providenceMultiplier: 2.5
          },
          {
            "optionText": "Share recipes for a variety of dishes with coworkers.",
            "outcomeStep": null,
            followers: 10,
            providenceMultiplier: 1.5
          },
          {
            "optionText": "Infuse all future dishes with even more spice to assert dominance.",
            "outcomeStep": 1,
            followers: 12,
            providenceMultiplier: 0
          },
          {
            "optionText": "Declare yourself the 'Spice King' and demand tribute from coworkers.",
            "outcomeStep": 1,
            followers: 20,
            providenceMultiplier: 0
          },
          {
            "optionText": "Organize a hot sauce taste-testing event during an important meeting.",
            "outcomeStep": null,
            followers: 5,
            providenceMultiplier: 0
          }
        ]
      },
      {
        requestText: "So, things have taken a turn for the absurd here in the office. Inspired by my Spice King declaration, my coworkers have transformed our workspace into a spicy wonderland. The office decor has reached new heights of quirkiness, with spice-scented air fresheners, chili pepper-shaped desk accessories, and, believe it or not, a spice-filled piñata hanging around. It's like working in a spicy carnival!\n" + "\n" + "But that's not where the madness stops. The spice obsession has escalated into downright peculiar rituals. We now kick off our mornings with spice-themed chants that I can't quite comprehend, and our team-building exercises involve bizarre spice-infused activities. Meetings have become a spice spectacle, with a ceremonial \"spice scepter\" being passed to the speaker, and decisions are somehow tied to the spiciness of the snacks offered. It's beyond surreal.\n" + "\n" + "Now, here's the twist. I need your divine advice on how to navigate this absurd spice-induced chaos. I've got a feeling things might be spiraling out of control, and I'm not sure how to bring back a sense of normalcy without causing more unintended consequences. What should I do to turn down the spice meter and restore a semblance of order to our once-serene workplace?\n" + "\n" + "Awaiting your guidance,\n" + "\n" + "Charlie",
        options: [
          {
            "optionText": "Introduce a spice-infused fortune-telling activity.",
            "outcomeStep": null,
            followers: 100,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Keep pursuing your spice keenness, Charlie, my child. Did you know that a certain combination of spices is able to cause Teleportation?",
            "outcomeStep": null,
            followers: 20,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Invite a spice expert to educate the office on various spices, their cultural significance, and how to use them in a balanced and enjoyable way",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 3.5
          },
          {
            "optionText": "Make them a Spice Charity Challenge. Your coworkers can engage in fundraising activities related to spice, with the proceeds going to a charitable cause",
            "outcomeStep": null,
            followers: 15,
            providenceMultiplier: 3.5
          },
          {
            "optionText": "This spicy time is a great time to gather some spicy secrets. Start a Blackmail Extravaganza, create a newsletter with fake secrets about your coworkers! Make them regret!",
            "outcomeStep": null,
            followers: 200,
            providenceMultiplier: 0
          },
          {
            "optionText": "Organize a Harmonious Spice Blend Day! Let your coworkers come together to create unique spice blends that represent unity and diversity",
            "outcomeStep": null,
            followers: 100,
            providenceMultiplier: 2.5
          }
        ]
      },
    ]
  },
  {
    "name": "Lucy the Lumberjack",
    "storyline": [
      {
        "requestText": "Lucy accidentally hugged a coworker, and now they won't stop sharing personal information.",
        "options": [
          {
            "optionText": "Politely talk to the coworker about personal space.",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 3.5
          },
          {
            "optionText": "Suggest a team-building activity to redirect attention.",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Share a funny story to lighten the atmosphere.",
            "outcomeStep": null,
            followers: 10,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Hug every coworker to establish a new level of camaraderie.",
            "outcomeStep": null,
            followers: 20,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Start a 'Talk to a Tree' therapy session for the office.",
            "outcomeStep": null,
            followers: 1,
            providenceMultiplier: 2.5
          },
          {
            "optionText": "Encourage more hugs to improve workplace morale.",
            "outcomeStep": null,
            followers: 20,
            providenceMultiplier: 0
          }
        ]
      }
    ]
  },
  {
    "name": "Gary the Green Thumb",
    "storyline": [
      {
        "requestText": "Gary's well-tended garden is attracting too many tourists, causing disturbances in the neighborhood.",
        "options": [
          {
            "optionText": "Organize guided garden tours at scheduled times.",
            "outcomeStep": null,
            followers: 20,
            providenceMultiplier: 0
          },
          {
            "optionText": "Propose creating a community garden to share the beauty.",
            "outcomeStep": null,
            followers: 20,
            providenceMultiplier: 1.5
          },
          {
            "optionText": "Install discreet signs requesting respectful viewing.",
            "outcomeStep": null,
            followers: 10,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Install a toll booth for garden tours to generate income.",
            "outcomeStep": null,
            followers: 2000,
            providenceMultiplier: 0
          },
          {
            "optionText": "Start a reality TV show about the secret lives of plants.",
            "outcomeStep": null,
            followers: 2000,
            providenceMultiplier: 0
          },
          {
            "optionText": "Hire garden gnomes as security to manage tourist crowds.",
            "outcomeStep": null,
            followers: 3000,
            providenceMultiplier: 0.5
          }
        ]
      }
    ]
  },
  {
    "name": "Olivia the Office Analyst",
    "storyline": [
      {
        "requestText": "Olivia predicted a project failure, causing panic in the workplace.",
        "options": [
          {
            "optionText": "Focus on presenting solutions to avoid failure.",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 5.5
          },
          {
            "optionText": "Collaborate with the team to address concerns.",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 5.5
          },
          {
            "optionText": "Share positive aspects of the project to boost morale.",
            "outcomeStep": null,
            followers: 200,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Predict random and absurd events to keep the office on its toes.",
            "outcomeStep": null,
            followers: 200,
            providenceMultiplier: 0
          },
          {
            "optionText": "Replace all business meetings with magic eight-ball consultations.",
            "outcomeStep": null,
            followers: 1000,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Predict success in everything, regardless of the actual situation.",
            "outcomeStep": null,
            followers: 1000,
            providenceMultiplier: 0
          }
        ]
      }
    ]
  },
  {
    "name": "Max the Music Enthusiast",
    "storyline": [
      {
        "requestText": "Max composed a catchy jingle for a commercial, and now it's stuck in everyone's head.",
        "options": [
          {
            "optionText": "Create a new jingle that's more subtle.",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Apologize and offer a different advertising approach.",
            "outcomeStep": null,
            followers: 1,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Turn the jingle into a positive marketing campaign.",
            "outcomeStep": null,
            followers: 1000,
            providenceMultiplier: 3.5
          },
          {
            "optionText": "Compose a jingle that includes subliminal messages to control minds.",
            "outcomeStep": null,
            followers: 2000,
            providenceMultiplier: 3.5
          },
          {
            "optionText": "Start a musical flash mob at inconvenient times to boost spirits.",
            "outcomeStep": null,
            followers: 200,
            providenceMultiplier: 0
          },
          {
            "optionText": "Replace all elevator music with your catchy jingle.",
            "outcomeStep": null,
            followers: 8000,
            providenceMultiplier: 0
          }
        ]
      }
    ]
  },
  {
    "name": "Fiona the Farm-to-Table Farmer",
    "storyline": [
      {
        "requestText": "Fiona's farm-fresh eggs are revealing too much about people's personal lives, causing discomfort.",
        "options": [
          {
            "optionText": "Stop selling eggs with fortunes attached.",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Offer a disclaimer about the fortune-telling aspect.",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 2.5
          },
          {
            "optionText": "Create a separate line for regular farm products.",
            "outcomeStep": null,
            followers: 50,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Attach fake fortunes to eggs, predicting outlandish events.",
            "outcomeStep": null,
            followers: 1000,
            providenceMultiplier: 0
          },
          {
            "optionText": "Convince people that eating farm-fresh eggs will grant superpowers.",
            "outcomeStep": null,
            followers: 1000,
            providenceMultiplier: 0
          },
          {
            "optionText": "Start a rumor that the eggs are actually secret government spies.",
            "outcomeStep": null,
            followers: 15000,
            providenceMultiplier: 0
          }
        ]
      }
    ]
  },
  {
    "name": "Dexter the Distinguished Gentleman",
    "storyline": [
      {
        "requestText": "Dexter's beard has become a local sensation, and people constantly want to touch it for luck.",
        "options": [
          {
            "optionText": "Politely educate people about personal space.",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 10.5
          },
          {
            "optionText": "Trim the beard for practicality while maintaining style.",
            "outcomeStep": null,
            followers: 100,
            providenceMultiplier: 3.5
          },
          {
            "optionText": "Share amusing beard-related stories to connect with people.",
            "outcomeStep": null,
            followers: 500,
            providenceMultiplier: 4.5
          },
          {
            "optionText": "Offer beard-touching sessions for a fee.",
            "outcomeStep": null,
            followers: 1000,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Host a 'Beard Olympics' to showcase the versatility of facial hair.",
            "outcomeStep": null,
            followers: 200,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Convince everyone that beard grooming is the key to success.",
            "outcomeStep": null,
            followers: 2000,
            providenceMultiplier: 0
          }
        ]
      }
    ]
  },
  {
    "name": "Penelope the Painter",
    "storyline": [
      {
        "requestText": "Penelope accidentally used the wrong color on a community mural, causing confusion.",
        "options": [
          {
            "optionText": "Organize a community painting day to correct the mural.",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Add explanatory signage to the mural.",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Collaborate with other artists for a mural makeover.",
            "outcomeStep": null,
            followers: 20,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Paint all future murals in invisible ink for a mysterious vibe.",
            "outcomeStep": null,
            followers: 2000,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Declare the mural a social experiment to test observational skills.",
            "outcomeStep": null,
            followers: 210,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Create an art movement based on confusing and ambiguous murals.",
            "outcomeStep": null,
            followers: 250,
            providenceMultiplier: 0
          }
        ]
      }
    ]
  },
  {
    "name": "Yasmine the Yoga Enthusiast",
    "storyline": [
      {
        "requestText": "During an outdoor yoga session, participants got unexpectedly muddy. What should I do?",
        "options": [
          {
            "optionText": "Apologize to the participants, offer a free yoga session as compensation, and incorporate more mindful movement into future outdoor sessions.",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 10.5
          },
          {
            "optionText": "Host a special 'Mindful Movement in Nature' event to teach participants how to blend yoga with the serenity of the outdoors.",
            "outcomeStep": null,
            followers: 2000,
            providenceMultiplier: 2.5
          },
          {
            "optionText": "Declare that unexpected mud baths are a new trend in wellness and encourage participants to embrace the unplanned spa experience.",
            "outcomeStep": null,
            followers: 20000,
            providenceMultiplier: 0.5
          }
        ]
      }
    ]
  },
  {
    "name": "Don the Dinosaur Enthusiast",
    "storyline": [
      {
        "requestText": "I accidentally lost my community's beloved dinosaur costume. What should I do?",
        "options": [
          {
            "optionText": "Organize a community-wide search for the lost dinosaur costume.",
            "outcomeStep": null,
            followers: 25,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Host a 'Dino Discovery Day' where community members can showcase dinosaur-themed creations.",
            "outcomeStep": null,
            followers: 50,
            providenceMultiplier: 1.5
          },
          {
            "optionText": "Claim that the missing dinosaur costume is on a secret mission to protect the neighborhood.",
            "outcomeStep": null,
            followers: 3000,
            providenceMultiplier: 0
          }
        ]
      }
    ]
  },
  {
    "name": "Holly the Hairstylist",
    "storyline": [
      {
        "requestText": "I accidentally gave a client a mullet instead of the requested hairstyle. What should I do?",
        "options": [
          {
            "optionText": "Apologize sincerely for the mistake, offer a free styling session, and implement additional measures to prevent future errors.",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 10.5
          },
          {
            "optionText": "Host a 'Hair Appreciation Day' to celebrate the uniqueness of different hairstyles.",
            "outcomeStep": null,
            followers: 400,
            providenceMultiplier: 3.5
          },
          {
            "optionText": "Declare the accidental mullet as the latest trend in cutting-edge hairstyles.",
            "outcomeStep": null,
            followers: 2000,
            providenceMultiplier: 0.5
          }
        ]
      }
    ]
  },
  {
    "name": "Oscar the Office Prankster",
    "storyline": [
      {
        "requestText": "I accidentally pranked my coworker with helium balloons during an important meeting. What should I do?",
        "options": [
          {
            "optionText": "Apologize for the prank, ensure your coworker feels comfortable, and organize an 'Office Harmony Day.'",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 10.5
          },
          {
            "optionText": "Propose a 'Prank-Free Zone' policy in the office.",
            "outcomeStep": null,
            followers: 20,
            providenceMultiplier: 3.5
          },
          {
            "optionText": "Convince your coworker that the balloon prank was a team-building exercise.",
            "outcomeStep": null,
            followers: 200,
            providenceMultiplier: 0.5
          }
        ]
      }
    ]
  },
  {
    "name": "Ivy the Ice Cream Truck Driver",
    "storyline": [
      {
        "requestText": "Oops! I accidentally gave away all the ice cream for free during a mix-up. What should I do?",
        "options": [
          {
            "optionText": "Apologize to your customers, explain the mix-up, and offer a discount for their next purchase.",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 8.5
          },
          {
            "optionText": "Organize a 'Free Ice Cream Day' to turn the mix-up into a community event.",
            "outcomeStep": null,
            followers: 289,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Share a variety of ice cream recipes with your customers as a gesture of goodwill.",
            "outcomeStep": null,
            followers: 255,
            providenceMultiplier: 1.5
          },
          {
            "optionText": "Declare yourself the 'Generous Ice Cream Giver' and continue giving away free ice cream.",
            "outcomeStep": null,
            followers: 20000,
            providenceMultiplier: 0
          },
          {
            "optionText": "Convince your customers that it's a special promotion and encourage them to enjoy the unexpected treat.",
            "outcomeStep": null,
            followers: 200,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Host an impromptu ice cream party in the neighborhood to celebrate the mix-up.",
            "outcomeStep": null,
            followers: 300,
            providenceMultiplier: 0.5
          }
        ]
      }
    ]
  },
  {
    "name": "Percy the Pancake Picasso",
    "storyline": [
      {
        "requestText": "I accidentally turned my pancakes into a masterpiece. What should I do?",
        "options": [
          {
            "optionText": "Apologize for the masterpiece and organize a 'Pancake Painting Party.'",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 7.5
          },
          {
            "optionText": "Collaborate with local chefs to organize a 'Culinary Canvas' event.",
            "outcomeStep": null,
            followers: 100,
            providenceMultiplier: 2.5
          },
          {
            "optionText": "Declare the pancake masterpiece as a symbol of breakfast rebellion.",
            "outcomeStep": null,
            followers: 1000,
            providenceMultiplier: 0
          }
        ]
      }
    ]
  },
  {
    "name": "Octavia the Ostrich Opera Singer",
    "storyline": [
      {
        "requestText": "I accidentally turned my ostrich into an opera singer during a school play. What should I do?",
        "options": [
          {
            "optionText": "Apologize for the unexpected performance and offer to organize a magical garden party.",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 5.5
          },
          {
            "optionText": "Collaborate with local musicians to organize a diverse musical event.",
            "outcomeStep": null,
            followers: 500,
            providenceMultiplier: 3.5
          },
          {
            "optionText": "Convince the community that the ostrich has a divine singing talent.",
            "outcomeStep": null,
            followers: 1000,
            providenceMultiplier: 0
          }
        ]
      }
    ]
  },
  {
    "name": "Leo the Laughter Liberator",
    "storyline": [
      {
        "requestText": "I accidentally disrupted a serious event with laughter. What should I do?",
        "options": [
          {
            "optionText": "Apologize for the disruption and organize a 'Giggles for Good' charity event.",
            "outcomeStep": null,
            followers: 20,
            providenceMultiplier: 0
          },
          {
            "optionText": "Initiate a 'Laughter Integration' initiative at the workplace.",
            "outcomeStep": null,
            followers: 20,
            providenceMultiplier: 0
          },
          {
            "optionText": "Declare the laughter disruption as an intentional stress-relief experiment.",
            "outcomeStep": null,
            followers: 20,
            providenceMultiplier: 4.5
          }
        ]
      }
    ]
  },
  {
    "name": "Quincy the Quantum Quilter",
    "storyline": [
      {
        "requestText": "I accidentally turned my quilt into a window to alternate dimensions. What should I do?",
        "options": [
          {
            "optionText": "Apologize for the unexpected display and offer to organize a 'Quantum Quilt Quest.'",
            "outcomeStep": null,
            followers: 100,
            providenceMultiplier: 3.5
          },
          {
            "optionText": "Collaborate with the community to create a quilt representing various perspectives.",
            "outcomeStep": null,
            followers: 40,
            providenceMultiplier: 2.5
          },
          {
            "optionText": "Convince the community that the quilt is a window to alternate dimensions.",
            "outcomeStep": null,
            followers: 1000,
            providenceMultiplier: 0
          }
        ]
      }
    ]
  },
  {
    "name": "Melissa the Mime Master",
    "storyline": [
      {
        "requestText": "I accidentally broke my silence during a performance. What should I do?",
        "options": [
          {
            "optionText": "Acknowledge the break in silence, apologize, and organize a 'Silent Apology Mime Show.'",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 3.5
          },
          {
            "optionText": "Incorporate the noise into the performance and host a 'Dynamic Mime Night.'",
            "outcomeStep": null,
            followers: 1000,
            providenceMultiplier: 4.5
          },
          {
            "optionText": "Declare the break as a deliberate artistic choice and suggest a 'Spontaneous Laughter Hour.'",
            "outcomeStep": null,
            followers: 200,
            providenceMultiplier: 1.5
          }
        ]
      }
    ]
  },
  {
    "name": "Gus the Gardening Guru",
    "storyline": [
      {
        "requestText": "I accidentally planted pumpkins instead of tomatoes in my neighbor's garden. What should I do?",
        "options": [
          {
            "optionText": "Apologize for the pumpkin mishap, offer to help repair the damaged tomatoes, and organize a 'Harvest Harmony' event.",
            "outcomeStep": null,
            followers: 9,
            providenceMultiplier: 4.5
          },
          {
            "optionText": "Collaborate with the neighbor on a joint garden project celebrating diverse crops.",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 2.5
          },
          {
            "optionText": "Declare the mishap as a culinary experiment and propose a 'Pumpkin-Tomato Fusion Feast.'",
            "outcomeStep": null,
            followers: 90,
            providenceMultiplier: 0.5
          }
        ]
      }
    ]
  },
  {
    "name": "Wendy the Weather Reporter",
    "storyline": [
      {
        "requestText": "My weather forecast was way off, and people are upset. What should I do?",
        "options": [
          {
            "optionText": "Apologize for the inaccurate forecast, offer insights into weather prediction challenges, and organize a community meteorology workshop.",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 3.5
          },
          {
            "optionText": "Host a 'Weather Awareness Day' to educate the community about weather forecasting.",
            "outcomeStep": null,
            followers: 400,
            providenceMultiplier: 2.5
          },
          {
            "optionText": "Declare that the unexpected rain was a community-wide water blessing.",
            "outcomeStep": null,
            followers: 1500,
            providenceMultiplier: 0
          }
        ]
      }
    ]
  },
  {
    "name": "Milo the Magician’s Apprentice",
    "storyline": [
      {
        "requestText": "I accidentally turned my neighbor's garden into a zoo while practicing a spell. What should I do?",
        "options": [
          {
            "optionText": "Apologize for the unexpected display and offer to organize a magical garden party.",
            "outcomeStep": null,
            followers: 20,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Collaborate with your neighbor on a magical garden makeover.",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 0.5

          },
          {
            "optionText": "Convince your neighbor that a garden turned zoo is the latest trend.",
            "outcomeStep": null,
            followers: 100,
            providenceMultiplier: 0
          }
        ]
      }
    ]
  },
  {
    "name": "Rita the Reality Show Fanatic",
    "storyline": [
      {
        "requestText": "I secretly auditioned for a reality show, and now they want my family involved. What should I do?",
        "options": [
          {
            "optionText": "Confess to your family and involve them in deciding the next steps.",
            "outcomeStep": null,
            followers: 4,
            providenceMultiplier: 0.8
          },
          {
            "optionText": "Withdraw from the show and propose a family talent show night.",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 0.9
          },
          {
            "optionText": "Claim that the reality show audition was a social experiment.",
            "outcomeStep": null,
            followers: 20,
            providenceMultiplier: 0.5
          }
        ]
      }
    ]
  },
  {
    "name": "Zack the Zombie Gamer",
    "storyline": [
      {
        "requestText": "Hey, I accidentally stole my friend's rare virtual item in a game. What should I do?",
        "options": [
          {
            "optionText": "Apologize and offer to help them level up a new character.",
            "outcomeStep": null,
            followers: 29,
            providenceMultiplier: 9.5
          },
          {
            "optionText": "Organize a gaming marathon where you both can play together.",
            "outcomeStep": null,
            followers: 23,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Convince your friend that virtual theft is a valid strategy in the gaming world.",
            "outcomeStep": null,
            followers: 4000,
            providenceMultiplier: 0
          }
        ]
      }
    ]
  },
  {
    "name": "Mia the Mixologist",
    "storyline": [
      {
        "requestText": "Hey there! I was experimenting with a new cocktail recipe for the upcoming party, but it turned out way too strong. The guests couldn't even finish a sip without wincing. What should I do?",
        "options": [
          {
            "optionText": "Apologize and offer to create a lighter version for the party.",

            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 6.5
          },
          {
            "optionText": "Host a mixology workshop to teach guests how to appreciate strong cocktails.",
            "outcomeStep": null,
            followers: 200,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Share a variety of cocktail recipes with guests, including lighter options.",
            "outcomeStep": null,
            followers: 800,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Infuse all future cocktails with even more alcohol to assert dominance.",
            "outcomeStep": null,
            followers: 30,
            providenceMultiplier: 0
          },
          {
            "optionText": "Declare yourself the 'Mixology Maven' and demand applause for your bold creations.",
            "outcomeStep": null,
            followers: 200,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Organize a cocktail-tasting event during an important business meeting.",
            "outcomeStep": null,
            followers: 200,
            providenceMultiplier: 0.5
          }
        ]
      }
    ]
  },
  {
    "name": "Winston the Water Balloon Architect",
    "storyline": [
      {
        "requestText": "I accidentally soaked the entire neighborhood with water balloons. What should I do?",
        "options": [
          {
            "optionText": "Apologize to the neighbors, organize a 'Water Balloon Cleanup Day,' and host a community water balloon fight.",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 5.5
          },
          {
            "optionText": "Host a 'Water Balloon Sculpture Contest' to turn the mishap into a creative and entertaining event.",
            "outcomeStep": null,
            followers: 100,
            providenceMultiplier: 3.5
          },
          {
            "optionText": "Declare the water balloon incident as a neighborhood-wide water festival and encourage water-themed celebrations.",
            "outcomeStep": null,
            followers: 89,
            providenceMultiplier: 0
          }
        ]
      }
    ]
  },
  {
    "name": "Zane the Zen Garden Designer",
    "storyline": [
      {
        "requestText": "I accidentally rearranged the rocks in my client's zen garden. What should I do?",
        "options": [
          {
            "optionText": "Apologize for the unintended changes, restore the original design, and offer a meditation workshop as compensation.",
            "outcomeStep": null,
            followers: 7,
            providenceMultiplier: 8.5
          },
          {
            "optionText": "Collaborate with the client to create a new and improved zen garden design, incorporating their preferences.",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 0.5
          },
          {
            "optionText": "Convince the client that the rearrangement is a form of zen expression, enhancing the garden's tranquility.",
            "outcomeStep": null,
            followers: 89,
            providenceMultiplier: 0
          }
        ]
      }
    ]
  },
  {
    "name": "Felicity the Fitness Instructor",
    "storyline": [
      {
        "requestText": "I accidentally led my fitness class into an unexpected mud pit. What should I do?",
        "options": [
          {
            "optionText": "Apologize to the participants, offer a free fitness session as compensation, and organize 'Adventure Fitness Day.'",
            "outcomeStep": null,
            followers: 200,
            providenceMultiplier: 5.5
          },
          {
            "optionText": "Host a 'Mud Workout Challenge' to turn the mishap into a fun and memorable fitness experience.",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 3.5
          },
          {
            "optionText": "Declare mud workouts as the latest trend in fitness and encourage participants to embrace the unplanned mud experience.",
            "outcomeStep": null,
            followers: 200,
            providenceMultiplier: 0.5
          }
        ]
      }
    ]
  },
  {
    "name": "Xander the Xylophone Maestro",
    "storyline": [
      {
        "requestText": "I accidentally played a dissonant note during a concert. What should I do?",
        "options": [
          {
            "optionText": "Acknowledge the mistake, apologize, and offer a special 'Harmony Concert' to showcase musical diversity.",
            "outcomeStep": null,
            followers: 2,
            providenceMultiplier: 5.5
          },
          {
            "optionText": "Incorporate the dissonance into a new composition, turning it into a unique musical piece.",
            "outcomeStep": null,
            followers: 200,
            providenceMultiplier: 2.5
          },
          {
            "optionText": "Convince the audience that dissonant notes are avant-garde and encourage appreciation for experimental music.",
            "outcomeStep": null,
            followers: 6000,
            providenceMultiplier: 4.5
          }
        ]
      }
    ]
  }

]
