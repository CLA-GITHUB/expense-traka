import type { NextPage } from "next";
import AddTransaction from "../components/AddTransaction";
import Balance from "../components/Balance";
import Header from "../components/Header";
import History from "../components/History";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className='max-w-sm mx-auto'>
        <div className='py-8' />
        <Header title='Expense Tracker' />
        <div className='py-6' />
        <Balance />
        <div className='py-8' />
        <History />
        <div className='py-8' />
        <AddTransaction />
        <div className='py-8' />
      </div>
    </Layout>
  );
};

export default Home;
