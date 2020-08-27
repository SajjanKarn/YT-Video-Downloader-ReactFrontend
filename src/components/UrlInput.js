import React from "react";

function UrlInput({ urlInput, onInputChange, onClicked }) {
  return (
    <div className="input-container d-flex">
      <input
        className="form-control"
        type="text"
        placeholder="Enter Only Id of the Video! Eg: watch?v= {{ xTN1FdLWmK0 }} "
        onChange={onInputChange}
        value={urlInput}
      />
      {urlInput ? (
        <button className="btn btn-md btn-primary" onClick={onClicked}>
          Download
        </button>
      ) : (
        <button className="btn btn-md btn-primary" disabled={true}>
          Download
        </button>
      )}
    </div>
  );
}

export default UrlInput;
