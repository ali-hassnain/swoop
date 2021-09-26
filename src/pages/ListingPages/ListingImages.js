import React, { Component } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default class UploadComponent extends Component {
  constructor(props) {
    super(props);

    this.onImgChange = this.onImgChange.bind(this);
    this.onUpload = this.onUpload.bind(this);

    this.state = {
      imagesArray: "",
    };
  }

  onImgChange(event) {
    this.setState({
      imagesArray: [...this.state.imagesArray, ...event.target.files],
    });
  }

  onUpload(event) {
    event.preventDefault();
    let formData = new FormData();

    for (const key of Object.keys(this.state.imagesArray)) {
      formData.append("imagesArray", this.state.imagesArray[key]);
    }
    axios
      .post("http://localhost:8000/endpoint/multi-images-upload", formData, {})
      .then((response) => {
        console.log(response.data);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onUpload}>
          <div className="form-group">
            <input
              className="form-control form-control-lg mb-3"
              type="file"
              multiple
              name="imagesArray"
              onChange={this.onImgChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
