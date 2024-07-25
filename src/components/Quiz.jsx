import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import he from 'he';

const Quiz = () => {
    // Variable initiation
    const [quizList, setQuizList] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [result, setResult] = useState('');
    const [answeredCount, setAnsweredCount] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);
    const [timeLeft, setTimeLeft] = useState(120);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getQuiz();
        startTimer();
        // Cleanup the timer when the component unmounts
        return () => clearInterval(timerRef.current);
    }, []);

    const timerRef = React.useRef(null);

    // Function to start timer
    const startTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime > 1) return prevTime - 1;
                clearInterval(timerRef.current);
                handleQuizEnd();
                return 0;
            });
        }, 1000);
    };

    // Function to get quiz from opentdb
    const getQuiz = async () => {
        const response = await fetch('https://opentdb.com/api.php?amount=10&type=boolean');
        const data = await response.json();
        if (data.results && data.results.length > 0) {
            setQuizList(data.results);
        } else {
            console.error('Failed to fetch questions.');
        }
    };

    // Function as quiz controller
    const handleAnswer = (userAnswer) => {
        const currentQuestion = quizList[currentQuestionIndex];
        const correctAnswer = currentQuestion.correct_answer;
        if (userAnswer === correctAnswer) {
            setResult('Correct!');
            setCorrectCount(prevCount => prevCount + 1);
        } else {
            setResult('Incorrect!');
            setIncorrectCount(prevCount => prevCount + 1);
        }
        setAnsweredCount(prevCount => prevCount + 1);

        setTimeout(() => {
            setResult('');
            if (currentQuestionIndex + 1 < quizList.length) {
                setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            } else {
                handleQuizEnd();
            }
        }, 1000);
    };

    // Handling status quiz
    const handleQuizEnd = () => {
        setIsQuizFinished(true);
    };

    // Handling restart quiz
    const handleRestartQuiz = () => {
        setQuizList([]);
        setCurrentQuestionIndex(0);
        setResult('');
        setAnsweredCount(0);
        setCorrectCount(0);
        setIncorrectCount(0);
        setTimeLeft(120);
        setIsQuizFinished(false);
        getQuiz();
        startTimer(); // Restart the timer
    };

    // Calculate progress percentage
    const progressPercentage = (answeredCount / 10) * 100;

    if (isQuizFinished) {
        return (
            <div className="container mt-5">
                <article class="message">
                    <div class="message-header">
                        <p>Quiz Finished!</p>
                    </div>
                    <div class="message-body">
                        <p>Correct Answers: {correctCount}</p>
                        <p>Incorrect Answers: {incorrectCount}</p>
                        <p>Answered Questions: {answeredCount}/10</p>
                        <button className="button is-link mt-3" onClick={handleRestartQuiz}>Restart Quiz</button>
                    </div>
                </article>
            </div>
        );
    }

    const currentQuestion = quizList[currentQuestionIndex];

    return (
        <div>
            <div className="container mt-5">
                <progress className="progress is-link" value={progressPercentage} max="100">
                    {progressPercentage}%
                </progress>
                <div className="columns is-multiline">
                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <p className="title">
                                    {currentQuestion && he.decode(currentQuestion.question)}
                                </p>
                                <p>Time Left: {timeLeft} seconds</p>
                            </div>
                        </div>
                        <div className="card">
                            <footer className="card-footer">
                                <button
                                    className="button is-success card-footer-item mr-5"
                                    onClick={() => handleAnswer('True')}>
                                    True
                                </button>
                                <button
                                    className="button is-danger card-footer-item ml-5"
                                    onClick={() => handleAnswer('False')}>
                                    False
                                </button>
                            </footer>
                        </div>
                        {result && (
                            <div className={`notification ${result === 'Correct!' ? 'is-primary' : 'is-danger'} mt-3`}>
                                {result}
                            </div>
                        )}
                        <div className="mt-3">
                            <p>Answered Questions: {answeredCount}/10</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;
