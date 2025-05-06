import Image from 'next/image'
import Link from "next/link";
import Mainpage from './components/Home/page'

import DataFetcher from './data.js'

export default function Home() {
  return (
    <DataFetcher>
      <Mainpage/>
    </DataFetcher>
      

      );
}
