import React from 'react';

type Props = {
    readonly info: {
        readonly title: string;
        readonly artist: string;
    };
    deleteSong: Function;
};

const Song = ({info, deleteSong}: Props) => {
    const boxChecked = () => {
        deleteSong();
    };

    return (
        <div>
            <input type="checkbox" onChange={boxChecked} />
            {info.title} by {info.artist}
        </div>
    );
};

export default Song;