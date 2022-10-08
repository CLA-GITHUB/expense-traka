import React from "react";
import { RiCloseLine } from "react-icons/ri";

interface TransactionProps {
  amount: number;
  title: string;
  comment: string;
}
const Transaction: React.FC<TransactionProps> = ({
  title,
  amount,
  comment,
}) => {
  const [hide, setHide] = React.useState<Boolean>(false);
  const [showDel, setShowDel] = React.useState<Boolean>(false);
  return (
    <div
      className={`p-2 text-sm bg-white dark:bg-[#16213E] border-r-4  ${
        amount < 0 ? "border-r-red-600" : "border-r-lime-500"
      }`}
    >
      <div
        className={`flex justify-center items-center  `}
        onClick={() => setHide(!hide)}
        onDoubleClick={() => setShowDel(!showDel)}
      >
        {/* {showDel && (
          <button className='bg-red-600 rounded mr-2'>
            <RiCloseLine className='text-xl text-white' />
          </button>
        )} */}
        <p className='flex-1 font-medium dark:text-white'>{title}</p>
        <p className='font-medium dark:text-white'>₦{amount}</p>
      </div>
      {hide && <p className='py-3 dark:text-white'>{comment}</p>}
    </div>
  );
};
export default Transaction;
