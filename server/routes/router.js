import express from 'express';
import { getQuestions, createQuestion,deleteQuestion } from '../controllers/questions.controller.js';
import { createQuiz, getQuiz,findQuiz } from '../controllers/quiz.controller.js';
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Hello world!');
});





//APIS

//Questions
router.get('/api/questions', getQuestions);
router.post('/api/questions/create', createQuestion);
router.delete('/api/questions/delete/:id', deleteQuestion);

//Quiz
router.get('/api/quiz/:id', findQuiz);
router.post('/api/quiz/create', createQuiz);
router.get('/api/quizs', getQuiz);


export default router;