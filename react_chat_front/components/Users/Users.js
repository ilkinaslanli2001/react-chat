import React from 'react';
import classes from "./users.module.css";
import User from "../User/User";
import {useSelector} from "react-redux";

function Users({results}) {
    const {user} = useSelector(state => state.userReducer)
    return (
        <div className={classes.wrapper}>
            {Object.keys(results).length !== 0 && results?.map((u, key) => {
                if (user.id !== u.id)
                    return <User key={key} data={u}/>
            })}
        </div>
    );
}

export default Users;