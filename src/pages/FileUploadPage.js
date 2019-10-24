import React, { Component } from 'react';
import HeadCategory from '../components/HeadCategory';
import FileUpload from '../components/FileUpload';




class FileUploadPage extends Component {
  render() {
    return (
      <div>
        <HeadCategory/>
        <FileUpload/>
      </div>
    )
  }
}

export default FileUploadPage;
