import React, {useState, useRef} from 'react';
import classes from './inputBox.module.css'
import TelegramIcon from '../../src/assets/svg/send.svg'
import EmojiLogo from '../../src/assets/svg/smiling.svg'
import dynamic from "next/dynamic";


const EmojiPicker = dynamic(() => import('emoji-picker-react'), {
    ssr: false,
})

function InputBox({sendMessage}) {

    const ref = useRef(null);
    const [emojiActive, setEmojiActive] = useState(false)
    const [message, setMessage] = useState("")

    const onEmojiClick = (event, emojiObject) => {
        const cursor = ref.current.selectionStart;
        const text = message.slice(0, cursor) + emojiObject.emoji + message.slice(cursor);
        setMessage(text);
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            sendMessage(message)
            setMessage("")
            setEmojiActive(false)
        }
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.input_wrapper}>
                <input onKeyDown={handleKeyDown} ref={ref} value={message} onChange={(event) => {
                    setMessage(event.target.value)
                }}/>
                <i onClick={() => {
                    setEmojiActive(!emojiActive)
                }}><EmojiLogo/></i>
                <div className={classes.emoji_wrapper}>
                    <div className={[classes.emoji_container, emojiActive ? classes.active : undefined].join(' ')}>
                        <EmojiPicker onEmojiClick={onEmojiClick}/></div>
                </div>
                <i onClick={() => {
                    sendMessage(message) , setMessage(""), setEmojiActive(false)
                }}><TelegramIcon/></i>
            </div>
        </div>
    );
}

export default InputBox;