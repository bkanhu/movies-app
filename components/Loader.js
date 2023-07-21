import Image from 'next/image';
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full">
      <Image width={100} height={100} alt="Loading..." src="/loader.svg" />
    </div>
  );
};

export default Loader;
