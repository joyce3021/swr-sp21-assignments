import React from 'react';

type Props = {
    readonly search: string,
    readonly friends: string[]
}

const Other = ({ search, friends }: Props) => {
    const others: string[] = [];

    friends.forEach(friend => {
        if (!search || !friend.toLowerCase().includes(search.toLowerCase())) {
            others.push(friend);
        }
    });

    return (
        others.length === 0 ?
            <p>No friends found</p>
            : <ul>{others.map((friend, i) => <li key={i}>{friend}</li>)}</ul>
    );
}

export default Other;