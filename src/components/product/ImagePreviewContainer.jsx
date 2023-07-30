const ImagePreviewContainer = ({ imageUrl }) => {
    return (
      <div className="image-preview-container">
        <div className="image-wrapper flex justify-center items-center">
          <img
            className="image block max-w-[32rem] w-full aspect-[9/16] object-cover"
            src={imageUrl}
            alt="preview"
          />
        </div>
      </div>
    );
  }
  
  export default ImagePreviewContainer;