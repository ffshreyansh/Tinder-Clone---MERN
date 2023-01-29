import logo3 from '../images/tinder-white.png'

const ChatHeader=()=> {
  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="img-container">
          <img src={logo3} alt="" />
        </div>
        <h3>Shreyansh Kr</h3>
      </div>
      <i class="fa-solid fa-right-from-bracket logout-icon"></i>
    </div>
  )
}

export default ChatHeader