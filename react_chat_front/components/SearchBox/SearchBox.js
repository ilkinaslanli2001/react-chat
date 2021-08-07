import React, {useEffect, useState} from 'react';
import classes from "./searchBox.module.css";
import Users from "../Users/Users";
import SearchLogo from '../../src/assets/svg/loupe.svg'
import {axiosInstance} from "../../api";

function SearchBox(props) {

    const [searchInput, setSearchInput] = useState("")
    const [results, setResults] = useState([])
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (searchInput.length >= 2) {
                axiosInstance.get(`api/v1/users/?search=${searchInput}`).then((results) => {
                    setResults(results.data)
                }).catch((error) => {
                })
            }
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, [searchInput])
    return (
        <div className={classes.wrapper}>
            <div className={classes.search_wrapper}>
                <input value={searchInput} onChange={(event) => {
                    setSearchInput(event.target.value)
                }}/>
                <i><SearchLogo/></i>
            </div>
            <Users results={results}/>
        </div>
    );
}

export default SearchBox;