import Image from 'next/image'
import Mainpage from './Home/mainpage'
import DataFetcher from './data.js'
import Header from './header/Header.js'
import Footer from './footer/Footer.js'

export default function Home() {
  return (
    <DataFetcher>
      <Header/>
      <Mainpage/>
      <Footer/>
    </DataFetcher>
  );
}
