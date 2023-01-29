import TinderCard from 'react-tinder-card'
import { useState } from 'react'
import ChatContainer from '../components/ChatContainer'

const Dashboard = () => {


  const characters = [
    {
      name: 'Richard Hendricks',
      url: 'https://images.unsplash.com/photo-1674078120310-b1b1a774c5a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      name: 'Erlich Bachman',
      url: 'https://images.unsplash.com/photo-1674037204170-ca7f46a68b0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      name: 'Monica Hall',
      url: 'https://images.unsplash.com/photo-1674070259530-c562efab6e7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      name: 'Jared Dunn',
      url: 'https://images.unsplash.com/photo-1673897607339-de381d2e1e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      name: 'Dinesh Chugtai',
      url: 'https://images.unsplash.com/photo-1673798856878-77e9494f99e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }
  ]
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    // updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }



  return (
    <div className="dashboard">
      <ChatContainer/>
      <div className="swipe-container">
        {/* <div className='card-overlay'> */}
        <div className="card-container">

          {characters.map((character) =>
            <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
              <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                <h3>{character.name}</h3>
              </div>
              
            </TinderCard>
          )}
          {/* </div> */}

        </div>
      </div>



    </div>
  )
}

export default Dashboard