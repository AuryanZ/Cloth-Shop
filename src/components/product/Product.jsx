import ImagePreviewContainer from './ImagePreviewContainer';
import Description from './Description';
const Product = ({ product }) => {

  const { id, imageURL, title, price, description, sizeOptions } = product;
  
  return (

    <div className='product flex flex-col lg:flex-row justify-center mt-10 px-4 lg:px-32'>
      <div className='w-full lg:w-1/2'>
        <ImagePreviewContainer imageUrl={imageURL} />
      </div>
      <div className='w-full lg:w-1/2'>
        <Description
          id={id}
          title={title}
          price={price}
          description={description}
          sizes={sizeOptions}
          imageUrl={imageURL}
        />
      </div>
    </div>
  )
}

export default Product;