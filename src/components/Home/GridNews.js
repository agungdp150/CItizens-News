import React, { Component } from "react";
// import Moment from 'react-moment';
import "moment-timezone";
import Lottie from "react-lottie";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getNews } from "../../store/actions/getnewsAction";

import Contribution from "./Contribution";
import GridVideo from "./GridVideo";
import CardHotNews from "./CardHotNews"

// Loading stuff
import Myloading from "../../assets/loading/201-simple-loader.json";

import "../../assets/scss/GridNews.scss";

class GridNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryCheck: "",
      loading: false
    };
  }

  componentDidMount = async () => {
    await this.props.getNews();
    this.setState({ loading: true });
  };

  render() {
    let dataAllnews = this.props.news;
    // console.log(dataAllnews && dataAllnews)

    let cateNews = dataAllnews.filter(newsFil => newsFil.status === "Approved");

    let newsFilter = cateNews.filter(
      checkNews => checkNews.category[0] === "News"
    );

    // console.log(newsFilter);

    let sliceNews = newsFilter.slice(3, 6);

    const newsData = sliceNews.map(newspro => {
      // console.log(newspro)
      return (
        <div
          className='w-full overflow-hidden border-b-2 border-gray-400'
          key={newspro._id}>
          <Link to={`/detail/${newspro._id}`}>
            <h2 className='font-semibold my-4 font-serif'>{newspro.title}</h2>
          </Link>
        </div>
      );
    });

    let lifeFilter = cateNews.filter(
      checkNews => checkNews.category[0] === "Lifestyle"
    );

    let sliceLifestyle = lifeFilter.slice(0, 4);

    const lifestyleData = sliceLifestyle.map(newspro => {
      return (

        <div className='flex justify-beetwen pt-4 for-wrap' key={newspro._id}>
          <div className='w-3/4 md:w-3/4 lg:w-3/4 xl:w-3/4 overflow-hidden pr-4'>
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
          <div className='w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 overflow-hidden p-3 width-img'>
            <img src={newspro.media.secure_url} alt='nature'/>
          </div>
        </div>
      );
    });

    let foodFilter = cateNews.filter(
      checkNews => checkNews.category[0] === "Food"
    );

    let sliceFood = foodFilter.slice(3, 6);

    const foodData = sliceFood.map(newspro => {
      return (
        <div
        className='w-full overflow-hidden border-b-2 border-gray-400'
        key={newspro._id}>
        <Link to={`/detail/${newspro._id}`}>
          <h2 className='font-semibold my-4 font-serif'>{newspro.title}</h2>
        </Link>
      </div>
      )
    });

    let techFilter = cateNews.filter(
      checkNews => checkNews.category[0] === "Tech"
    );

    let sliceTech = techFilter.slice(3, 6);

    const techData = sliceTech.map(newspro => {
      return (
        <div
          className='w-full overflow-hidden border-b-2 border-gray-400'
          key={newspro._id}>
          <Link to={`/detail/${newspro._id}`}>
            <h2 className='font-semibold my-4 font-serif'>{newspro.title}</h2>
          </Link>
        </div>
      );
    });

    let eduFilter = cateNews.filter(
      checkNews => checkNews.category[0] === "Education"
    );

    let sliceEdu = eduFilter.slice(3, 6);

    const educateData = sliceEdu.map(newspro => {
      return (
        <div
          className='w-full overflow-hidden border-b-2 border-gray-400'
          key={newspro._id}>
          <Link to={`/detail/${newspro._id}`}>
            <h2 className='font-semibold my-4 font-serif'>{newspro.title}</h2>
          </Link>
        </div>
      );
    });

    let entertainFilter = cateNews.filter(
      checkNews => checkNews.category[0] === "Entertainment"
    );

    let sliceEnter = entertainFilter.slice(0, 4);

    const entertainData = sliceEnter.map(newspro => {
      return (
          <div className='flex justify-beetwen pt-4 for-wrap' key={newspro._id}>
            <div className='w-3/4 md:w-3/4 lg:w-3/4 xl:w-3/4 overflow-hidden pr-4'>
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
            <div className='w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 overflow-hidden p-3 width-img'>
              <img src={newspro.media.secure_url} alt='nature'/>
            </div>
          </div>
      );
    });

    const setLoattie = {
      loop: true,
      autoplay: true,
      animationData: Myloading,
      renderSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div className='bg-color-hot'>
        <div className='flex justify-end play-button'>
          <Link 
          to="https://play.google.com/store/apps/details?id=com.glints.citizens"
          target="_blank">
          <img
            src='https://neversinkmediagroup.com/wabt/wp-content/uploads/sites/7/2018/10/Google-Play-Store-Logo.png'
            alt='play-store'
            className='w-48'
          />
          </Link>
        </div>
        <div className='widht-home mx-auto'>
          <div className='flex flex-wrap overflow-hidden'>
            <div className='w-full overflow-hidden md:w-3/4 lg:w-3/4 xl:w-3/4 px-3'>
              <div className='title-grid flex flex-wrap w-full'>
                <div>
                  <hr className='separator' />
                </div>
                <div className='title-design w-1/2'>
                  <Link to={`/category/News`}>
                    <span>News</span>
                  </Link>
                </div>
                <div className='btn-seemore w-1/2 text-right'>
                  <Link to={`/category/News`}>
                    <button className='px-8 py-2 text-xs text-white font-semibold'>
                      See More
                    </button>
                  </Link>
                </div>

                {this.state.loading ? (
                  <div className='flex flex-wrap overflow-hidden'>
                    <div className='w-full overflow-hidden'>
                      <div className='flex flex-wrap overflow-hidden'>
                        <div className='w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 p-3'>
                          <Link to={`/detail/${ newsFilter[0] && newsFilter[0]._id}`}>
                          <img
                            src={
                              newsFilter[0] && newsFilter[0].media.secure_url
                            }
                            alt='Name'
                            className='h-64 w-full'
                          />
                          <h2 className='py-3 font-serif font-semibold'>
                            {newsFilter[0] && newsFilter[0].title}
                          </h2>
                          </Link>
                        </div>

                        <div className='w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 p-3'>
                          {newsData}
                        </div>
                      </div>
                    </div>

                    <div className='w-full overflow-hidden'>
                      <div className='flex flex-wrap overflow-hidden'>
                        <div className='w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 p-3'>
                        <Link to={`/detail/${ newsFilter[1] && newsFilter[1]._id}`}>
                          <img
                            src={
                              newsFilter[1] && newsFilter[1].media.secure_url
                            }
                            alt='name'
                            className='h-64 w-full'
                          />
                          <h2 className='py-3 font-serif font-semibold'>
                            {newsFilter[1] && newsFilter[1].title}
                          </h2>
                          </Link>
                        </div>

                        <div className='w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 p-3'>
                        <Link to={`/detail/${ newsFilter[2] && newsFilter[2]._id}`}>
                          <img
                            src={
                              newsFilter[2] && newsFilter[2].media.secure_url
                            }
                            alt='name'
                            className='h-64 w-full'
                          />
                          <h2 className='py-3 font-serif font-semibold'>
                            {newsFilter[2] && newsFilter[2].title}
                          </h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Lottie options={setLoattie} width={150} />
                )}
              </div>

              <div className='title-grid flex flex-wrap w-full'>
                <div>
                  <hr className='separator education' />
                </div>
                <div className='title-design w-1/2'>
                  <Link  to={`/category/Education`}>
                    <span>Education</span>
                  </Link>
                </div>
                <div className='btn-seemore w-1/2 text-right'>
                  <Link  to={`/category/Education`}>
                    <button className='px-8 py-2 text-xs text-white font-semibold'>
                      See More
                    </button>
                  </Link>
                </div>

                {this.state.loading ? (
                  <div className='flex flex-wrap overflow-hidden'>
                    <div className='w-full overflow-hidden'>
                      <div className='flex flex-wrap overflow-hidden'>
                        <div className='w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 p-3'>
                          {educateData}
                        </div>

                        <div className='w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 p-3'>
                          <Link to= {`/detail/${eduFilter[0] && eduFilter[0]._id}`}>
                          <img
                            src={eduFilter[0] && eduFilter[0].media.secure_url}
                            alt='Name'
                            className='h-64 w-full'
                          />
                          <h2 className='py-3 font-serif font-semibold'>
                            {eduFilter[0] && eduFilter[0].title}
                          </h2>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className='w-full overflow-hidden'>
                      <div className='flex flex-wrap overflow-hidden'>
                        <div className='w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 p-3'>
                        <Link to= {`/detail/${eduFilter[1] && eduFilter[1]._id}`}>
                          <img
                            src={eduFilter[1] && eduFilter[1].media.secure_url}
                            alt='name'
                            className='h-64 w-full'
                          />
                          <h2 className='py-3 font-serif font-semibold'>
                            {eduFilter[1] && eduFilter[1].title}
                          </h2>
                          </Link>
                        </div>

                        <div className='w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 p-3'>
                        <Link to= {`/detail/${eduFilter[2] && eduFilter[2]._id}`}>
                          <img
                            src={eduFilter[2] && eduFilter[2].media.secure_url}
                            alt='name'
                            className='h-64 w-full'
                          />
                          <h2 className='py-3 font-serif font-semibold'>
                            {eduFilter[2] && eduFilter[2].title}
                          </h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Lottie options={setLoattie} width={150} />
                )}
              </div>

              <div className='title-grid flex flex-wrap w-full'>
                <div>
                  <hr className='separator' />
                </div>
                <div className='title-design w-1/2'>
                  <Link to={`/category/Tech`}>
                    <span>Tech</span>
                  </Link>
                </div>
                <div className='btn-seemore w-1/2 text-right'>
                  <Link to={`/category/Tech`}>
                    <button className='px-8 py-2 text-xs text-white font-semibold'>
                      See More
                    </button>
                  </Link>
                </div>

                {this.state.loading ? (
                  <div className='flex flex-wrap overflow-hidden'>
                    <div className='w-full overflow-hidden'>
                      <div className='flex flex-wrap overflow-hidden'>
                        <div className='w-full overflow-hidden'>
                          <div className='flex flex-wrap overflow-hidden'>
                            <div className='w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 p-3'>
                              <Link to={`/detail/${
                                  techFilter[1] &&
                                  techFilter[1]._id
                                }`}>
                              <img
                                src={
                                  techFilter[1] &&
                                  techFilter[1].media.secure_url
                                }
                                alt='name'
                                className='h-64 w-full'
                              />
                              <h2 className='py-3 font-serif font-semibold'>
                                {techFilter[1] && techFilter[1].title}
                              </h2>
                              </Link>
                            </div>

                            <div className='w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 p-3'>
                            <Link to={`/detail/${
                                  techFilter[2] &&
                                  techFilter[2]._id
                                }`}>
                              <img
                                src={
                                  techFilter[2] &&
                                  techFilter[2].media.secure_url
                                }
                                alt='name'
                                className='h-64 w-full'
                              />
                              <h2 className='py-3 font-serif font-semibold'>
                                {techFilter[2] && techFilter[2].title}
                              </h2>
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className='w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 p-3'>
                          {techData}
                        </div>

                        <div className='w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 p-3'>
                        <Link to={`/detail/${
                                  techFilter[0] &&
                                  techFilter[0]._id
                                }`}>
                          <img
                            src={
                              techFilter[0] && techFilter[0].media.secure_url
                            }
                            alt='Name'
                            className='h-64 w-full'
                          />
                          <h2 className='py-3 font-serif font-semibold'>
                            {techFilter[0] && techFilter[0].title}
                          </h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Lottie options={setLoattie} width={150} />
                )}
              </div>


              <div className='title-grid flex flex-wrap w-full'>
                <div>
                  <hr className='separator' />
                </div>
                <div className='title-design w-1/2'>
                  <Link to={`/category/Food`}>
                    <span>Food</span>
                  </Link>
                </div>
                <div className='btn-seemore w-1/2 text-right'>
                  <Link to={`/category/Food`}>
                    <button className='px-8 py-2 text-xs text-white font-semibold'>
                      See More
                    </button>
                  </Link>
                </div>

                {this.state.loading ? (
                  <div className='flex flex-wrap overflow-hidden'>
                    <div className='w-full overflow-hidden'>
                      <div className='flex flex-wrap overflow-hidden'>
                        <div className='w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 p-3'>
                          <Link to={`/detail/${foodFilter[0] && foodFilter[0]._id}`}>
                          <img
                            src={
                              foodFilter[0] && foodFilter[0].media.secure_url
                            }
                            alt='Name'
                            className='h-64 w-full'
                          />
                          <h2 className='py-3 font-serif font-semibold'>
                            {foodFilter[0] && foodFilter[0].title}
                          </h2>
                          </Link>
                        </div>

                        <div className='w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 p-3'>
                          {foodData}
                        </div>
                      </div>
                    </div>

                    <div className='w-full overflow-hidden'>
                      <div className='flex flex-wrap overflow-hidden'>
                        <div className='w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 p-3'>
                        <Link to={`/detail/${foodFilter[1] && foodFilter[1]._id}`}>
                          <img
                            src={
                              foodFilter[1] && foodFilter[1].media.secure_url
                            }
                            alt='name'
                            className='h-64 w-full'
                          />
                          <h2 className='py-3 font-serif font-semibold'>
                            {foodFilter[1] && foodFilter[1].title}
                          </h2>
                          </Link>
                        </div>

                        <div className='w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 p-3'>
                        <Link to={`/detail/${foodFilter[2] && foodFilter[2]._id}`}>
                          <img
                            src={
                              foodFilter[2] && foodFilter[2].media.secure_url
                            }
                            alt='name'
                            className='h-64 w-full'
                          />
                          <h2 className='py-3 font-serif font-semibold'>
                            {foodFilter[2] && foodFilter[2].title}
                          </h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Lottie options={setLoattie} width={150} />
                )}
              </div>

              <div className='title-grid flex flex-wrap w-full'>
                <div>
                  <hr className='separator lifestyle' />
                </div>
                <div className='title-design w-1/2'>
                  <Link to={`/category/Lifestyle`}>
                    <span>Lifestyle</span>
                  </Link>
                </div>
                <div className='btn-seemore w-1/2 text-right'>
                  <Link to={`/category/Lifestyle`}>
                    <button className='px-8 py-2 text-xs text-white font-semibold'>
                      See More
                    </button>
                  </Link>
                </div>

                {this.state.loading ? (
                    <div className="w-full overflow-hidden p-3">
                    <div className="flex flex-wrap overflow-hidden">{lifestyleData}</div>
                    <div className="flex justify-end pt-4">
                    </div>
                  </div>
                ) : (
                  <Lottie options={setLoattie} width={150} />
                )}
              </div>

              <div className='title-grid flex flex-wrap w-full'>
                <div>
                  <hr className='separator entertain' />
                </div>
                <div className='title-design w-1/2'>
                  <Link to={`/category/Entertainment`}>
                    <span>Entertain</span>
                  </Link>
                </div>
                <div className='btn-seemore w-1/2 text-right'>
                  <Link to={`/category/Entertainment`}>
                    <button className='px-8 py-2 text-xs text-white font-semibold'>
                      See More
                    </button>
                  </Link>
                </div>

                {this.state.loading ? (
                    <div className="w-full overflow-hidden p-3">
                    <div className="flex flex-wrap overflow-hidden">{entertainData}</div>
                    <div className="flex justify-end pt-4">
                    </div>
                  </div>
                ) : (
                  <Lottie options={setLoattie} width={150} />
                )}
              </div>
              

              <div className='title-grid flex flex-wrap w-full'>
                <div>
                  <hr className='separator' />
                </div>
                <div className='title-design w-1/2'>
                  <Link to={`/category/Video`}>
                    <span>Video</span>
                  </Link>
                </div>
                <div className='btn-seemore w-1/2 text-right'>
                  <Link to={`/category/Video`}>
                    <button className='px-8 py-2 text-xs text-white font-semibold'>
                      See More
                    </button>
                  </Link>
                </div>

                {this.state.loading ? (
                  <div className='flex flex-wrap overflow-hidden'>
                    <GridVideo/>
                  </div>
                ) : (
                  <Lottie options={setLoattie} width={150} />
                )}
              </div>
            </div>

            <div className='w-full overflow-hidden md:w-1/4 lg:w-1/4 xl:w-1/4 display-side'>
              <Contribution />
              <CardHotNews/>
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
