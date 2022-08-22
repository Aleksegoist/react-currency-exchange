import React from 'react';

const defCurrency = ['UAH', 'USD', 'EUR', 'PLN'];

const Hero = ({ value, currency, handleReturnValue, handleSelectCurrency }) => {
  return (
    <div className='hero'>
      <ul className='currency'>
        {defCurrency.map((it) => (
          <li
            onClick={() => handleSelectCurrency(it)}
            className={currency === it ? 'active' : ''}
            key={it}
          >
            {it}
          </li>
        ))}
      </ul>
      <input
        onChange={(el) => handleReturnValue(el.target.value)}
        value={value}
        type='number'
        placeholder={0}
      />
    </div>
  );
};

export default Hero;
