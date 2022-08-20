
import { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import './index.scss';

function App() {

  const [currencyFrom, setCurrencyFrom] = useState('UAH')
  const [currencyTo, setCurrencyTo] = useState('USD')
  const [fromItem, setFromItem] = useState(0)
  const [toItem, setToItem] = useState(1)
  // const [rates, setRates] = useState({})

  const ratesRef = useRef({})

  useEffect(() => {
    fetch('https://cdn.cur.su/api/latest.json')
      .then((res) => res.json()).then((json) => {
        // setRates(json.rates);
        ratesRef.current = json.rates;
        onChahgeToCurrency(1)
      }).catch((error) => {
        console.warn(error);
        alert('Не вдалось завантажити інформацію')
      })
  }, [])

  const onChahgeFromCurrency = (value) => {
    const item = value / ratesRef.current[currencyFrom];
    const result = item * ratesRef.current[currencyTo];
    setToItem(result.toFixed(2))
    setFromItem(value)
  }

  const onChahgeToCurrency = (value) => {
    const result = (ratesRef.current[currencyFrom] / ratesRef.current[currencyTo]) * value;
    setFromItem(result.toFixed(2))
    setToItem(value)

  }

  useEffect(() => { onChahgeFromCurrency(fromItem) }, [currencyFrom])

  useEffect(() => { onChahgeToCurrency(toItem) }, [currencyTo])

  return <div className='App'>
    <Hero value={fromItem} currency={currencyFrom} onChangeCurrency={setCurrencyFrom} onChangeValue={onChahgeFromCurrency} />
    <Hero value={toItem} currency={currencyTo} onChangeCurrency={setCurrencyTo} onChangeValue={onChahgeToCurrency} />
  </div>;
}

export default App;
