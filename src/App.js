import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import WelcomeTexts from "./components/WelcomeTexts";
import UrlInput from "./components/UrlInput";
import Axios from "axios";

function App() {
  const [urlInput, setUrlInput] = useState("");
  const [success, setSuccess] = useState(false);
  const [downloadLink, setDownloadLink] = useState("");

  // handle onClick Button
  const handleOnClickChange = () => {
    Axios.get(`http://localhost:5500/download/${urlInput}`)
      .then((response) => {
        console.log(response.data);
        if (response.data.downloadLink) {
          setSuccess(true);
          setDownloadLink(response.data.downloadLink);
        }
      })
      .catch((err) => console.log(err));
  };

  // const handleDownload = () => {
  //   Axios.get(downloadLink)
  //     .then((response) => { 
  //       console.log(response);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div>
      <Navbar />
      <div className="jumbotron-container">
        <WelcomeTexts />

        {success && (
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>Congratulations!</strong> You can now download your video
            just clicking on the download button
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}
        {success && (
          <a href={downloadLink} className="btn btn-danger btn-md my-3">Download Your File</a>
        )}

        <UrlInput
          urlInput={urlInput}
          onInputChange={(e) => setUrlInput(e.target.value)}
          onClicked={() => handleOnClickChange()}
        />
      </div>
    </div>
  );
}

export default App;
