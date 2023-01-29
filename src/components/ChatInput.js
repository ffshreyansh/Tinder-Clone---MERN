import { useState } from "react"



const ChatInput=()=> {

    const [textarea, setTextArea] = useState(null)

  return (
    <div>
        <div className="chat-input">
            <textarea value={textarea} onChange={(e)=> setTextArea(e.target.value)}></textarea>
            <button type="submit" className="secondary-btn">Submit</button>
        </div>
    </div>
  )
}

export default ChatInput