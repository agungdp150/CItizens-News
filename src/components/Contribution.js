import React, { Component } from 'react';

import Medal from '../assets/img/medal.svg';
import Silver from '../assets/img/silver.svg';
import Bronze from '../assets/img/bronze.svg';

import '../assets/scss/Contribution.scss'

class Contribution extends Component {
  render() {
    return (
      <div>
        <div className="flex justify-center c-title">
        <h1>TOP CITIZENS</h1>
        </div>
      <div class="p-10">
      <div class="bg-white mx-auto max-w-sm shadow-md rounded-lg overflow-hidden">
        <div class="sm:flex sm:items-center px-6 py-4">
          <img class="border border-gray block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://gravatar.com/avatar/507c9eaef87e530e2966b71307768e63?s=128&d=https://static.codepen.io/assets/avatars/user-avatar-128x128-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png" alt=""/>
          <div class="text-center sm:text-left "/>
            <div class="mb-4">
              <p class="text-xl text-center leading-tight">Jhon Doe</p>
              <p class="pt-2 text-sm leading-tight text-grey-dark">
                <img src={Medal} alt="Medal" width="40px"/>
              </p>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>

<div class="flex flex-wrap overflow-hidden">

  <div class="w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
  <div class="p-10">
<div class="bg-white mx-auto max-w-sm shadow-md rounded-lg overflow-hidden">
  <div class="sm:flex sm:items-center px-6 py-4">
    <img class="border border-gray block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://gravatar.com/avatar/507c9eaef87e530e2966b71307768e63?s=128&d=https://static.codepen.io/assets/avatars/user-avatar-128x128-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png" alt=""/>
    <div class="text-center sm:text-left"/>
      <div class="mb-4">
        <p class="text-xl leading-tight">Giovanna Douglas</p>
        <p class="pt-2 text-sm leading-tight text-grey-dark">
          <img src={Silver} alt="Medal" width="40px"/>
        </p>
      </div>
      <div>
      </div>
    </div>
  </div>
</div>
  </div>

  <div class="w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
  <div class="p-10">
<div class="bg-white mx-auto max-w-sm shadow-md rounded-lg overflow-hidden">
  <div class="sm:flex sm:items-center px-6 py-4">
    <img class="border border-gray block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://gravatar.com/avatar/507c9eaef87e530e2966b71307768e63?s=128&d=https://static.codepen.io/assets/avatars/user-avatar-128x128-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png" alt=""/>
    <div class="text-center sm:text-left"/>
    <div class="mb-4">
        <p class="text-xl leading-tight">Brock Douglas</p>
        <p class="pt-2 text-sm leading-tight text-grey-dark">
          <img src={Bronze} alt="Medal" width="40px"/>
        </p>
      </div>
      <div>
      </div>
    </div>
  </div>
</div>
  </div>

  <div class="w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
  <div class="p-10">
<div class="bg-white mx-auto max-w-sm shadow-md rounded-lg overflow-hidden">
  <div class="sm:flex sm:items-center px-6 py-4">
    <img class="border border-gray block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://gravatar.com/avatar/507c9eaef87e530e2966b71307768e63?s=128&d=https://static.codepen.io/assets/avatars/user-avatar-128x128-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png" alt=""/>
    <div class="text-center sm:text-left"/>
    <div class="mb-4">
        <p class="text-xl leading-tight">Brock Douglas</p>
        <p class="pt-2 text-sm leading-tight text-grey-dark">
          <img src={Bronze} alt="Medal" width="40px"/>
        </p>
      </div>
      <div>
      </div>
    </div>
  </div>
</div>
  </div>

  <div class="w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
  <div class="p-10">
<div class="bg-white mx-auto max-w-sm shadow-md rounded-lg overflow-hidden">
  <div class="sm:flex sm:items-center px-6 py-4">
    <img class="border border-gray block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://gravatar.com/avatar/507c9eaef87e530e2966b71307768e63?s=128&d=https://static.codepen.io/assets/avatars/user-avatar-128x128-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png" alt=""/>
    <div class="text-center sm:text-left"/>
    <div class="mb-4">
        <p class="text-xl leading-tight">Brock Douglas</p>
        <p class="pt-2 text-sm leading-tight text-grey-dark">
          <img src={Bronze} alt="Medal" width="40px"/>
        </p>
      </div>
      <div>
      </div>
    </div>
  </div>
</div>
  </div>

  <div class="w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
  <div class="p-10">
<div class="bg-white mx-auto max-w-sm shadow-md rounded-lg overflow-hidden">
  <div class="sm:flex sm:items-center px-6 py-4">
    <img class="border border-gray block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://gravatar.com/avatar/507c9eaef87e530e2966b71307768e63?s=128&d=https://static.codepen.io/assets/avatars/user-avatar-128x128-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png" alt=""/>
    <div class="text-center sm:text-left"/>
    <div class="mb-4">
        <p class="text-xl leading-tight">Brock Douglas</p>
        <p class="pt-2 text-sm leading-tight text-grey-dark">
          <img src={Bronze} alt="Medal" width="40px"/>
        </p>
      </div>
      <div>
      </div>
    </div>
  </div>
</div>
  </div>

  <div class="w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
  <div class="p-10">
<div class="bg-white mx-auto max-w-sm shadow-md rounded-lg overflow-hidden">
  <div class="sm:flex sm:items-center px-6 py-4">
    <img class="border border-gray block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://gravatar.com/avatar/507c9eaef87e530e2966b71307768e63?s=128&d=https://static.codepen.io/assets/avatars/user-avatar-128x128-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png" alt=""/>
    <div class="text-center sm:text-left"/>
    <div class="mb-4">
        <p class="text-xl leading-tight">Brock Douglas</p>
        <p class="pt-2 text-sm leading-tight text-grey-dark">
          <img src={Bronze} alt="Medal" width="40px"/>
        </p>
      </div>
      <div>
      </div>
    </div>
  </div>
</div>
  </div>

  <div class="w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
  <div class="p-10">
<div class="bg-white mx-auto max-w-sm shadow-md rounded-lg overflow-hidden">
  <div class="sm:flex sm:items-center px-6 py-4">
    <img class="border border-gray block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://gravatar.com/avatar/507c9eaef87e530e2966b71307768e63?s=128&d=https://static.codepen.io/assets/avatars/user-avatar-128x128-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png" alt=""/>
    <div class="text-center sm:text-left"/>
    <div class="mb-4">
        <p class="text-xl leading-tight">Brock Douglas</p>
        <p class="pt-2 text-sm leading-tight text-grey-dark">
          <img src={Bronze} alt="Medal" width="40px"/>
        </p>
      </div>
      <div>
      </div>
    </div>
  </div>
</div>
  </div>

  <div class="w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
  <div class="p-10">
<div class="bg-white mx-auto max-w-sm shadow-md rounded-lg overflow-hidden">
  <div class="sm:flex sm:items-center px-6 py-4">
    <img class="border border-gray block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://gravatar.com/avatar/507c9eaef87e530e2966b71307768e63?s=128&d=https://static.codepen.io/assets/avatars/user-avatar-128x128-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png" alt=""/>
    <div class="text-center sm:text-left"/>
    <div class="mb-4">
        <p class="text-xl leading-tight">Brock Douglas</p>
        <p class="pt-2 text-sm leading-tight text-grey-dark">
          <img src={Bronze} alt="Medal" width="40px"/>
        </p>
      </div>
      <div>
      </div>
    </div>
  </div>
</div>
  </div>

  <div class="w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
  <div class="p-10">
<div class="bg-white mx-auto max-w-sm shadow-md rounded-lg overflow-hidden">
  <div class="sm:flex sm:items-center px-6 py-4">
    <img class="border border-gray block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://gravatar.com/avatar/507c9eaef87e530e2966b71307768e63?s=128&d=https://static.codepen.io/assets/avatars/user-avatar-128x128-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png" alt=""/>
    <div class="text-center sm:text-left"/>
    <div class="mb-4">
        <p class="text-xl leading-tight">Brock Douglas</p>
        <p class="pt-2 text-sm leading-tight text-grey-dark">
          <img src={Bronze} alt="Medal" width="40px"/>
        </p>
      </div>
      <div>
      </div>
    </div>
  </div>
</div>
  </div>

  <div class="w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
  <div class="p-10">
<div class="bg-white mx-auto max-w-sm shadow-md rounded-lg overflow-hidden">
  <div class="sm:flex sm:items-center px-6 py-4">
    <img class="border border-gray block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://gravatar.com/avatar/507c9eaef87e530e2966b71307768e63?s=128&d=https://static.codepen.io/assets/avatars/user-avatar-128x128-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png" alt=""/>
    <div class="text-center sm:text-left"/>
    <div class="mb-4">
        <p class="text-xl leading-tight">Brock Douglas</p>
        <p class="pt-2 text-sm leading-tight text-grey-dark">
          <img src={Bronze} alt="Medal" width="40px"/>
        </p>
      </div>
      <div>
      </div>
    </div>
  </div>
</div>
  </div>

</div>





        
      </div>
    )
  }
}

export default Contribution
