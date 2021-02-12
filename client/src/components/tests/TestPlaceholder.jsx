import React, { useCallback, useState } from 'react';
import {
  LinearProgress,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';

import './TestPlaceholder.scss';

const TEST_ANSWER = [
  'Никогда',
  'Очень редко',
  'Редко',
  'Иногда',
  'Часто',
  'Очень часто',
  'Ежедневно',
];
const arr = [
  'ionquestion question v question question question v v vquestion vv question vquestionquestion questionquestionv question questionquestionv',
  'Никогда',
  'Очень редко',
  'Редко',
  'Иногда',
  'Часто',
  'Очень часто',
  'Ежедневно',
];
export const TestPlaceholder = () => {
  const [questionNum, setQuestionNum] = useState(1);
  const handleSubmit = () => {};
  const handleClick = useCallback(() =>
    questionNum === arr.length ? handleSubmit() : setQuestionNum(prev => prev + 1),
  );
  const normalise = value => (value * 100) / arr.length;

  return (
    <Container component="main" maxWidth="sm">
      <Box display="flex" alignItems="center">
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">
            {`${questionNum}/${arr.length}`}
          </Typography>
        </Box>
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" value={normalise(questionNum)} />
        </Box>
      </Box>
      <span className="questionText">{arr[questionNum - 1]}</span>
      {TEST_ANSWER.map((name, idx) => (
        <Button key={idx} onClick={handleClick} className="testButton" variant="outlined">
          {name}
        </Button>
      ))}
    </Container>
  );
};
