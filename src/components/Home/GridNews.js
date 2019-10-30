import React, { Component } from "react";
// import Moment from 'react-moment';
import "moment-timezone";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getNews } from "../../store/actions/getnewsAction";

import Contribution from "./Contribution";

import "../../assets/scss/GridNews.scss";

class GridNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryCheck: ""
    };
  }

  componentDidMount() {
    this.props.getNews();
  }

  render() {
    let dataAllnews = this.props.news;

    let cateNews = dataAllnews.filter(newsFil => newsFil.status === "Approved");

    let newsFilter = cateNews.filter(
      checkNews => checkNews.category[0] === "News"
    );

    let sliceNews = newsFilter.slice(0, 4);

    const newsData = sliceNews.map(newspro => {
      return (
        <div key={newspro._id}>
          <div className='flex justify-beetwen pt-4'>
            <div className='w-3/4 pr-4'>
              <h1 className='text-lg font-semibold font-serif pt-2 capitalize'>
                <Link to={`/detail/${newspro._id}`}>{newspro.title}</Link>
              </h1>
              <p className='text-sm font-serif pt-2 text-gray-700'>
                {newspro.description.substring(0, 170)}...{" "}
                <Link to={`/detail/${newspro._id}`}>
                  <span className='text-blue-800 font-bold font-sans'>
                    Read More
                  </span>
                </Link>
              </p>
              <p className='text-sm font-bold pt-2'>
                <Link to={`/user/${newspro.user._id}`}>
                  {newspro.user.username}
                </Link>
              </p>
              <p className='text-xs text-gray-700'>
                Published on {newspro.date.substring(0, 10)}
              </p>
            </div>
            <div className='w-1/4 px-2 pt-2'>
              <img src={newspro.media.secure_url} alt='nature' width='100%' />
            </div>
          </div>
        </div>
      );
    });

    let lifeFilter = cateNews.filter(
      checkNews => checkNews.category[0] === "Lifestyle"
    );

    let sliceLifestyle = lifeFilter.slice(0, 4);

    const lifestyleData = sliceLifestyle.map(newspro => {
      return (
        <div key={newspro._id}>
          <div className='flex justify-beetwen pt-4'>
            <div className='w-3/4 pr-4'>
              <h1 className='text-lg font-semibold font-serif pt-2 capitalize'>
                <Link to={`/detail/${newspro._id}`}>{newspro.title}</Link>
              </h1>
              <p className='text-sm font-serif pt-2 text-gray-700'>
                {newspro.description.substring(0, 170)}...{" "}
                <Link to={`/detail/${newspro._id}`}>
                  <span className='text-blue-800 font-bold font-sans'>
                    Read More
                  </span>
                </Link>
              </p>
              <p className='text-sm font-bold pt-2'>
                <Link to={`/user/${newspro.user._id}`}>
                  {newspro.user.username}
                </Link>
              </p>
              <p className='text-xs text-gray-700'>
                Published on {newspro.date.substring(0, 10)}
              </p>
            </div>
            <div className='w-1/4 px-2 pt-2'>
              <img src={newspro.media.secure_url} alt='nature' width='100%' />
            </div>
          </div>
        </div>
      );
    });

    let foodFilter = cateNews.filter(
      checkNews => checkNews.category[0] === "Food"
    );

    let sliceFood = foodFilter.slice(0, 4);

    const foodData = sliceFood.map(newspro => {
      return (
        <div key={newspro._id}>
          <div className='flex justify-beetwen pt-4'>
            <div className='w-3/4 pr-4'>
              <h1 className='text-lg font-semibold font-serif pt-2 capitalize'>
                <Link to={`/detail/${newspro._id}`}>{newspro.title}</Link>
              </h1>
              <p className='text-sm font-serif pt-2 text-gray-700'>
                {newspro.description.substring(0, 170)}...
                <Link to={`/detail/${newspro._id}`}>
                  <span className='text-blue-800 font-bold font-sans'>
                    Read More
                  </span>
                </Link>
              </p>
              <p className='text-sm font-bold pt-2'>
                <Link to={`/user/${newspro.user._id}`}>
                  {newspro.user.username}
                </Link>
              </p>
              <p className='text-xs text-gray-700'>
                Published on {newspro.date.substring(0, 10)}
              </p>
            </div>
            <div className='w-1/4 px-2 pt-2'>
              <img src={newspro.media.secure_url} alt='nature' width='100%' />
            </div>
          </div>
        </div>
      );
    });

    let techFilter = cateNews.filter(
      checkNews => checkNews.category[0] === "Tech"
    );

    let sliceTech = techFilter.slice(0, 4);

    const techData = sliceTech.map(newspro => {
      return (
        <div key={newspro._id}>
          <div className='flex justify-beetwen pt-4'>
            <div className='w-3/4 pr-4'>
              <h1 className='text-lg font-semibold font-serif pt-2 capitalize'>
                <Link to={`/detail/${newspro._id}`}>{newspro.title}</Link>
              </h1>
              <p className='text-sm font-serif pt-2 text-gray-700'>
                {newspro.description.substring(0, 170)}...{" "}
                <Link to={`/detail/${newspro._id}`}>
                  <span className='text-blue-800 font-bold font-sans'>
                    Read More
                  </span>
                </Link>
              </p>
              <p className='text-sm font-bold pt-2'>
                <Link to={`/user/${newspro.user._id}`}>
                  {newspro.user.username}
                </Link>
              </p>
              <p className='text-xs text-gray-700'>
                Published on {newspro.date.substring(0, 10)}
              </p>
            </div>
            <div className='w-1/4 px-2 pt-2'>
              <img src={newspro.media.secure_url} alt='nature' width='100%' />
            </div>
          </div>
        </div>
      );
    });

    let eduFilter = cateNews.filter(
      checkNews => checkNews.category[0] === "Education"
    );

    let sliceEdu = eduFilter.slice(0, 4);

    const educateData = sliceEdu.map(newspro => {
      return (
        <div key={newspro._id}>
          <div className='flex justify-beetwen pt-4'>
            <div className='w-3/4 pr-4'>
              <h1 className='text-lg font-semibold font-serif pt-2 capitalize'>
                <Link to={`/detail/${newspro._id}`}>{newspro.title}</Link>
              </h1>
              <p className='text-sm font-serif pt-2 text-gray-700'>
                {newspro.description.substring(0, 170)}...{" "}
                <Link to={`/detail/${newspro._id}`}>
                  <span className='text-blue-800 font-bold font-sans'>
                    Read More
                  </span>
                </Link>
              </p>
              <p className='text-sm font-bold pt-2'>
                <Link to={`/user/${newspro.user._id}`}>
                  {newspro.user.username}
                </Link>
              </p>
              <p className='text-xs text-gray-700'>
                Published on {newspro.date.substring(0, 10)}
              </p>
            </div>
            <div className='w-1/4 px-2 pt-2'>
              <img src={newspro.media.secure_url} alt='nature' width='100%' />
            </div>
          </div>
        </div>
      );
    });

    let entertainFilter = cateNews.filter(
      checkNews => checkNews.category[0] === "Entertainment"
    );

    let sliceEnter = entertainFilter.slice(0, 4);

    const entertainData = sliceEnter.map(newspro => {
      return (
        <div key={newspro._id}>
          <div className='flex justify-beetwen pt-4'>
            <div className='w-3/4 pr-4'>
              <h1 className='text-lg font-semibold font-serif pt-2 capitalize'>
                <Link to={`/detail/${newspro._id}`}>{newspro.title}</Link>
              </h1>
              <p className='text-sm font-serif pt-2 text-gray-700'>
                {newspro.description.substring(0, 170)}...{" "}
                <Link to={`/detail/${newspro._id}`}>
                  <span className='text-blue-800 font-bold font-sans'>
                    Read More
                  </span>
                </Link>
              </p>
              <p className='text-sm font-bold pt-2'>
                <Link to={`/user/${newspro.user._id}`}>
                  {newspro.user.username}
                </Link>
              </p>
              <p className='text-xs text-gray-700'>
                Published on {newspro.date.substring(0, 10)}
              </p>
            </div>
            <div className='w-1/4 px-2 pt-2'>
              <img src={newspro.media.secure_url} alt='nature' width='100%' />
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className='bg-color-hot'>
        <div className="flex justify-end play-button">
          <img src="https://neversinkmediagroup.com/wabt/wp-content/uploads/sites/7/2018/10/Google-Play-Store-Logo.png" alt="play-store" className="w-64"/>
        </div>
        <div className='widht-home mx-auto'>
          <div>
            <div className='title-grid flex flex-wrap w-full'>
              <div>
                <hr className='separator' />
              </div>
              <div className='title-design w-1/2'>
                <Link to='#'>
                  <span>News</span>
                </Link>
              </div>
              <div className='btn-seemore w-1/2 text-right'>
                <Link to='#'>
                  <button className='px-12 py-3 text-sm text-white font-semibold'>
                    See More
                  </button>
                </Link>
              </div>
            </div>
            <div className='flex flex-wrap overflow-hidden'>
              <div className='w-full overflow-hidden md:w-3/4 lg:w-3/4 xl:w-3/4 px-4'>
                <div className='flex flex-wrap overflow-hidden'>
                  <div className='w-full overflow-hidden'>
                    <div class='flex flex-wrap overflow-hidden'>

                      <div class='w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 p-3'>
                        <img
                          src='https://images.pexels.com/photos/3074526/pexels-photo-3074526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                          alt='Name'
                          className='h-64 w-full'
                        />
                        <h2 className='py-3 font-serif font-semibold'>
                          Is testosterone really the answer to my
                          post-menopausal sexual problems?
                        </h2>
                      </div>

                      <div class='w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 p-3'>
                        <div class='w-full overflow-hidden border-b-2 border-black'>
                          <h2 className='font-semibold my-4 font-serif'>
                            Jacob Rees-Mogg: my early career as an avant garde
                            film star
                          </h2>
                        </div>
                        <div class='w-full overflow-hidden border-b-2 border-black'>
                          <h2 className='font-semibold my-4 font-serif'>
                            Jacob Rees-Mogg: my early career as an avant garde
                            film star
                          </h2>
                        </div>
                        <div class='w-full overflow-hidden border-b-2 border-black'>
                          <h2 className='font-semibold my-4 font-serif'>
                            Jacob Rees-Mogg: my early career as an avant garde
                            film star
                          </h2>
                        </div>
                      </div>

                    </div>
                  </div>
                  
                  <div className='w-full overflow-hidden'>
                    <div className='flex flex-wrap overflow-hidden'>
                      <div className='w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 p-3'>
                        <img
                          src='https://images.pexels.com/photos/3074526/pexels-photo-3074526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                          alt='name'
                          className='h-64 w-full'
                        />
                        <h2 className='py-3 font-serif font-semibold'>
                          Is testosterone really the answer to my
                          post-menopausal sexual problems?
                        </h2>
                      </div>

                      <div className='w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 p-3'>
                        <img
                          src='https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                          alt='name'
                          className='h-64 w-full'
                        />
                        <h2 className='py-3 font-serif font-semibold'>
                          Is testosterone really the answer to my
                          post-menopausal sexual problems?
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-full overflow-hidden md:w-1/4 lg:w-1/4 xl:w-1/4 px-4'>
                <Contribution/>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    news: state.getnews1.news
  };
};

export default connect(
  mapStateToProps,
  { getNews }
)(withRouter(GridNews));
