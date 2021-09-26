import React, { useState } from "react";

const PhotoUploader = () => {
  const [image, setImage] = useState(null);

  const fileUploader = async (event) => {
    const file = event.target.files[0];

    const base64Image = await convertBase64(file);

    setImage(base64Image);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  let uploadPopup;

  return (
    <div>
      <div className="mb-10">
        <input
          style={{ display: "none" }}
          type="file"
          onChange={fileUploader}
          ref={(fileInput) => {
            uploadPopup = fileInput;
          }}
        />
      </div>
      <button type="button" onClick={() => uploadPopup.click()}>
        Upload Image
      </button>
      <div className="mt-5">
        {image && (
          <img src={image} alt="uploaded-img" height="250px" width="400px" />
        )}
      </div>
    </div>
  );
};

export default PhotoUploader;
