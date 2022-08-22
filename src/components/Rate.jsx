import React, { useEffect, useState } from 'react';

// const currentRate = ['UAH:', 'USD:', 'EUR:', 'PLN:'];

const Rate = () => {
  const [rate, setRate] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://cdn.cur.su/api/nbu.json')
        .then((res) => res.json())
        .catch((err) => console.log(err));

      setRate(response);
    };
    fetchData();
  }, []);
  return { rate };

  //   return (
  //     <div className='rate'>
  //       {/* {currentRate.map((it) => (
  //         <li key={it}>{it}</li>
  //       ))} */}
  //     </div>
  //   );
};

export default Rate;
