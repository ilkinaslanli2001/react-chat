import React, {useEffect, useState} from 'react';
import Wrapper from "../../components/Wrapper/Wrapper";
import classes from "./login.module.css";
import PasswordVisible from '../../src/assets/svg/view.svg'
import PasswordHide from '../../src/assets/svg/hide.svg'
import Link from 'next/link'
import {login} from "../../api";
import {useDispatch, useSelector} from "react-redux";
import {setFullLoading, setLoading} from "../../store/actions/simpleActions";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Router from "next/router";
import {setUser} from "../../store/actions/userActions";

function Index(props) {
    const dispatch = useDispatch()
    const {loading} = useSelector((state) => state.simpleReducer)

    const {user} = useSelector(state => state.userReducer)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [visible, setVisible] = useState(false)
    const [errors, setErrors] = useState({
        loginError: 0,
        emptyUsername: false,
        emptyPassword: false
    })

    useEffect(() => {
        dispatch(setFullLoading(true))
        if (Object.keys(user).length > 0) {
            dispatch(setFullLoading(false))
            Router.push('/')
        }
        dispatch(setFullLoading(false))
    }, [user])
    const onLoginClick = async () => {
        var ch_errors = {
            loginError: 0,
            emptyUsername: false,
            emptyPassword: false
        }
        if (username.replaceAll(' ', '').length === 0) {
            ch_errors.emptyUsername = true
        }
        if (password.replaceAll(' ', '').length === 0) {
            ch_errors.emptyPassword = true
        }
        setErrors(ch_errors)

        if (loading === false && !ch_errors.emptyPassword && !ch_errors.emptyUsername) {
            dispatch(setLoading(true))
            await login({username, password}).then(async data =>  {

              await  dispatch(setUser())
              await  Router.push('/')

              await  dispatch(setLoading(false))

            }).catch((error) => {
                setErrors((prevState) => ({...prevState, loginError: error.status}))
                dispatch(setLoading(false))
            })
        }
    }

    return <Wrapper>
        <div className={classes.wrapper}>
            <div className={[classes.container, "glass"].join(' ')}>
                <h1>Login</h1>
                <div className={classes.inputs}>
                    <input value={username} onChange={(event) => {
                        setUsername(event.target.value)
                    }} placeholder={"username"}/>
                    {errors.emptyUsername ? <span className={"error"}>Username is empty</span> : undefined}
                    <div className={classes.password_container}>
                        <input onChange={(event) => {
                            setPassword(event.target.value)
                        }} placeholder={"password"} type={visible ? "text" : "password"}/>
                        <i onClick={() => {
                            setVisible(!visible)
                        }}>{visible ? <PasswordVisible/> : <PasswordHide/>}</i>
                    </div>
                    {errors.emptyPassword && <span className={"error"}>Password is empty</span>}
                </div>
                <button className={loading === true ? classes.inactive : undefined}
                        onClick={onLoginClick}>{loading === true ? <LoadingSpinner/> : <span>Login</span>}</button>
                {errors.loginError === 401 && <span className={"error"}>Login or password is incorrect</span>}
                <div className={classes.links}>
                    <Link href={'/'}><a>Reset Password</a></Link>
                    <Link href={'/register'}><a>Sign In</a></Link>
                </div>
            </div>
        </div>
    </Wrapper>

}

export default Index

