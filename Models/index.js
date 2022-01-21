const {MultipleChoiceQuiz} = require('./MultipleChoiceQuiz')
const {User} = require('./User')
const {Quiz} = require('./Quiz')
const {Topic} = require('./Topic')
const {Question} = require('./Question')
const {Answer} = require('./Answer')

Quiz.hasMany(Topic,{foreignKey:'quizId',as: 'topics'})
Topic.hasMany(Question,{foreignKey:'topicId',as: 'questions'})

module.exports = {Quiz,Topic,MultipleChoiceQuiz,User,Question,Answer}
