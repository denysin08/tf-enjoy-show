import React, { useEffect } from 'react'
import './App.css'
import CreateRoom from './CreateRoom'
import JoinRoom from './JoinRoom'
import leaveRoom from './lib/leaveRoom'

function App() {
  // Make sure we're not assigned to any rooms
  useEffect(() => {
    leaveRoom()
  }, [])

  return (
    <div className="App">
      <section className="masthead" role="img" aria-label="Image Description">
        <h1>SHOW</h1>
        <a href="#explainer">
          <button>What is This?</button>
        </a>
      </section>
      <section className="navigateRooms">
        <CreateRoom />
        <JoinRoom />
      </section>
      <div>
        <a id="explainer">
          <img
            className="flourish"
            src="./flourish.svg"
            alt="beautiful flourish"
          />
        </a>
        <section id="explainerSection">
          <h2 className="explainer">Enjoying The Show</h2>
          <p>
            This is an experiment for connecting speakers and audiences using
            AI. Any speaker can allocate a room URL for their audience, and
            regardless of the crowd being real or virtual, their webcams will
            share their dominant facial expression with the speaker in an
            audience summary. This helps the speaker gauge feedback from the
            audience just as they would by looking out at the faces in the
            crowd.
          </p>
          <img src="/audience.svg" alt="audience chairs icon" />
          <div className="videoDemo">
            <hr />
            <video src="/enjoyingtheshow2.mp4" autoPlay muted loop></video>
            <hr />
          </div>

          <p>
            The Technology used for <strong>Enjoying The Show</strong> uses
            elaborate tooling to complete a simple straight-forward task. Each
            audience member's browser runs their webcam input through
            TensorFlow.js (via face-api) to identify the emotional sentiment of
            the person. The dominant detection out of{' '}
            <em>
              Happy, Neutral, Surprised, Sad, Fearful, Disgusted, and Angry,{' '}
            </em>
            is sent to an Amplify GraphQL server. <em>On the other side,</em>{' '}
            the "watching room" URL has a GraphQL subscription and updates
            whenever a new audience member arrives, leaves, or changes their
            facial expression. Hundreds of client models can be managed and
            displayed on the dashboard in real-time.
          </p>

          <img src="/hat.svg" alt="magic hat" />
          <h2 className="specialThanks">Special Thanks</h2>
          <div className="thanks">
            <p>
              To{' '}
              <a
                href="https://twitter.com/dabit3?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nader Dabit
              </a>
              , who has done a great job advocating AWS Amplify and answering
              questions on this awesome technology. To{' '}
              <a
                href="https://twitter.com/justadudewhohax?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vincent M??hler
              </a>
              , who has done all the hard work in TensorFlow.js with his amazing
              face-api.js library. To{' '}
              <a
                href="https://twitter.com/infinite_red"
                target="_blank"
                rel="noopener noreferrer"
              >
                Infinite Red
              </a>
              , who is the best damn consulting company in the world; their
              support allows me push the boundaries of AI, Machine Learning, and
              JavaScript.
            </p>
            <p>
              And <strong>THANK YOU</strong> for tweeting and sharing this with
              others. Feel free to use this service with your audience. I'll see
              you on{' '}
              <a
                href="https://twitter.com/gantlaborde"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
