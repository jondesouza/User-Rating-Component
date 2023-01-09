import React, { useState } from 'react'
import './App.css';
import star from './assets/iconstar.svg'
import illustration from './assets/illustration.svg'

const App = () => {
  const [voting, setVoting] = useState('true')
  const [vote, setVote] = useState('0')

  const submitVote = () => {
    setVoting(!voting)
  }

  const voteOne = () => {
    setVote('1')
  }

  const voteTwo = () => {
    setVote('2')
  }

  const voteThree = () => {
    setVote('3')
  }

  const voteFour = () => {
    setVote('4')
  }

  const voteFive = () => {
    setVote('5')
  }

  return (
    <>
      <div>
        {voting ? (
          <main className='rate'>
            <div className='icon'><img src={star} alt="star" /></div>
            <div className='content-rating'>
              <h1>How did we do?</h1>
              <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>
            <div className='rating'>
              <button className='option' onClick={voteOne}>1</button>
              <button className='option' onClick={voteTwo}>2</button>
              <button className='option' onClick={voteThree}>3</button>
              <button className='option' onClick={voteFour}>4</button>
              <button className='option' onClick={voteFive}>5</button>
            </div>
            <button className='button' onClick={submitVote}>Submit</button>
          </main>
        ) : (
          <main className='voted'>
            <img src={illustration} alt='voted' />
            <div className='finalvote'>{`You selected ${vote} out of 5`}</div>
            <div className='content-voted'>
              <h1>Thank you!</h1>
              <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
            </div>
          </main>
        )}
      </div>
    </>
  )
}

export default App