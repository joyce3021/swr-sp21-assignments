import React, { useState, ChangeEvent, useEffect } from 'react';
import eight_ball from './eight_ball.png';
import History from './History';
import './Game.css';

const Game = () => {
    // potential answers
    const ANSWERS = [
        "It is certain",
        "Reply hazy, try again",
        "Without a doubt",
        "Better not tell you now",
        "You may rely on it",
        "Don't count on it",
        "Cannot predict now",
        "Yes definitely",
        "Ask again later",
        "It is decidedly so",
        "Outlook not so good",
        "My sources say no",
        "As I see it, yes",
        "Very doubtful",
        "Concentrate and ask again",
        "Most likely",
        "Yes",
        "My reply is no",
        "Outlook good",
        "Signs point to yes"
    ];

    /* create states to track:
    1. number of turns
    2. list of "turns"
    3. current question
    4. current answer
    5. error message */
    const [numTurns, setTurns] = useState<number>(0);
    const [questAsked, setAsked] = useState<{ readonly question: string, readonly answer: string }[]>([]);
    const [currQuest, setQuestion] = useState<string>('');
    const [currAns, setAnswer] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setQuestion(e.currentTarget.value);

    const submitQuestion = () => {
        if (currQuest.length >= 2 && currQuest[currQuest.length - 1] === '?') {
            // generate a random answer
            const answer = ANSWERS[Math.floor(Math.random() * 20)];
            setAnswer(answer);
            setQuestion('');
            setError('');
            setTurns(numTurns + 1);
            setAsked([...questAsked, { question: currQuest, answer: answer }]);
        }
        else {
            // error message
            setError('Enter at least two characters, where the last character is a question mark');
            setAnswer('');
        }
    }

    // update document title
    useEffect(() => {
        document.title = `You asked ${numTurns} questions`;
    }, [numTurns]);

    return (
        <div className="container">
            <div className="rowitem">
                <h1>Number of questions asked: #{numTurns}</h1>
                <input 
                    type="text"
                    placeholder="Ask me a question..."
                    value={currQuest}
                    onChange={handleChange}
                />
                <button onClick={submitQuestion}>Ask!</button>

                <figure>
                    <img src={eight_ball} alt="Eight Ball" />
                </figure>

                <p className="response">{error ? error : currAns}</p>
            </div>
            
            <History questAsked={questAsked} />
        </div>
    );
}

export default Game;