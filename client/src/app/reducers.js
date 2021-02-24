import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '../reducers/quizSlice';

export default configureStore({
  reducer: {
    quiz: quizReducer,
  },
});
