import React from 'react';
import classes from "./userProfile.module.css";
import Settings from '../../src/assets/svg/cogwheel.svg'
import {useSelector} from "react-redux";
import Link from 'next/link'
import Image from 'next/image'
function UserProfile(props) {
    const {user} = useSelector(state => state.userReducer)

    return (
        <div className={classes.userProfile}>
            <div className={classes.block}>
                <Image width={60} height={60} quality={100} alt={user?.username}
                     className={[classes.profileImage, user?.avatar === null ? classes.noProfileImage : undefined].join(' ')}
                     src={user?.avatar !== null ? user?.avatar : '/images/user.png'}/>
                <div className={classes.userInfo}>
                    <h1>@{user?.username}</h1>
                    {user?.status !== null ? <p>{user?.status}</p> : undefined}
                </div>
            </div>
            <Link href={'/settings'}><a><i className={classes.settingBTN}><Settings/></i></a></Link>
        </div>
    );
}

export default UserProfile;