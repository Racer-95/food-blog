import DataFetcher from '../data.js';
import Boxpage from './boxpage'; 
import Footer from '../footer/Footer.js'
import Header from '../header/Header.js'

export default function Page() {
  return (
    <DataFetcher>
      <Header/>
      <Boxpage/>
      <Footer/>
    </DataFetcher>
  );
}