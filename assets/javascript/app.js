// Come up with 10 questions------ Choose Disney
// come up with the possible answers for each question-----  Found some questions on a Buzzfeed quiz that has three wrong and one right answer https://www.buzzfeed.com/briangalindo/the-ultimate-disney-trivia-quiz
// function to start game
// timer for page for question
// on click event when they select answer
// check user input vs correct answer to question (results at the end of the game)
// once answered call new page with new question
// repeat these steps until final question in the array
// once array is complete launch results page
// alert or some action for victory maybe 7/10 or better and the opposite for defeat
// function to restart the game to play again------still need help on this one

//create array of objects(one question and 4 possible answers and one correct answers)

// doing the single page instead, seemed easier------
// write the jQuery next
// practice write functions 50 times this weekend per tutor Michael------done!

var questions = [
  {
    ques: "Which phrase does the Evil Queen in Snow White actually say?",
    ans: [
      "Mirror, mirror, on the wall — who is the fairest of them all?",
      "Magic mirror, on the wall — who is the fairest one of all?”, “Mirror, mirror, on the wall — who is the fairest one of all?”, “Magic mirror, on the wall — who is the fairest of them all?”"
    ],
    name: "snowWhiteQueen",
    correct: "Magic mirror, on the wall — who is the fairest one of all?",
    divClass: ".snowWhiteQueen"
  },
  {
    ques:
      "Finish the lyrics: “Wouldn't you think I'm the girl, the girl who has everything? Look at this trove, treasures untold…",
    ans: [
      "It’s full of gizmos and gadgets galore.",
      "Wonders from all over the world.",
      "There so much to be known.",
      "How many wonders can one cavern hold?"
    ],
    name: "littleMermaid",
    correct: "How many wonders can one cavern hold?",
    divClass: ".littleMermaid"
  },
  {
    ques:
      "What is the name of the organization Bernard and Miss Bianca work in The Rescuers?",
    ans: [
      "The Rescue Aid Society",
      "The International Rescue Organization",
      "The Rescuers",
      "The Secret Helpers"
    ],
    name: "theRescuers",
    correct: "The Rescue Aid Society",
    divClass: ".theRescuers"
  },
  {
    ques: "Why is the Horned King searching for the Black Cauldron?",
    ans: [
      "It has the power to create an army of undead warriors.",
      "It has the power to bring him back to life.",
      "It has the power to control the minds of humans.",
      "It has the power to help him destroy the world."
    ],
    name: "theBlackCauldron",
    correct: "It has the power to create an army of undead warriors.",
    divClass: ".theBlackCauldron"
  },
  {
    ques:
      "In Pocahontas, what did Pocahontas see in her dream that made her believe that a change was coming?",
    ans: [
      "A spinning arrow",
      "A strange cloud formation",
      "A hawk circling her village",
      "A burning blue fire"
    ],
    name: "pocahontas",
    correct: "A spinning arrow",
    divClass: ".pocahontas"
  },
  {
    ques:
      "In Hercules, Hades promised not to harm Megara if Hercules gave up his strength for how long?",
    ans: ["12 hours", "24 hours", "36 hours", "48 hours"],
    name: "hercules",
    correct: "24",
    divClass: ".hercules"
  },
  {
    ques:
      "On whose shoulders does Dopey stand on in order to dance with Snow White during “The Silly Song” scene?",
    ans: ["Doc", "Grumpy", "Sneezy", "Happy"],
    name: "snowWhiteDwarfs",
    correct: "Sneezy",
    divClass: ".snowWhiteDwarfs"
  },
  {
    ques:
      "In Alice in Wonderland, aside from a pocket watch, what else is the White Rabbit holding when Alice encounters him?",
    ans: ["A cane", "An umbrella", "A top hat", "All of the above"],
    name: "aliceInWonderland",
    correct: "An umbrella",
    divClass: ".aliceInWonderland"
  },
  {
    ques: "How many years does the Genie say he has been trapped in the lamp?",
    ans: ["100 years", "500 years", "1,000 years", "10,000 years"],
    name: "genie",
    correct: "10,000 years",
    divClass: ".genie"
  },
  {
    ques: "What does the matchmaker criticize Mulan for?",
    ans: [
      "Being too tall.",
      "Being too skinny.",
      "Having bad posture.",
      "Having big feet."
    ],
    name: "mulan",
    correct: "Being too skinny.",
    divClass: ".mulan"
  }
];
