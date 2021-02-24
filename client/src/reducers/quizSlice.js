import { createSlice } from '@reduxjs/toolkit';

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    selectedQuiz: {},
  },
  reducers: {
    selectQuiz: (state, action) => {
      state.selectedQuiz = action.payload;
    },
  },
});

export const { selectQuiz } = quizSlice.actions;

export const selectedQuiz = state => state.quiz.selectedQuiz;

export default quizSlice.reducer;
