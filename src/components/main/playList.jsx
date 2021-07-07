import React from 'react';
import PlayListItem from './playListItem';

const PlayList = (props) => {
    return(
        <div className="box__container">
            <div className="list__play-item">
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
            </div>
        </div>
    )
}

export default PlayList;