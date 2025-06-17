import About from './aboutpage'; 
import DataFetcher from '../data.js';
import Footer from '../footer/Footer.js';
import Header from '../header/Header.js';


export default function Page() {
  return (
    <DataFetcher>
        <Header/>
        <About />
        <Footer/>
    </DataFetcher>
  );
}