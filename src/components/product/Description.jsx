import { useState } from "react";
import { useAtom } from "jotai";
import cartItemsAtom from "../../atoms/cartItemsAtom";
const Description = ({
id,
title,
description,
price,
imageUrl,
sizes,
}) => {
    console.log(imageUrl)
    const [, setCartItems] = useAtom(cartItemsAtom)
    const [selectedSize, setSelectedSize] = useState('')

    const handleOnAddToCart = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setCartItems((prev) => {
          if (!selectedSize) {
            alert('Please select a size')
            return prev
          }
          const newCartItems = [...prev]
          const index = newCartItems.findIndex((item) => item.id === id && item.size === selectedSize)
          if (index > -1) {
            newCartItems[index].quantity += 1
            return newCartItems
          }
          else {
            return [...newCartItems, {
              id,
              title,
              price,
              size: selectedSize,
              imageUrl,
              quantity: 1,
            }]
          }
        })
      }
return (
<div className="description">
      {title && (
        <h1 className="title text-xl text-[#222222] border-b border-[#CCCCCC] font-semibold py-6">{title}</h1>
      )}
      {price && (
        <div className="price text-[#222222] font-bold border-b border-[#CCCCCC] py-4">{`$${price || '0.00'}`}</div>
      )}
      {description && (
        <div className="description text-[#888888] py-4">{description}</div>
      )}
      {sizes && (
         <>
         <div className="size text-[#888888] py-4">Size<span className='text-[#C90000]'>*</span> {`${selectedSize.label || ''}`}</div>
         <div className='size-selector flex'>
           {sizes.map((size, index) => (
             <div
               key={index}
               className={`size-item border w-10 aspect-square flex items-center justify-center mr-4 cursor-pointer select-none ${selectedSize.id === size.id ? 'border-[#222222]' : 'border-[#CCCCCC]'}`}
               onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedSize(size); }}
             >
               {size.label}
             </div>
           ))}
         </div>
       </>
      )}

        <div
        className='add-to-cart text-center select-none py-3 mt-4 cursor-pointer border transition-all border-[#222222] w-1/2 lg:w-4/12 hover:text-white hover:bg-[#222222]'
        onClick={(e) => { handleOnAddToCart(e); }}
      >
        Add to Cart
      </div>
    
    </div>
  )
};

export default Description;