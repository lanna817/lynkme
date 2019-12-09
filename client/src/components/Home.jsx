import React from 'react';
import logo from '../images/lynk_logo.png';
import { Link } from 'react-router-dom';




export default function Home(props) {
  return (
    <div className='home'>
      {props.currentUser
        ?
        <>
          <p id='wel-user'>Welcome {props.currentUser.username}!</p>
          <button id='logout-btn' onClick={props.handleLogout}>logout</button>
        </>
        :
        <div><h1>You need to log in to do that</h1></div>
      }
      <div id='web-desc'>
      <h3>Find local <span className='art-color'>Art</span>ists in your area.
            Post Your <span className='art-color'>Art</span>.
            Post <span className='gig-color'>Events</span>.
            Find <span className='gig-color'>Events</span>. 
          Support Your <span className='com-color'>Community</span>.</h3>
        </div>
      <h1 id='art-headline'><span className='art-color'>Art</span>ist Spotlight</h1>
      <div className='content-home'>
        <div className='local-update'>
          <div className='locals'>
            {
              props.artists.map(art => (
                <div className='flip-card'>
                  <div className='flip-card-inner'>
                    <div className='art-ind' key={art.id}>
                      <div className='flip-img-front'>
                      <img src={art.image_url} className='art-img' width='100%' height='90%' alt='art or gig images' />
                      </div>
                      <div className='flip-back'>
                    <div className='art-desc'>
            <p className='art-name'>{art.name}</p>
                <p className='loc-text'>{art.location}</p>
            <p className='art-bio'>{art.bio}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                  </div>

              ))
            }
          </div>
          <>
              <h1 id='event-headline'><span className='art-color'>Up</span>coming <span className='gig-color'>Events</span></h1>
            <div className='event-loc'>
              
          {
              props.events.map(event => (

                    <div className='event-ind' key={event.id}>
                      <div className='img-event'>
                      <img src={event.image_url} className='event-img' width='100%' height='90%' alt='art or gig images' />
                      </div>
                    <div className='event-desc'>
                      <p className='event-name'>{event.title}</p>
                       <p className='event-date'>{event.date}</p>
                      <p className='event-text'>{event.description}</p>
                      <p className='loc-text'>{event.address}</p>
                        </div>
                       
                    </div>
                    

              ))
            }
            </div>
          </>
        </div>

      </div>
    </div>
  );
}

