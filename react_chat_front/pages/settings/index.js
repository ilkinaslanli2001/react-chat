import React, {useEffect, useState} from 'react';
import classes from './settings.module.css'
import {useDispatch, useSelector} from "react-redux";
import {logout, updateUser} from "../../store/actions/userActions";
import Wrapper from "../../components/Wrapper/Wrapper";
import ChangeLogo from '../../src/assets/svg/change.svg'
import WithAuth from '../../components/WithAuth'
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import InfoBox from "../../components/InfoBox/InfoBox";
import {SUCCESS} from '../../constants'
import {setInfoBox} from "../../store/actions/simpleActions";

function Index(props) {
    const dispatch = useDispatch()
    const {user, errors} = useSelector(state => state.userReducer)
    const {loading,info_box_type} = useSelector(state => state.simpleReducer)
    const [userData, setUserData] = useState({
        username: "",
        password: "",
        status: "",
        avatar: null
    })

    useEffect(() => {
        async function setData() {
            setUserData({
                username: user.username,
                status: user.status !== null ? user.status : "",
                avatar: user.avatar,
                password: ""
            })
        }

        setData()
    }, [user])
    const onSaveClick = async () => {
        var params = {}
        if (user.username !== userData.username) {
            params.username = userData.username
        }
        if (user.status !== userData.status) {
            params.status = userData.status
        }
        if (user.avatar !== userData.avatar) {
            params.avatar = userData.avatar
        }

        if (Object.keys(params).length !== 0) {
            params.username = userData.username
            await dispatch(updateUser(user.id, params))

        }
    }
    const onLogoutClick = async () => {
        await dispatch(logout())
    }
    const onImageChange = async (event) => {
        const picture = event.target.files[0]
        setUserData({...userData, avatar: URL.createObjectURL(picture)})
        let form_data = new FormData();
        await form_data.append('avatar', picture);
        await form_data.append('username', userData.username);
        await dispatch(updateUser(user.id, form_data))
    }

    return <Wrapper>

        <div className={classes.wrapper}>
            {info_box_type!==0 ? <InfoBox type={info_box_type}/>:undefined}
            <div className={[classes.container, 'glass'].join(' ')}>
                <div className={classes.img_wrapper}>
                    <img src={userData.avatar !== null ? userData.avatar : '/images/user.png'}
                         alt={userData.username}
                         className={[classes.profile_image, userData.avatar === undefined ? classes.noProfileImage : undefined].join(' ')}/>
                    <div className={classes.select_image}>
                        <input onChange={onImageChange} type="file" id="img" name="img" accept="image/*"/>
                        <i><ChangeLogo/></i>
                    </div>
                </div>
                {errors.avatar ?
                    <span className={["error", classes.img_error].join(' ')}>* {errors.avatar[0]}</span> : undefined}
                <input value={userData.username} onChange={(event) => {
                    setUserData({...userData, username: event.target.value})
                }} placeholder={'Username'}/>
                {errors.username ? <span className={"error"}>* {errors.username[0]}</span> : undefined}
                <input value={userData.status} onChange={(event) => {
                    setUserData({...userData, status: event.target.value})
                }}
                       placeholder={'Status'}/>
                <button onClick={onSaveClick}>{loading ? <LoadingSpinner/> : <span>SAVE</span>}</button>
                <button onClick={onLogoutClick} className={classes.logoutBTN}>LOGOUT</button>
            </div>
        </div>
    </Wrapper>


}

export default WithAuth(Index);