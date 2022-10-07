import React from "react";
import Transaction from "./Transaction";

const History: React.FC = ({}) => {
  return (
    <div className='flex flex-col space-y-4'>
      <div>
        <p className='font-semibold text-xl'>History</p>
        <div className='mt-3' />
        <hr />
      </div>
      <Transaction
        title='Book'
        amount={-199}
        comment='I bought a book for this price'
      />
      <Transaction
        title='Freelance'
        amount={199}
        comment='I did a freelance gig'
      />
      <Transaction
        title='Book'
        amount={-199}
        comment='I bought a book for this price'
      />
      <Transaction
        title='Salary'
        amount={199}
        comment='I bought a book for this price'
      />
    </div>
  );
};
export default History;
