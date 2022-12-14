import React, { useState } from 'react'
import { auth, db } from '../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const style = {
    form: `h-14 w-full max-w-[728px] flex text-xl absolute bottom-[-40px]`,
    input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-bone`,
    button: `w-[20%] bg-green-500`,
}

function SendMessage({ scroll }) {
    const [input, setInput] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault()
        if (input == '') {
            alert('Please enter a valid messae')
        }
        else {
            const { uid, email } = auth.currentUser
            await addDoc(collection(db, 'messages'), {
                text: input,
                email: email,
                uid,
                timestamp: serverTimestamp()
            })
            setInput('')
            scroll.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <form onSubmit={sendMessage} className={style.form}>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={style.input}
                type="text"
                placeholder='Message'
            />
            <button className={style.button} type={'submit'}>Send</button>
        </form>
    )
}

export default SendMessage
