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
                <div key={art.id}>
                <div className='flip-card'>
                  <div className='flip-card-inner'>
                    <div className='art-ind' >
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
      <div className='news'>
        <h3 id='news-headline'>News</h3>
        <h3 id='news-title' >ZONA MACO REVEALS GALLERY LIST FOR 2020 EDITION, UNTITLED, ART MIAMI BEACH AWARDS OTAZU ART PRIZE, AND MORE</h3>
        <p className='news-text'>Zona Maco has announced that more than one-hundred galleries hailing from twenty-six countries in the Americas, Europe, and Asia will participate in its next edition, which will take place in Centro Citibanamex in Mexico City from February 5 to February 9, 2020. For the first time, Zona Maco will present its modern and contemporary art, design, photography, and antiques fairs simultaneously in the same location...<a href='https://www.artforum.com/news/zona-maco-reveals-gallery-list-for-2020-edition-untitled-art-miami-beach-awards-otazu-art-prize-and-more-81539'>Read More</a></p>
        
        <h3>PÉREZ ART MUSEUM MIAMI ANNOUNCES NADA ACQUISITION GIFT</h3>
        <p className='news-text'>
        The New Art Dealers Alliance (NADA) and Pérez Art Museum Miami (PAMM) have announced the selection of the third annual NADA acquisition gift for the museum. PAMM associate curator María Elena Ortiz and assistant curator Jennifer Inacio have selected New Hat, 2019, by Dominican-American artist Kenny Rivero from Charles Moffett’s booth for the institution...<a href='https://www.artforum.com/news/P%C3%A9rez%20Art%20Museum%20Miami%20Announces%20NADA%20Acquisition%20Gift-81550'>Read More</a>
        </p>
        <h3>UFTS UNIVERSITY RIDS SACKLER NAME FROM ITS BUILDINGS</h3>
        <p className='news-text'>Tufts University in Massachusetts will remove the Sackler name from several buildings on its campus, as well as from its programs, over the family’s role in the United States opioid crisis. The school also announced that it will establish a $3 million endowment to support education, research, and civic engagement programs aimed at the prevention and treatment of addiction and substance abuse. Tufts is believed to be the first university to take down the Sacklers’ name...<a href='https://www.artforum.com/news/tufts-university-removes-sackler-name-from-its-buildings-81540'>Read More</a>
        </p>
      </div>
    </div>
  );
}

