import fetchData from './fetchAction';

export const getQuizList = () => fetchData('quiz/?limit=10&skip=0', 'GET');
export const getJourneyId = quizId => fetchData('journey/start', 'POST', { quizId });

export const getQuiz = quizId => fetchData(`quiz/${quizId}`, 'GET');
