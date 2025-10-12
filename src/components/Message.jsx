import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { LuSend } from "react-icons/lu";

function Message() {
    const [messageOpen, setMessageOpen] = useState(false)
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([])

    const botReplies = {
        "გამარჯობა": "გაგიმარჯოს 👋",
        "როგორ ხარ": "კარგად, შენ? 🙂",
        "რას შვები": "ვმუშაობ კოდზე 💻",
        "კარგად მადლობა" :"ძალიან კარგი",
        "ვინ ხარ": "მე ვარ @user128378322138, Giorgi Qashiashvili-ს მიერ შექმნილი მოდელი 🧠",
        "ჟიზნ ვორამ": "ვეჩნად!",
        "ვინ არის Giorgi Qashiashvili": "@user128378322138 მოდელის შემქმნელი, კონკრეტულად, ჩემი შემქმნელი",
        "რომელი მეფე მოიხსენიება როგორც „მეფეთ მეფე": "დავით აღმაშენებელი",
        "რომელი ღირსშესანიშნაობა მდებარეობს მცხეთაში?": "სვეტიცხოველი",
        "საქართველოს დედაქალაქი რომელია?": "თბილისი",
        "რომელ წელს გამოცხადდა საქართველოს დამოუკიდებლობა": "1991 წელს",
        "რომელია საქართველოს ეროვნული სიმბოლო?": "ვაზისა და ყურძნის მტევანი",
        "რომელ ქვეყანაში მდებარეობს ეიფელის კოშკი?":"საფრანგეთი, პარიზი."
    }

    const handleAdd = () => {
        if (!input.trim()) return


        const newMessage = {
            side: "me",
            text: input.trim(),
        }

        setMessages(prev => [...prev, newMessage])


        const userText = input.trim()
        setInput("")

        setTimeout(() => {
            let reply = botReplies[userText] || "სხვანაირად მკითხე, ვერ გავიგე 🤔";
            const botMessage = { side: "bot", text: reply }
            setMessages((prev) => [...prev, botMessage])
        }, 800)

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
                                    <li key={idx} className={`chat ${m.side === "me" ? "me" : "bot"}`}>
                                        <p>{m.text}</p>
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