import React, { useCallback, useState } from 'react';
import { Button, Container } from '@material-ui/core';
import cl from 'classnames';

import './MinuteQuiz.scss';

export const MinuteQuiz = () => {
  const [time, setTime] = useState(0);
  const [resultTime, setResultTime] = useState('00.0');
  const [isActive, setActive] = useState(false);

  const handleClick = useCallback(() => {
    const date = new Date();
    const currentTime = date.getTime();
    const calcTime = isActive ? ((currentTime - time) / 1000).toFixed(1) : '00.0';

    setTime(currentTime);
    setResultTime(calcTime);
    setActive(active => !active);
  });

  return (
    <Container component="main" maxWidth="sm">
      <span className="questionText">click on button after 1 minute</span>
      <div className={cl('timer', isActive && 'timer_hidden')}>{resultTime}s</div>
      <Button onClick={handleClick}>{isActive ? 'Stop' : 'Start'}</Button>
    </Container>
  );
};
