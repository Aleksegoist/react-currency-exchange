import React from 'react';

const defaultCurrency = ['UAH', 'USD', 'EUR'];

const Hero = ({ value, currency, onChangeValue, onChangeCurrency }) => {
  return (
    <div className='hero'>
      <ul className='currency'>
        {defaultCurrency.map((cur) => (
          <li
            onClick={() => onChangeCurrency(cur)}
            className={currency === cur ? 'active' : ''}
            key={cur}
          >
            {cur}
          </li>
        ))}
      </ul>
      <input
        onChange={(e) => onChangeValue(e.target.value)}
        value={value}
        type='number'
        placeholder={0}
      />
    </div>
  );
};

export default Hero;
