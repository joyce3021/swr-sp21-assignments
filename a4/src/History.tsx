import React from 'react';
import './History.css';

// pass state with array of questions from Game to History as props
type Props = {
    questAsked: { readonly question: string, readonly answer: string }[]
};

const History = ({ questAsked }: Props) => (
    <div className="history">
        <div>
            <p>Q/A History</p>
        </div>
        {questAsked.map( (questAns, i) => 
            <div key={i}>
                <p>Q: {questAns.question}</p>
                <p>A: {questAns.answer}</p>
            </div>
        )}
    </div>
);

export default History;