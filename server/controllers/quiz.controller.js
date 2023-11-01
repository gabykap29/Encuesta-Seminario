import { Quiz,
    EducationLevel,
    Genre,
    Locality,
    Question,
    Response,
    QuestionsResponses, } from "../models/associations/associations.js";



export const createQuiz = async(req,res)=>{
    const {localidad_id, genre_id, responses, education_level} = req.body;
    try {
        const newQuiz = await Quiz.create({localidad_id, genre_id, education_level});
        if(!newQuiz){
            return res.status(400).json({message:'Quiz not created'});
        };
        console.log(responses);
        console.log(responses.response.length);
        for(let i = 0; i < responses.response.length; i++){

            console.log(responses.response[i], responses.questionId[i]);
            let newResponse = await Response.create({response:responses.response[i],});
            let findQuestion = await Question.findByPk(responses.questionId[i]);
            console.log(findQuestion);
            await newResponse.addQuestion(findQuestion);
            await newQuiz.addQuizResponses(newResponse);
        };
        return res.status(200).json({newQuiz, message:'Quiz created'});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error interno del servidor!'});
    }
};
export const getQuiz = async(req,res)=>{
    try {
        const quizzes = await Quiz.findAll({
            include:[{
                model:Response,
                as:'quizResponses',
                include:[{
                    model:Question,
                    as:'questions',
                }]
            }]
        });
        if(!quizzes){
            return res.status(404).json({message:'No quizzes found'});
        };
        return res.status(200).json({quizzes});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error interno del servidor!'});
    };
};

export const findQuiz = async(req,res)=>{
    const {id}=req.params;
    try {
        const quiz = await Quiz.findByPk(id);
        if(!quiz){
            return res.status(404).json({message:'Quiz not found'});
        };
        return res.status(200).json({quiz});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error interno del servidor!'});
    }
};