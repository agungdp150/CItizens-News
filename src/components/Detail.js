import React, { Component } from 'react';
import '../assets/scss/Detail.scss'


class Detail extends Component {
  render() {
    return (
      <div>
        <div className="flex flex-wrap overflow-hidden">

          <div className="w-full overflow-hidden text-container">
            <h1>
              'It was the right choice': how the Gears 5 team built a credible female hero
            </h1>
            <img src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Img"/>
            <div className="container mx-auto my-10">
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet nulla turpis. Nulla laoreet vestibulum purus eu porttitor. Pellentesque scelerisque sit amet leo a blandit. Pellentesque rhoncus, magna eu gravida placerat, velit elit accumsan purus, condimentum varius nisl tellus eu odio. Mauris rutrum quam quis elit varius, et tempor magna dignissim. Phasellus vitae lectus ut purus dignissim ullamcorper at eget sem. Pellentesque tempus laoreet velit, ut finibus felis facilisis nec. Donec hendrerit, nisl non viverra lobortis, tortor lectus tincidunt lectus, vel congue arcu erat vitae augue. Ut porttitor gravida rutrum. Mauris fermentum efficitur massa, condimentum hendrerit ipsum commodo a. Vivamus malesuada, arcu eu viverra lacinia, nunc tortor gravida augue, sed tempus nulla quam id ligula. Sed sed magna mollis, vestibulum mi et, maximus elit. Etiam nisl felis, elementum et volutpat non, efficitur ut urna. Pellentesque nec laoreet nunc.<br/><br/>

            Suspendisse potenti. Donec eleifend nibh ac lectus ultrices eleifend. Sed eleifend tortor nunc, vel luctus dui lacinia et. Nunc tellus est, porta in laoreet a, aliquet non mauris. Ut non erat molestie, tincidunt neque in, congue eros. Duis pellentesque leo in justo aliquam commodo. Duis nec suscipit urna, et laoreet nunc. Phasellus cursus ligula leo, et accumsan est ultrices nec. Aliquam nulla erat, laoreet in pharetra nec, bibendum sit amet libero. Aliquam volutpat congue risus. Duis vestibulum imperdiet diam sed consequat. Nullam eleifend finibus nisl, et dignissim nisl tincidunt eu. Nullam eu tincidunt nunc, at laoreet urna. Nam bibendum libero porta massa ornare, ac efficitur metus consectetur.<br/><br/>

            Phasellus ultricies tincidunt metus, vel consectetur ipsum bibendum vitae. Nulla commodo luctus placerat. Sed nec suscipit massa, sit amet facilisis metus. Proin non magna sit amet nisi rutrum pharetra ac quis diam. Pellentesque sit amet dignissim arcu. Vestibulum interdum sapien rutrum arcu imperdiet, et rhoncus orci interdum. Maecenas non leo quis libero pharetra laoreet id sed mauris. Suspendisse convallis nisl lacus, ut tincidunt tortor vulputate at. Quisque a sem ut libero tincidunt bibendum non nec nunc. Etiam consectetur nisl tempor efficitur facilisis. Nullam eleifend molestie malesuada. Phasellus eu tellus interdum, bibendum arcu vel, vulputate lacus. Aliquam laoreet eu odio sed laoreet. Sed in rhoncus elit.<br/><br/>
            </p>
            </div>
          </div>

          <div className="container mx-auto w-full overflow-hidden d-detail">
            <h1 className="container">Comments</h1>
            <div>
            <form className="container ml-auto my-2">
            <textarea
              input="text"
              placeholder="insert your comment here..."
            /> <br/>
            <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-1 px-4 border border-black hover:border-transparent rounded">
              Post
            </button>
            </form>
            </div>
          </div>
          <div className="container mx-auto w-full overflow-hidden d-detail d-border">
          <article className="p-8 ml-32 mt-4 w-1/2 border-l-4 border-grey-dark bg-grey-lightest shadow rounded-r">
            <header className="flex items-center mb-2">
              <div className="mr-8">
                <img className="" src="https://picsum.photos/80/80?image=1005" width="80" height="80" alt=""/>
              </div>
              <div className="">
                <h4 className="">
                  <p className="no-underline text-xl text-grey-darkest font-medium">Author</p>        
                </h4>
                <ul className="list-reset flex">
                  <li className="mr-2 mt-2">
                    <p className="no-underline text-grey-dark">12 days ago</p></li> 
                    <span className="mt-2 text-grey-dark"></span>
                </ul>
              </div>
            </header>
            <div className="text-grey-darker">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </article>
          </div>
      </div>
      </div>
    )
  }
}

export default Detail
