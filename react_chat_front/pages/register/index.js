import React, {useEffect, useState} from 'react';
import classes from "./register.module.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import PasswordVisible from "../../src/assets/svg/view.svg";
import PasswordHide from "../../src/assets/svg/hide.svg";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {setFullLoading, setLoading} from "../../store/actions/simpleActions";
import {register} from "../../api";
import Router from "next/router";
import PublicRoute from "../../components/PublicRoute";

function Index(props) {

    const dispatch = useDispatch()
    const {loading} = useSelector((state) => state.simpleReducer)
    const {user} = useSelector(state => state.userReducer)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [visible, setVisible] = useState(false)
    const [errors, setErrors] = useState({
        loginError: 0,
        usernameErrors: [],
        passwordErrors: []
    })
    useEffect(() => {
        dispatch(setFullLoading(true))
        if (Object.keys(user).length > 0) {
            dispatch(setFullLoading(false))
            Router.push('/')
        }
        dispatch(setFullLoading(false))
    }, [user])
    const onRegisterClick = async () => {
        var ch_errors = {
            loginError: 0,
            usernameErrors: [],
            passwordErrors: []
        }
        if (username.replaceAll(' ', '').length === 0) {
            ch_errors.usernameErrors = ["Username is empty"]
        }
        if (password.replaceAll(' ', '').length === 0) {
            ch_errors.passwordErrors = ["Password is empty"]
        }
        setErrors(ch_errors)

        if (loading === false && ch_errors.passwordErrors.length === 0 && ch_errors.usernameErrors.length === 0) {
            dispatch(setLoading(true))
            await register({username, password}).then(res => {

                dispatch(setLoading(false))
                if (res.status === 201)
                    Router.push('/login')
            }).catch((error) => {

                setErrors((prevState) => ({
                    ...prevState,
                    usernameErrors: error.errors.username !== undefined ? error.errors.username : [],
                    passwordErrors: error.errors.password !== undefined ? error.errors.password : [],

                }))
                dispatch(setLoading(false))
            })
        }


    }
    return (
        <Wrapper>
            <div className={classes.wrapper}>
                <div className={[classes.container, "glass"].join(' ')}>
                    <h1>Register</h1>
                    <div className={classes.inputs}>
                        <input value={username} onChange={(event) => {
                            setUsername(event.target.value)
                        }} placeholder={"username"}/>
                        {errors.usernameErrors ?
                            <span className={"error"}>{errors.usernameErrors[0]}</span> : undefined}
                        <div className={classes.password_container}>
                            <input onChange={(event) => {
                                setPassword(event.target.value)
                            }} placeholder={"password"} type={visible ? "text" : "password"}/>
                            <i onClick={() => {
                                setVisible(!visible)
                            }}>{visible ? <PasswordVisible/> : <PasswordHide/>}</i>
                        </div>
                        {errors.passwordErrors.length > 0 &&
                        <span className={"error"}>{errors.passwordErrors[0]}</span>}
                    </div>
                    <button onClick={() => {
                        onRegisterClick()
                    }} className={loading === true ? classes.inactive : undefined}>{loading === true ?
                        <LoadingSpinner/> : <span>Register</span>}</button>
                    {errors.loginError === 401 && <span className={"error"}>Login or password is incorrect</span>}
                    <div className={classes.links}>
                        <Link href={'/'}><a>Reset Password</a></Link>
                        <Link href={'/login'}><a>Login</a></Link>
                    </div>
                </div>
            </div>

        </Wrapper>
    );
}

export default PublicRoute(Index);