import React from 'react';
import CreatePosts from './CreatePosts';
import PostList from './PostList';
import ArtPriceDisplay from './ArtPriceDisplay';
import { Link } from 'react-router-dom';


export default function Art (props) {
    return (
      
      <div className='art-pg'>
        <h3 id='buy-post'>Buy <span className='art-color'>Art</span></h3>
        <div className='grid-buy'>
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-img-front'>
                <img src={"https://img-lumas-avensogmbh1.netdna-ssl.com/showimg_awg36_desktop.jpg"} width='100%' height="100%" alt='bamboo trees' />
              </div>
              <div className='flip-back'>
                <a href='https://www.lumas.com/pictures/andre_wagner/bamboo_iii/'>
                  <h3 className='text-img'>ANDRÉ WAGNER <br /> BAMBOO III</h3>
                  <p className='price-desc'>Mounted under acrylic glass, depth 2 mm glossy, Frameless, 29.5 x 39.4" (External dimensions)</p>
                  <h2>Price:$899</h2>

                </a>
              </div>
            </div>
          </div>
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-img-front'>
                <img src={"https://img-lumas-avensogmbh1.netdna-ssl.com/showimg_ksh06_desktop.jpg"} width='100%' height="100%" alt='mountains' />
              </div>

              <div className='flip-back'>
                <a href='https://www.lumas.com/pictures/kate_shaw/frontier-1/'>
                  <h3 className='text-img'>KATE SHAW <br />FRONTIER</h3>
                  <p className='price-desc'>Mounted under acrylic glass, depth 2 mm matte, Frameless, 23.6 x 29.5" (External dimensions)</p>
                  <h2>Price:$699</h2>
                </a>
              </div>
            </div>
          </div>
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-img-front'>
                <img src={"https://cdn.shopify.com/s/files/1/0217/9998/products/in-tune-with-self-andrew-nichols.jpg?v=1562298101"} width='100%' height="100%" alt='mountains' />
              </div>

              <div className='flip-back'>
                <a href='https://www.blackartdepot.com/collections/artist-andrew-nichols-art-gallery'>
                  <h3 className='text-img'>ANDREWS NICHOLS <br />THE JOURNEY WITHIN</h3>
                  <p className='price-desc'>Mounted under acrylic glass, depth 2 mm matte, Frameless, 23.6 x 29.5" (External dimensions)</p>
                  <h2>Price:$74.99</h2>
                </a>
              </div>
            </div>
          </div>

          {
        props.artworks.map(artist => (
          <div className='art-upload' key={artist.id}>
            <div className='flip-card'>
              <div className='flip-card-inner'>
                <div className='flip-img-front'>
                  {
                    artist.image_url ? <img src={artist.image_url}  width='40%' alt='art or gig images' /> :
                      <img src={'https://media.giphy.com/media/xTkcEQACH24SMPxIQg/source.gif'} width='30%' alt='hands tapping' />}
                </div>
                <div className='flip-black'>
                  <p className='text-img'>{artist.content}</p>
                  <p className='price-desc'>{artist.hashtags}</p>
                  <h2>Price:{artist.category}</h2>
                </div>
              </div>
            </div>
          </div>

        ))
      }
         
       
          {/* <ArtPriceDisplay
            
            artworks={props.artworks}
            
          /> */}
       
        </div>




        <Link to ={'/artform'}>
        <button  id='add-artwork'>Add <span className='art-color'>Art</span>work</button>
        </Link>
        <h3 id='connect'>Connect </h3>
        <h3 className='head-title'>Post about Gigs or <span className='art-color'>Art</span> in your area...</h3>
        <h3 id='late-post'>Latest Posts...</h3>
        <div className='flex-post'>



          <CreatePosts
            postForm={props.postForm}
            handleFormChange={props.handleFormChange}
            createSubmit={props.createSubmit} />

          <PostList
            posts={props.posts} />



        </div>

      </div>
    )
  }


