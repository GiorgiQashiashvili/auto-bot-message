import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { LuSend } from "react-icons/lu";

function Message() {
    const [messageOpen, setMessageOpen] = useState(false)
    const [sendMessage, setSendMessage] = useState({
        side: "",
        text: "",
    })
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([])

    const handleAdd = () => {
        if (!input.trim()) return


        const newMessage = {
            side: "",
            text: input.trim(),
        }

        setMessages(prev => [...prev, newMessage])

        setSendMessage(newMessage)

        setInput("")

    }

    const toggleMenu = () => {
        setMessageOpen(!messageOpen)
    }

    return <div className="send-message">

        <button className="message" onClick={toggleMenu}>Message</button>

        {messageOpen && (
            <div className="message-main">

                <div className="inside-content">

                    <div className="message-close">

                        <button className="close" onClick={toggleMenu}><IoCloseSharp /></button>

                    </div>

                    <div className="wrapper">

                        <div className="message-header">

                            <div className="small-profile">

                                <FaCircleUser />

                            </div>

                            <div className="user-info">
                                <p>@user128378322138</p>
                            </div>

                        </div>

                        <div className="footer">

                            <div className="messages">

                                <ul>{messages.map((m, idx) => (
                                    <li key={idx}>
                                        <b>{m.side}:</b>{m.text}
                                    </li>
                                ))}
                                </ul>

                            </div>

                            <div className="message-div">
                                <input
                                    type="text"
                                    placeholder="Send message"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                />


                                <button onClick={handleAdd}><LuSend /></button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        )}

    </div>
}
export default Message