import React from 'react';

const PlayListItem = (props) => {

    return(
        <div className="list-item">
            <div className="box__item">
                <div className="box__thumnail">
                    썸네일
                </div>
                <div className="box__information">
                    <p className="box__title">
                        타이틀
                    </p>
                    <p className="box__chenel">
                        채널명
                    </p>
                    <p className="box__video-meta">
                        <span>조회수 35만회</span>
                        <span><span className="for-a11y">영상업로드 일자 : </span>1개월 전</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PlayListItem;