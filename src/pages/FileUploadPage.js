import React, { Component } from 'react';
import FileUpload from '../components/FileUpload';
import HeaderS from '../components/HeaderS';



class FileUploadPage extends Component {
  render() {
    return (
      <div>
        <HeaderS/>
        <FileUpload/>
      </div>
    )
  }
}

export default FileUploadPage;
