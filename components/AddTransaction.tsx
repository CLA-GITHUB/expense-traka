import { Formik } from "formik";
import React from "react";
const AddTransaction: React.FC = ({}) => {
  return (
    <div>
      <div className='mb-3'>
        <p className='font-semibold text-xl'>History</p>
        <div className='mt-3' />
        <hr />
      </div>
      <div>
        <Formik
          initialValues={{ text: "", amount: 0, comment: "" }}
          onSubmit={() => console.log("yello")}
        >
          {() => (
            <form className='space-y-3 text-sm dark:text-white'>
              <div>
                <label htmlFor='text'>Text</label>
                <br />
                <input
                  id='text'
                  type={"text"}
                  className='w-full border p-1 rounded  dark:bg-[#16213E]'
                />
              </div>
              <div>
                <label htmlFor='comment'>Comment</label>
                <br />
                <input
                  id='comment'
                  type={"text"}
                  className='w-full border p-1 rounded text-sm dark:bg-[#16213E]'
                />
              </div>
              <div>
                <label htmlFor='amount'>Amount</label>
                <br />
                <span className='text-sm'>
                  [negative - Expense, positive - income]
                </span>
                <br />
                <input
                  id='amount'
                  type={"number"}
                  className='w-full border p-1 rounded text-sm dark:bg-[#16213E]'
                />
              </div>
              <button className='text-white p-2 w-full bg-purple-400'>
                Add transactiton
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default AddTransaction;
