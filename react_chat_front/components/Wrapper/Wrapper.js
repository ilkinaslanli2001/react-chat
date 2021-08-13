import React from 'react';
import classes from "./wrapper.module.css";
import { useSelector} from "react-redux";
function Wrapper({children}) {


    return <div className={[classes.wrapper]}>
            <div className={classes.container}>
                {children}
            </div>
        </div>

}

export default Wrapper;