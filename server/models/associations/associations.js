import { Quiz } from "../Quiz.js";
import { EducationLevel } from "../EducationLevel.js";
import {Genre} from '../Genre.js';
import {Locality} from '../Locality.js';
import {Question} from '../Questions.js';
import {Response} from '../Response.js';
import { QuestionsResponses } from "../QuestionsResponses.js";

Locality.hasMany(Quiz,{
    foreignKey:'locality_id',
    as:'locality_quiz'
});
Quiz.belongsTo(Locality,{
    foreignKey:'locality_id',
    as:'locality_quiz',
});

EducationLevel.hasMany(Quiz,{
    foreignKey:'education_level_id',
    as:'education_level_quiz'
});
Quiz.belongsTo(EducationLevel,{
    foreignKey:'education_level_id',
    as:'education_level_quiz'
});
Genre.hasMany(Quiz,{
    foreignKey: 'genre_id',
    as:'genre_quiz',
});
Quiz.belongsTo(Genre,{
    foreignKey:'genre_id',
    as:'genre_quiz',
});
Response.belongsToMany(Question,{
    through: QuestionsResponses,
    foreignKey:'question_id',
    as:'questions_responses',
});
Question.belongsToMany(Response,{
    through:QuestionsResponses,
    foreignKey:'response_id',
    as:'questions_responses'
});

sequelize.sync();