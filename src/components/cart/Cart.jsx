import './Cart.css'
import { useState, useRef, useLayoutEffect } from 'react'
import { useAtom } from 'jotai'
import ImagePreviewContainer from '../product/ImagePreviewContainer'
import cartItemsAtom from '../../atoms/cartItemsAtom'

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)
  const cartItemsRef = useRef(null)
  const [cartItems] = useAtom(cartItemsAtom)
  useLayoutEffect(() => {
    const width = containerRef.current.offsetWidth
    cartItemsRef.current?.style?.setProperty('--cart-white-width', `${width - 2}px`)
  }, [cartItems])

  const calculateTotalItems = () => {
    let total = 0
    cartItems?.forEach(item => {
      total += item.quantity
    })
    return total
  }
  return (
    <div ref={containerRef} className={`cart h-full relative  border border-b-white cursor-pointer select-none ${isOpen && cartItems?.length ? 'bg-white border-[#888888]' : 'border-transparent'}`}>
      <div className={`cart-title p-4`}>
        <div
          className="cart relative"
          onClick={() => {
            if (!cartItems?.length) return
            setIsOpen(!isOpen)
          }}
        >
          My Cart ({`${calculateTotalItems()}`})
        </div>
      </div>
      <div ref={cartItemsRef} className={`cart-items w-[calc(100vw-2rem)] md:w-[calc(100vw-6rem)] lg:w-[32rem] absolute top-full -right-px p-4 py-0 bg-white border border-[#888888] min-w-[20rem] ${isOpen && cartItems?.length ? "block" : "hidden"}`}>
        {cartItems && (
          <>
            {cartItems.map(({ title, price, size, imageUrl, quantity }, index) => (
              <div key={index} className='cart-item flex my-8'>
                <div className='cart-item-image mr-4 w-1/3'>
                  <ImagePreviewContainer imageUrl={imageUrl} />
                </div>
                <div className='cart-description ml-4 w-2/3'>
                  <div className='title'>{title}</div>
                  <div className='quantity-price mt-2'>
                    {quantity}x {' '}
                    <span className='price font-bold'>
                      ${parseFloat(price).toFixed(2)}
                    </span>
                  </div>
                  <div className='mt-2'>Size: {size.label.toUpperCase()}</div>
                </div>

              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default Cart
