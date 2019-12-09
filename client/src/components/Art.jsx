import React from 'react';
import CreatePosts from './CreatePosts';
import PostList from './PostList';
import { withRouter } from 'react-router';
import { Link, Route } from 'react-router-dom';


class Art extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artwork: [],

    }
  }



  render() {

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
        </div>

        <h3 className='head-title'>Post a pic of your own <span className='art-color'>Art</span> or <span className='art-color'>art</span>work that you like…</h3>
        <h3 id='late-post'>Latest Posts...</h3>
        <div className='flex-post'>

          <CreatePosts
            postForm={this.props.postForm}
            handleFormChange={this.props.handleFormChange}
            createSubmit={this.props.createSubmit} />

          <PostList
            posts={this.props.posts} />

        </div>

      </div>
    )
  }
}

export default withRouter(Art);