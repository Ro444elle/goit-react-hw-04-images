import React from 'react';
import { Puff } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader-container">
      <Puff
        height={80}
        width={80}
        radius={1}
        color="orange"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
