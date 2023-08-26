import React, { useState, useEffect } from 'react';
import { Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { TiMediaPause, TiMediaPlay, TiArrowBackOutline } from 'react-icons/ti';

function Pomodro_timer_app() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [isWorkSession, setIsWorkSession] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isActive1) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            // Timer session is over
            setIsWorkSession(!isWorkSession);
            setMinutes(isWorkSession ? 5 : 25);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive1, seconds, minutes, isWorkSession]);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            // Timer session is over
            setIsWorkSession(!isWorkSession);
            setMinutes(isWorkSession ? 5 : 25);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, seconds, minutes, isWorkSession]);


  const toggleTimer = () => {
    setIsActive(!isActive);
    // setIsActive1(!isActive1)
  };
  const toggleTimer1 = () => {
    // setIsActive(!isActive);
    setIsActive1(!isActive1)
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsActive1(false);
    setMinutes(isWorkSession ? 25 : 5);
    setSeconds(0);
  };

  return (
    <Container centerContent mt={25}>
      <Heading as="h1"   mb={6} noOfLines={1} size='lg'>
     Well Come To Pomodro timer app
      </Heading>
      <VStack spacing={4}>
        <Text fontSize="4xl">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          {isWorkSession ? 'Work Session' : 'Break Session'}
        </Text>
        <Button
          size="lg"
          leftIcon={isActive ? <TiMediaPause /> : <TiMediaPlay />}
          colorScheme="teal"
          onClick={toggleTimer}
        >
          {isActive ? 'Pause' : 'Start'}
        </Button>
        <Button
          size="lg"
          leftIcon={<TiArrowBackOutline />}
          colorScheme="gray"
          onClick={resetTimer}
        >
          Reset
        </Button>
      </VStack>
    </Container>
  );
}

export default Pomodro_timer_app;
