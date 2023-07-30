import { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Product from './components/product/Product';

function App() {
  const [product, setProdcut] = useState({});
  const isLoaded = useRef(false);


  useEffect(() => {
    const fetchProduct = async () => {
    const response = await fetch('https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product');
    const data = await response.json();
    if(!data) return console.log('No product found');
    setProdcut(data);
    isLoaded.current = true;
  }
    try {
      if (!isLoaded.current) {
        fetchProduct();
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="App">
      <div className='container mx-auto'>
        <Header />
        <Product product={product} />
      </div>
    </div>
  );
}

export default App;
