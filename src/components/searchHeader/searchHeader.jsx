import React, { memo, useRef } from 'react';
import styles from './searchHeader.module.css';

const SearchHeader = memo(({onSearch}) => {

    const inputRef = useRef();

    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    }

    const onClick = () => {
        handleSearch()
    }

    const onKeypress = (event) =>{
        if(event.key === 'Enter'){
            handleSearch()
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" />
                <h1 className={styles.title}>Youtube</h1>
            </div>
            <input
                className={styles.input}
                type="search"
                placeholder="Search..."
                onKeyPress={onKeypress}
                ref={inputRef}
            />
            <button className={styles.button} type="submit" onClick={onClick}>
                <img
                className={styles.buttonImg}
                src={`${process.env.PUBLIC_URL}/images/search.png`}
                alt="search"
                />
            </button>
        </header>
    );
})

export default SearchHeader;