import React from 'react';
import CreatePosts from './CreatePosts';
import PostList from './PostList';
import ArtPriceDisplay from './ArtPriceDisplay';
import { Link, Route } from 'react-router-dom';


export default function Art(props) {
  return (

    <div className='art-pg'>
      <h3 id='buy-post'>Buy <span className='art-color'>Art</span></h3>
      <div className='grid-buy'>
        {/* ======================SHANSHAN WANG====================================== */}
        <div className='flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-img-front'>
              <img src={"https://files.slack.com/files-pri/T0351JZQ0-FRJ7PM9S9/october_research-shanshan_wang.jpg"} width='100%' height="100%" alt='woman searching' />
            </div>

            <div className='flip-back'>
              <h3 className='text-img'>SHANSHAN WANG<br />October Research</h3>
              <p className='price-desc'>Mounted under acrylic glass, depth 2 mm matte, Frameless, 28.6 x 39.5" (External dimensions)</p>
              <h2>Price:$1004.99</h2>
            </div>
          </div>
        </div>


        <div className='flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-img-front'>
              <img src={'https://files.slack.com/files-pri/T0351JZQ0-FR6P2E6TD/the_garden_of_forking_paths_01-shanshan_wang.jpg'} width='100%' height="100%" alt='garden' />
            </div>
            <div className='flip-back'>
              <h3 className='text-img'>SHANSHAN WANG<br />The Garden of Forking Paths 01</h3>
              <p className='price-desc'>Fancyyy Mounted under acrylic glass, depth 2 mm matte, Frameless, 65.6 x 49.5" (External dimensions)</p>
              <h2>Price:$999.99</h2>
            </div>
          </div>
        </div>

        <div className='flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-img-front'>
              <img src={'https://files.slack.com/files-pri/T0351JZQ0-FRJ7PB6P2/the_garden_of_forking_paths_02-shanshan_wang.jpg'} width='100%' height="100%" alt='photo' />
            </div>
            <div className='flip-back'>
              <h3 className='text-img'>SHANSHAN WANG<br />The Garden of Forking Paths 02</h3>
              <p className='price-desc'>Mounted under acrylic glass, depth 2 mm matte, Frameless, 28.6 x 39.5" (External dimensions)</p>
              <h2>Price:$998.99</h2>
            </div>
          </div>
        </div>


        {/* ==============ANDRE WAGNER========================================== */}
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

        {/* ============================ANDREW NICHOLS======================================== */}
        <div className='flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-img-front'>
              <img src={"https://cdn.shopify.com/s/files/1/0217/9998/products/in-tune-with-self-andrew-nichols.jpg?v=1562298101"} width='100%' height="100%" alt='mountains' />
            </div>

            <div className='flip-back'>
              <a href='https://www.blackartdepot.com/collections/artist-andrew-nichols-art-gallery'>
                <h3 className='text-img'>ANDREWS NICHOLS <br />The Journey Within</h3>
                <p className='price-desc'>Mounted under acrylic glass, depth 2 mm matte, Frameless, 23.6 x 29.5" (External dimensions)</p>
                <h2>Price:$74.99</h2>
              </a>
            </div>
          </div>
        </div>


        {/* ====================Kate Shaw=========================== */}
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


        <ArtPriceDisplay

          artworks={props.artworks}

        />

      </div>




      <Link to={'/artform'}>
        <div className='btn-cont'>
          <button id='add-artwork'>Add <span className='art-color'>Art</span>work</button>
          </div>
      </Link>
        <h3 id='connect'>Connect </h3>
        <h3 className='head-title'>Post about Gigs or <span className='art-color'>Art</span> in your area...</h3>
          <Link to={'/createpost'}>
            <div className='btn-cont'>
              <button id='add-postbtn'>Add Post</button>
            </div>
          </Link>
        <div className='flex-post'>

          <PostList
            posts={props.posts} />





        </div >

    </div >
      )
    }
    
    
