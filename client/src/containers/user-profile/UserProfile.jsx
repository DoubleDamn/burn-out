import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

import { getQuizList } from '../../services/quizRequests';
import { Header } from '../../components/header/Header';
import { QuizPlaceholder } from '../../components/quiz/QuizPlaceholder';
import { MinuteQuiz } from '../../components/quiz/minute-quiz/MinuteQuiz';
import { selectedQuiz, selectQuiz } from '../../reducers/quizSlice';

const UserProfile = () => {
  const quiz = useSelector(selectedQuiz);
  const dispatch = useDispatch();
  const [quizList, setQuizList] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(async () => {
    const data = await getQuizList();
    setQuizList(data);
  }, []);

  const chooseQuiz = useCallback(q => {
    dispatch(selectQuiz(q));
    setShowQuiz(!showQuiz);
  });

  console.log(1, quiz, quizList, showQuiz);
  return (
    <>
      <Header />
      {quizList.map(i => (
        <Button onClick={() => chooseQuiz(i)} key={i.id}>
          {i.name}
        </Button>
      ))}
      {showQuiz && <QuizPlaceholder quiz={quiz} />}
      <MinuteQuiz />
    </>
  );
};

export default UserProfile;
