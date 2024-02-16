import React from 'react'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Logo from './Components/Logo'
import NewArrivals from './Components/NewArrivals'
import ShopCollection from './Components/ShopCollection'
import BestSeller from './Components/BestSeller'
import Promotion from './Components/Promotion'
import NewsFeed from './Components/NewsFeed'
import NewsLetter from './Components/NewsLetter'
import Footer from './Components/Footer'
import Features from './Components/Features'


const App = () => {
  return (
    <>
    <Header />
    <Banner />
    <Logo />
    <NewArrivals />
    <ShopCollection />
    <BestSeller />
    <Promotion />
    <Features />
    <NewsFeed />
    <NewsLetter/>
    <Footer />
    </>
  )
}

export default App