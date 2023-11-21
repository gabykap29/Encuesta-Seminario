import { Quiz,
    Genre,
    Locality,
    Question,
    Response,
    QuestionsResponses, } from "../models/associations/associations.js";



    export const createQuiz = async (req, res) => {
        const { localidad, genero, edad, carrera, materiaAdecuada, materiaAgregar,esObsoleto,materiaInnecesaria, responses } = req.body;
        console.log(req.body);
        try {
            let locality_id = parseInt(localidad);
            const newQuiz = await Quiz.create({ locality_id, genre_id: genero});
            if (!newQuiz) {
                return res.status(400).json({ message: 'Quiz not created' });
            }
            
            const response = [carrera, materiaAdecuada, materiaAgregar,esObsoleto,materiaInnecesaria,edad ]
            for (let i = 0; i < response.length; i++) {
                let newResponse = await Response.create({ response: response[i] });
                let findQuestion = await Question.findByPk(responses  .questionId[i]);
                console.log(findQuestion);
                await newResponse.addQuestion(findQuestion);
                await newQuiz.addQuizResponses(newResponse);
            }
            return res.status(200).json({ newQuiz, message: 'Quiz created' });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Error interno del servidor' });
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