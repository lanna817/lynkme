import React from 'react'

export default function ArtPriceDisplay(props) {
  return (
    <div className='art-display'>
       {
        props.artworks.map(artist => (
          <div className='post-ind' key={artist.id}>
              {
                artist.image_url ? <img src={artist.image_url} className='post-img' width='40%'  alt='art or gig images' /> :
                  <img src={'https://media.giphy.com/media/xTkcEQACH24SMPxIQg/source.gif'} className='post-img' width='30%' alt='hands tapping' /> }
              <div className='flip-black'>
            <p className='text-img'>{artist.content}</p>
            <p className='price-desc'>{artist.hashtags}</p>
                <h2>Price:{artist.category}</h2>
                </div>
      </div>

        ))
          }
    </div>
  )
}
