import React, {useState, useRef, useEffect} from 'react';
import classes from './inputBox.module.css'
import TelegramIcon from '../../src/assets/svg/send.svg'
import EmojiLogo from '../../src/assets/svg/smiling.svg'
import dynamic from "next/dynamic";


const EmojiPicker = dynamic(() => import('emoji-picker-react'), {
    ssr: false,
})

function InputBox({sendMessage}) {

    const inputRef = useRef(null);
    const emojiWrapperRef = useRef(null);
    const [emojiActive, setEmojiActive] = useState(false)
    const [message, setMessage] = useState("")

    const onEmojiClick = (event, emojiObject) => {
        const cursor = inputRef.current.selectionStart;
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

    useEffect(() => {
        // if user clicks somewhere except emojiWrapper then close emojiWrapper
        window.addEventListener("click", ()=>{ setEmojiActive(false)});
        return () => window.removeEventListener("click",()=>{ setEmojiActive(false)});
    }, [emojiActive])


    return (
        <div className={classes.wrapper}>
            <div className={classes.input_wrapper}>
                <input onKeyDown={handleKeyDown} ref={inputRef} value={message} onChange={(event) => {
                    setMessage(event.target.value)
                }}/>
                <i onClick={(event) => {
                    event.stopPropagation()
                    setEmojiActive(!emojiActive)
                }}><EmojiLogo/></i>

                <div ref={emojiWrapperRef} onClick={(e) => {
                    e.stopPropagation()
                }} className={[classes.emoji_container, emojiActive ? classes.active : undefined].join(' ')}>
                    <EmojiPicker onEmojiClick={onEmojiClick}/></div>

                <i onClick={() => {
                    sendMessage(message) , setMessage(""), setEmojiActive(false)
                }}><TelegramIcon/></i>
            </div>
        </div>
    );
}

export default InputBox;