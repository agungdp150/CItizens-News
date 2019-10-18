import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getNews } from "../store/actions/getnewsAction";

import Medal1 from '../assets/img/medal2.svg';
import Silver1 from '../assets/img/silver.svg';

import "../assets/scss/GridNews.scss";

class GridNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryCheck: "",
      filterCategory: []
    };
  }

  componentDidMount() {
    this.props.getNews();
  }

  render() {
   

    // const newsData = this.props.news.map(newspro => {
    //   // console.log (newspro.category);
    //   if (newspro.category[0] === "Food") {
    //     return (
    //       <div

    //       </div>
    //     );
    //   }
    // });

    return (
      <div className="bg-color-hot">
        <div className="container mx-auto pt-6">
          
          </div>
          <div class="flex flex-wrap overflow-hidden mx-8">

            <div class="w-2/3 overflow-hidden sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 px-4">
            <h1 className="pb-4 mt-4 ml-1 text-3xl font-bold rounded font-serif">
            News
            </h1>
            <div>
              <div className="flex justify-beetwen">
                <div className="w-full">
                  <h1 className="text-lg font-semibold font-serif pt-2">
                  Gauguin at the National Gallery review – portrait of a troubling talent
                  </h1>
                  <p className="text-sm font-serif pt-2 text-gray-700">
                  Gauguin, of course, is one of the key figures in the blockbuster generation of post-impressionist painters who are meat and drink to the international exhibition circuit (as well as the ancillary films made about them).
                  </p>
                  <p className="text-sm font-bold pt-2">
                    Jhon Doe
                  </p>
                  <p className="text-xs ">
                    12-12-2019
                  </p>
                </div>
                <div>
                  <img 
                  src="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1200"
                  alt="nature"
                  width ="50%"
                  className=""
                  />
                </div>
              </div>

              <div className="flex justify-beetwen">
                <div>
                  <h1 className="text-lg font-semibold font-serif pt-2">
                  Gauguin at the National Gallery review – portrait of a troubling talent
                  </h1>
                  <p className="text-sm font-serif pt-2 text-gray-700">
                  Gauguin, of course, is one of the key figures in the blockbuster generation of post-impressionist painters who are meat and drink to the international exhibition circuit (as well as the ancillary films made about them).
                  </p>
                  <p className="text-sm font-bold pt-2">
                    Jhon Doe
                  </p>
                  <p className="text-xs ">
                    12-12-2019
                  </p>
                </div>
                <div>

                </div>
              </div>

              <div className="flex justify-beetwen">
                <div>
                  <h1 className="text-lg font-semibold font-serif pt-2">
                  Gauguin at the National Gallery review – portrait of a troubling talent
                  </h1>
                  <p className="text-sm font-serif pt-2 text-gray-700">
                  Gauguin, of course, is one of the key figures in the blockbuster generation of post-impressionist painters who are meat and drink to the international exhibition circuit (as well as the ancillary films made about them).
                  </p>
                  <p className="text-sm font-bold pt-2">
                    Jhon Doe
                  </p>
                  <p className="text-xs ">
                    12-12-2019
                  </p>
                </div>
                <div>

                </div>
              </div>


            </div>
            </div>
            
            <div class="w-2/3 overflow-hidden sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 px-4">
            <h1 className="pb-4 mt-4 ml-1 text-3xl font-bold rounded font-serif">
            Lifestyle
            </h1>
            <div>
              <div className="flex justify-beetwen">
                <div>
                  <h1 className="text-lg font-serif">
                  Gauguin at the National Gallery review – portrait of a troubling talent
                  </h1>
                  <p>

                  </p>
                </div>
                <div>

                </div>
              </div>
            </div>
            </div>

            <div class="w-2/3 overflow-hidden sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 px-4">
            <h1 className="pb-4 mt-4 ml-1 text-3xl font-bold rounded font-serif">
            Food
            </h1>
            <div>
              <div className="flex justify-beetwen">
                <div>
                  <h1 className="text-lg font-serif">
                  Gauguin at the National Gallery review – portrait of a troubling talent
                  </h1>
                  <p>

                  </p>
                </div>
                <div>

                </div>
              </div>
            </div>
            </div>

            <div class="w-2/3 overflow-hidden sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 px-4">
            <h1 className="pb-6 ml-1 text-3xl font-bold rounded font-serif">
            Tech
            </h1>
            <div>
              
            </div>
            </div>



      
            <div class="w-2/3 overflow-hidden sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 px-4">
            <h1 className="pb-6 ml-1 text-3xl font-bold rounded font-serif">
            Education
            </h1>
            <div>
              
            </div>
            </div>

            <div class="w-2/3 overflow-hidden sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 px-4">
            <h1 className="pb-6 ml-1 text-3xl font-bold rounded font-serif">
            Entertaintment
            </h1>
            <div>
              
            </div>
            </div>

            <div className="w-1/3 overflow-hidden sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 shadow bg-gray-300 shadow relative style-top overflow-y-auto sticky top-16 max-h-(screen-16) pt-12 pb-4 -mt-12">
              <h2 className="text-center font-bold p-2 mb-6">TOP CONTRIBUTOR</h2>
              <h1 className="text-center font-bold py-4">#1</h1>
              <div className="flex justify-center">
              <img 
              src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
              alt="Some" 
              className="w-24 h-24 flex self-center rounded-full shadow-lg mb-6 object-cover"/>
              <div className="medal-top">
              <img 
              src={Medal1}
              alt="medal"
              width="35%"
              />
              </div>
              </div>
              <div className="text-center">
              <h2 className="font-semibold text-xl">Jane Doe</h2>
              <h2 className="font-semibold text-base">90</h2>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-1 text-sm px-4 rounded">
                View
              </button>
              </div>
              <div className="flex justify-around mt-4">
                <p>2</p>
                <p className="font-base ml-8">Jane Doe</p>
                <img 
                  src={Silver1}
                  alt="medal-silver"
                  width="10%"
                />
              </div>
              <div className="flex justify-around mt-4">
                <p>3</p>
                <p className="font-base ml-8">Jane Doe</p>
                <img 
                  src={Silver1}
                  alt="medal-silver"
                  width="10%"
                />
              </div>
              <div className="flex justify-around mt-4">
                <p>4</p>
                <p className="font-base ml-8">Jane Doe</p>
                <img 
                  src={Silver1}
                  alt="medal-silver"
                  width="10%"
                />
              </div>
              <div className="flex justify-around mt-4">
                <p>5</p>
                <p className="font-base ml-8">Jane Doe</p>
                <img 
                  src={Silver1}
                  alt="medal-silver"
                  width="10%"
                />
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
