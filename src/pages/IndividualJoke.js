import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Header, JokeSearch, JokeCategories, JokeByGroup, Footer} from './components/AppComponents'

return (<div id="individual-joke">
  <div className="container">
    <div className="wrapper px-1">
      <div className="previous-icon"></div>
    </div>
    <div className="wrapper px-1">
      <div className="joke-details">
        <div className="details-wrapper p-15">
          <div className="current-category mx-1 pl-15">
            <span className="dot"></span>
            Animal
          </div>
          <div className="trending mx-1 pl-15">
            <span className="dot"></span>
            Trending
          </div>
          <div className="wrapper">
            <div className="joke-details-header">
              The granny joke
            </div>
            <div className="trending-dash"></div>
            <div className="trending-no">
              NO #1
            </div>
            <div className="joke-content">
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="status">
            <div className="like-block">
              <span className="like"></span>
              <div className="like-text">327</div>
            </div>
            <div className="dislike-block">
              <span className="dislike"></span>
              <div className="dislike-text">12</div>
            </div>
          </div>
          <div className="navigation">
            <div className="next">next joke</div>
            <div className="prev">Prev. joke</div>
          </div>
        </div>
      </div>
      <div className="top-ten-jokes">
        <div className="details-wrapper p-15">
          <div className="top-ten-header">
            The top ten jokes this week
          </div>
          <div className='top-joke-title'>
            Test Joke The
          </div>
          <div className='top-joke-title'>
            Test Joke The
          </div>
        </div>
      </div>
    </div>
  </div>
</div>)