import DataFetcher from '../data.js';
import Boxpage from './boxpage'; 

export default function Page() {
  return (
    <DataFetcher>
      <Boxpage />
    </DataFetcher>
  );
}