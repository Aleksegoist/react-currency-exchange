import { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';

import './index.scss';

function App() {
  const [currencyFirst, setCurrencyFirst] = useState('UAH');
  const [currencySecond, setCurrencySecond] = useState('USD');
  const [firstPrice, setFirstPrice] = useState(0);
  const [secondPrice, setSecondPrice] = useState(1);

  // const [rates, setRates] = useState({});

  const ratesRef = useRef({});

  useEffect(() => {
    fetch('https://cdn.cur.su/api/nbu.json')
      .then((res) => res.json())
      .then((json) => {
        // setRates(json.rates);
        ratesRef.current = json.rates;
        handleSecondPrice(1);
      })
      .catch((err) => {
        console.log(err);
        alert('No data');
      });
  }, []);

  const handleFirstPrice = (value) => {
    const price = value / ratesRef.current[currencyFirst];
    const result = price * ratesRef.current[currencySecond];

    setSecondPrice(result.toFixed(1));
    setFirstPrice(value);
  };

  const handleSecondPrice = (value) => {
    const result =
      (ratesRef.current[currencyFirst] / ratesRef.current[currencySecond]) *
      value;
    setFirstPrice(result.toFixed(1));
    setSecondPrice(value);
  };

  useEffect(() => {
    handleFirstPrice(firstPrice);
  }, [currencyFirst]);

  useEffect(() => {
    handleSecondPrice(secondPrice);
  }, [currencySecond]);

  return (
    <div className='App'>
      <Hero
        value={firstPrice}
        currency={currencyFirst}
        handleSelectCurrency={setCurrencyFirst}
        handleReturnValue={handleFirstPrice}
      />
      <Hero
        value={secondPrice}
        currency={currencySecond}
        handleSelectCurrency={setCurrencySecond}
        handleReturnValue={handleSecondPrice}
      />
    </div>
  );
}

export default App;
