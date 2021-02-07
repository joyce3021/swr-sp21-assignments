import React from 'react';

type Props = {
    readonly search: string,
    readonly friends: string[]
}

const Filtered = ({ search, friends }: Props) => {
    const filtered: string[] = [];

    if (search) {
        friends.forEach(friend => {
            if (friend.toLowerCase().includes(search.toLowerCase())) {
                filtered.push(friend);
            }
        });
    }

    return (
        filtered.length === 0 ?
            <p>No friends found</p>
            : <ul>{filtered.map((friend, i) => <li key={i}>{friend}</li>)}</ul>
    );
}

export default Filtered;