import ChatHeader from "./ChatHeader"
import MatchesDisplay from '../components/MatchesDisplay'
import ChatsDisplay from '../components/ChatsDiplay'

const ChatContainer = ({user}) => {
  return (
    <div className="chat-container">
        <ChatHeader user={user}/>
    <div>
        <button className="btns" disabled>Matches</button>
        <button className="btns">Chats</button>
    </div>
    <MatchesDisplay/>

    <ChatsDisplay/>
    </div>
  )
}

export default ChatContainer