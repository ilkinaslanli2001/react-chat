import React, {useEffect, useState, useRef, useMemo} from 'react';
import classes from "./messageField.module.css";
import Messages from "../Messages/Messages";
import InputBox from "../InputBox/InputBox";
import {useDispatch, useSelector} from "react-redux";
import {axiosInstance} from "../../api";
import {setLoading} from "../../store/actions/simpleActions";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import LeftArrow from '../../src/assets/svg/left-arrow.svg'
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {clearOtherUser} from "../../store/actions/otherUserAction";
import Image from 'next/image'

function MessageField() {
    const {other_user} = useSelector(state => state.otherUserReducer)
    const {user} = useSelector(state => state.userReducer)
    const {loading} = useSelector(state => state.simpleReducer)
    const dispatch = useDispatch()
    const [messages, setMessages] = useState([])
    const socket = useMemo(() => {
        if (other_user.username !== undefined) return new WebSocket(`ws://127.0.0.1:8000/ws/chat/${other_user.username}/?${user.id}`);
    }, [other_user]);
    const {width} = useWindowDimensions();
    const divRef = useRef(null)

    const sendMessage = (message) => {
        if (socket) {
            socket.send(message)
        }
    }

    useEffect(() => {
        if (Object.keys(other_user).length > 0 && socket) {
            socket.onmessage = function (event) {
                setMessages([...messages, JSON.parse(event.data)])
                divRef.current===null||divRef.current?.scrollIntoView({behavior: "smooth"})
            }
        }
    }, [messages])

    useEffect(() => {
        async function get_messages_from_db() {
            dispatch(setLoading(true))
            await axiosInstance.get(`api/v1/chat/${user.username}/?other=${other_user.username}`).then((res) => {
                setMessages(res.data)
                dispatch(setLoading(false))
            }).catch((err) => {
                dispatch(setLoading(false))
            })
        }

        get_messages_from_db()
    }, [other_user])
    const onBackClick = () => {
        socket.close()
        dispatch(clearOtherUser())
    }

    return loading ? <div className={[classes.loading_wrapper, "glass"].join(' ')}><LoadingSpinner/>
    </div> : Object.keys(other_user).length > 0 ? <div className={classes.wrapper}>
        <div className={classes.user_info}>
            {width < 650 ?
                <i onClick={() => {
                    onBackClick()
                }} className={classes.left}><LeftArrow/></i> : undefined}
            <Image width={50} height={50} alt={other_user.username}
                   src={other_user.avatar !== null ? other_user.avatar : '/images/user.png'}/>
            <h1>@{other_user.username}</h1>
        </div>
        <Messages divRef={divRef} messages={messages}/>
        <InputBox sendMessage={sendMessage}/>
    </div> : <div className={classes.wrapper}/>

}

export default MessageField;