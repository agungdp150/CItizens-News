import React, { Component } from 'react';
import ReactPlayer from "react-player";
import {Link, withRouter} from "react-router-dom"
import '../../assets/scss/Search.scss'


class Search extends Component {
  render() {

    console.log("ini dia",this.props.dataSearch)

    const useSearch = this.props.dataSearch

    const resultSearch = useSearch && useSearch.map(findNews => {
      
      if (findNews.category[0] === "Video") {
        return (
          <div
            className='flex flex-wrap overflow-hidden p-2 shadow my-4 rounded'
            key={findNews._id}>
            <div className='w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3 p-3'>
              <ReactPlayer
                url={findNews.media.secure_url}
                width='100%'
                height='130px'
              />
            </div>
            <div className='w-full overflow-hidden md:w-2/3 lg:w-2/3 xl:w-2/3 p-3'>
              <Link to={`/videoDetail/${findNews._id}`}>
                <h2 className='font-semibold'>{findNews.title}</h2>
              </Link>
              <p className='text-xs'>
                published on<span> {findNews.date.substring(0, 10)}</span>
              </p>
              <p className='text-sm py-4 text-justify'>
                {findNews.description.substring(0, 150)}...{" "}
                <span className='font-semibold text-blue-800'>
                  <Link to={`/detail/${findNews._id}`}> Read More </Link>
                </span>
              </p>
            </div>
          </div>
        )
      } else {
        return (
          <div
            className='flex flex-wrap overflow-hidden p-2 shadow my-4 rounded'
            key={findNews._id}>
            <div className='w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3 p-3'>
              <img
                src={findNews.media.secure_url}
                alt='name'
                className='h-40 w-full'
              />
            </div>

            <div className='w-full overflow-hidden md:w-2/3 lg:w-2/3 xl:w-2/3 p-3'>
              <Link to={`/detail/${findNews._id}`}>
                <h2 className='font-semibold'>{findNews.title}</h2>
              </Link>
              <p className='text-xs'>
                published on {findNews.date.substring(0, 10)}
              </p>
              <p className='text-sm py-4 text-justify'>
                {findNews.description.substring(0, 150)}...
                <span className='font-semibold text-blue-800'>
                  <Link to={`/detail/${findNews._id}`}> Read More </Link>
                </span>
              </p>
            </div>
          </div>
        );
      }
    })


    return (
      <div>
         <div className="search-width">
         <div className="flex flex-wrap overflow-hidden">

            {resultSearch}




            </div>
         </div>
      </div>
    )
  }
}

export default (withRouter (Search));
