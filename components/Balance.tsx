import React from "react";

interface BalanceProps {}
const Balance: React.FC = ({}) => {
  return (
    <div>
      <div>
        <p className='uppercase font-semibold dark:text-white'>Your balance</p>
        <p className='uppercase text-2xl font-semibold dark:text-white'>
          ₦450.00
        </p>
      </div>

      <div className='flex  bg-white dark:bg-[#16213E] py-8 rounded-md mt-3 drop-shadow-lg'>
        <div className='uppercase flex flex-col justify-center items-center flex-1'>
          <p className='font-semibold dark:text-white'>income</p>
          <p className='text-lime-500 font-semibold'>₦500.00</p>
        </div>
        <div className='uppercase flex flex-col justify-center items-center flex-1'>
          <p className='font-semibold dark:text-white'>expense</p>
          <p className='text-red-700 font-semibold'>₦500.00</p>
        </div>
      </div>
    </div>
  );
};
export default Balance;
