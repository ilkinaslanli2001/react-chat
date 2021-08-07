import React from 'react';
import classes from "./wrapper.module.css";

function Wrapper({children}) {
    return (
        <div className={[classes.wrapper]}>
            <div className={classes.container}>
                {children}
            </div>
        </div>
    );
}

export default Wrapper;