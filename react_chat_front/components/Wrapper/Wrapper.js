import React from 'react';
import classes from "./wrapper.module.css";
import {useSelector} from "react-redux";
import Loading from "../FullLoading/Loading";

function Wrapper({children}) {

    const {full_loading} = useSelector(state => state.simpleReducer)
    return full_loading?<Loading />: <div className={classes.wrapper}>
        <div className={classes.container}>
            {children}
        </div>
    </div>

}

export default Wrapper;