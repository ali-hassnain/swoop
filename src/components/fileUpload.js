import React from "react";
import axios from "axios";

export default class FileUpload extends React.Component {
  state = {
    file: null,
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state.file);

    const data = new FormData();
    data.append("files", this.state.file);
    console.log(data);

    const upload_res = await axios.post("http://localhost:1337/upload", data);
    console.log("upload_res:", upload_res);
  };
  handleChange = (event) => {
    console.log(event.target.files);
    this.setState({ file: event.target.files[0] });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="file"
            webkitdirectory
          ></input>
          <button>Upload</button>
        </form>
      </div>
    );
  }
}
