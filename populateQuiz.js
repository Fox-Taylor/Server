
const {MultipleChoiceQuiz,User,Quiz,Topic,Question,Answer} = require('./Models')

const fsp = require('fs').promises; // Node.js file system module with promises
const {sequelize} = require('./sequelize_index');

/**
 * Load the data from the file and
 * insert it in the database
 */
async function loadAndInsert() { 
    const quizFile = './quiz.json'; //asynchronously reads the contents of the restaurant data file
    const buffer = await fsp.readFile(quizFile); // wait for the restaurant data file to be read
    const quizArray = (JSON.parse(String(buffer))); //converts the read file data into JS objects (arrays)
    console.log(quizArray.length)
    // recreate the database tables
    await sequelize.sync({ force: true });

 //   let menuCounter = 1;

    for (let i = 0; i < quizArray.length; i++)  { // load quizzes 

        const currentQuiz = quizArray[i];

       const quiz = await Quiz.create({name: currentQuiz.name, highScore: currentQuiz.highscore})


        for (let j = 0; j < currentQuiz.topics.length; j++) { // load topics
           
            const currentTopic = currentQuiz.topics[j]

            await Topic.create({name: currentTopic.name,quizId:quiz.id})

           
            for (let k = 0; k < currentTopic.question.length; k++) { // load topics
           
                const currentQuestion = currentTopic.question[k]
    
                await Question.create({text: currentQuestion.text,topicId:currentTopic.id})            

            

                for (let l = 0; l < currentQuestion.answers.length; l++) { 
            
                    const currentAnswer = currentQuestion.answers[l]
        
                    await Answer.create({text: currentAnswer.text})            

                }


            /*
            for (let k = 0; k < currentMenu.items.length; k++) { // load question
                const currentMenuItem = currentMenu.items[k]

                await MenuItem.create ({name: currentMenuItem.name, price: currentMenuItem.price, menu_id: menuCounter})
            }

            menuCounter++;
        }
*/
        }
      }
    }
}

module.export = loadAndInsert;

// local testing
loadAndInsert() 