function MediaUpload({
  image,
  setImage,
}) {
  return (
    <div>

      <h3>Upload Image</h3>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {

          if (e.target.files[0]) {

            setImage(
              URL.createObjectURL(
                e.target.files[0]
              )
            );

          }

        }}
      />

      <br />

      {image && (
        <img
          src={image}
          alt="Preview"
          width="250"
        />
      )}

    </div>
  );
}

export default MediaUpload;