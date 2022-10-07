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
    <>
      <div
        className={`flex justify-center items-center border-r-4  ${
          amount < 0 ? "border-r-red-600" : "border-r-lime-500"
        }  p-2 text-sm bg-white`}
        onClick={() => setHide(!hide)}
        onDoubleClick={() => setShowDel(!showDel)}
      >
        {/* {showDel && (
          <button className='bg-red-600 rounded mr-2'>
            <RiCloseLine className='text-xl text-white' />
          </button>
        )} */}
        <p className='flex-1 font-semibold'>{title}</p>
        <p className='font-semibold'>₦{amount}</p>
      </div>
      {hide && <span className='text-sm p-2 bg-white'>{comment}</span>}
    </>
  );
};
export default Transaction;
