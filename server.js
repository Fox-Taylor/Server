const express = require('express');
const { Quiz,Topic,Question } = require('./Models')

//const { loadAndInsert } = require('./populateDB')
const app = express();
const port = 3000;

// serve static assets from the public/ folder
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// this route matches any GET request to the http://localhost:3000
app.get('/quizzes', async (req, res) => {
    const quizzes = await Quiz.findAll()
    res.send(quizzes) // Converts Javascript quiz object to JSON
})

app.get('/quizzes/:id', async (req, res) => {
    try{ 
        const id = req.params.id
        const quiz = await Quiz.findByPk(id,{
            include:[{
                model:Topic,
                as:'topics',
                include: [{model:Question, as: 'questions'}]
            }]
        })
        if (!quiz){res.status(404).send("404 NOT FOUND")}
        res.status(200).json(quiz)
    }
   catch(error){console.log(error)}
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})