import Image from 'next/image'

import Mainpage from './Home/mainpage'


import DataFetcher from './data.js'

export default function Home() {
  return (
    <DataFetcher>
      <Mainpage/>
   
    </DataFetcher>
      

      );
}
