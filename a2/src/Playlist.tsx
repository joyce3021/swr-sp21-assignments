import React, { useState, ChangeEvent } from 'react';
import Song from './Song';

const Playlist = () => {
    // maintain list of songs
    const [songs, setSongs] = useState<{ key: number; title: string; artist: string }[]>([]);

    // title input
    const [title, setTitle] = useState<string>('');
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };

    // artist input
    const [artist, setArtist] = useState<string>('');
    const changeArtist = (e: ChangeEvent<HTMLInputElement>) => {
        setArtist(e.currentTarget.value);
    };

    // song key
    const [key, setKey] = useState<number>(0);

    // submit song
    const addSong = () => {
        const info: {key: number; title: string; artist: string} = {key, title, artist};
        setSongs([...songs, info]);
        setKey(key + 1);
        setTitle('');
        setArtist('');
    };

    // remove song from playlist
    const removeSong = (i: number) => () => {
        songs.splice(i, 1);
        setSongs([...songs]);
    }

    return (
        <div>
            <h1>Playlist</h1>
            {songs.map( (song, i) => {
                return (
                    <Song 
                        key={song.key} 
                        info={song} 
                        deleteSong={removeSong(i)} 
                    />
                );
            })}
            <div>
                <label>Song title: </label>
                <input 
                    type="text" 
                    placeholder="Enter title" 
                    value={title}
                    onChange={changeTitle} 
                />
            </div>

            <div>
                <label>Artist: </label>
                <input 
                    type="text" 
                    placeholder="Enter artist" 
                    value={artist}
                    onChange={changeArtist} 
                />
            </div>

            <button onClick={addSong}>Add to playlist</button>
        </div>
    );
};

export default Playlist;