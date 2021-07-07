import React from 'react';

const SearchHeader = () => {
    return (
        <div className="section__header">
            <div className="box__header">
                <div className="box__logo">
                    <h1>
                        <a href="">
                            {/* <img src="" alt="YouTuBe" /> */}
                        </a>
                    </h1>
                </div>
                <div className="box__search">
                    <h2 className="for-a11y">검색영역</h2>
                    <div className="box__form">
                        <input id="form__input" className="form__input" type="search"></input>
                        <button type="submit" className="button__search">검색</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchHeader;