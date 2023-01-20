import Head from 'next/head'
import styles from './Home.module.scss'
import AllCharsList from '_components/AllCharsList';
import Header from '_components/Header';
import Hero from '_components/Hero';
import { MarvelContext } from '_context/MarvelContext';
import { useContext, useEffect } from 'react';
import Footer from '_components/Footer';
import CredCard from '_components/CredCard';

const Home = () => {
  const { loading, setLoading } = useContext(MarvelContext)
  useEffect(() => {
    setLoading(!loading)    
  }, [])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Marvel - heros</title>
        <meta name="description" content="created by Lugh" />
        <link rel="icon" href="../assets/ironman.ico" />
      </Head>
      <Header />
      <Hero />
      <AllCharsList />
      <CredCard />
      <Footer />
    </div>
  )
};
export default Home;
