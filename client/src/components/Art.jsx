import React from 'react';
import CreatePosts from './CreatePosts';
import PostList from './PostList';
import ArtWorkForm from './ArtWorkForm';
import ArtPriceDisplay from './ArtPriceDisplay';
import { withRouter } from 'react-router';
import { Link, Route } from 'react-router-dom';
import { getAllPosts, createPost } from '../services/api-helper'


class Art extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artworks: [],
      postForm: {
        content: "",
        image_url: "",
        category: "",
        is_Anon: false
      }

    }
  }

  async componentDidMount() {
    this.getAllArtWork();
  }

  getAllArtWork = async () => {
    const artworks = await getAllPosts();
    this.setState({
      artworks
    })
  }

  handleFormArtChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      postForm: {
        ...prevState.postForm,
        [name]: value
      }
    }))
  }

  createArtSubmit = async () => {
    const newArtWork = await createPost(this.state.postForm);
    this.setState(prevState => ({
      artworks: [
        ...prevState.artworks,
        newArtWork
      ],
      postForm: {
        content: "",
        image_url: "",
        category: "",
        is_Anon: false
      }
    }));
    this.props.history.push(`/art`)

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
          </div>


        <Link to='/art/artform'>
          <button id='add-artwork'>Add <span className='art-color'>Art</span>work</button>
        </Link>

        <h3 className='head-title'>Post about <span className='art-color'>Art</span> or <span className='art-color'>art</span>work that you like…</h3>
        <h3 id='late-post'>Latest Posts...</h3>
        <div className='flex-post'>

          {/* <Route path='/art/artform' render={(props) => (
          <ArtWorkForm
           handleArtFormChange={this.handleArtFormChange}
            postForm={this.state.postForm}
            artworks={this.state.artworks}
            createArtSubmit={this.createArtSubmit}

            />)} />
          
          <ArtPriceDisplay
            artworks={this.state.artworks}
          

          /> */}

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