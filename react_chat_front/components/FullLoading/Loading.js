import React from 'react';
import classes from './fullLoading.module.css'
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

function Loading() {
    return (
        <div className={classes.wrapper}>
            <LoadingSpinner/>
        </div>
    );
}

export default Loading;