import { useEffect } from 'react';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import { getCabins } from '../services/apiCabins';

function Cabins() {
  useEffect(() => {
    fetchCabins();
  }, []);

  const fetchCabins = async () => {
    const data = await getCabins();
    console.log('🚀 ~ fetchCabins ~ data:', data);
  };
  return (
    <Row type='horizontal'>
      <Heading as='h1'>All cabins</Heading>
      <p>TEST</p>
      <img
        src='https://ghluwenhtnkkeigbhuvp.supabase.co/storage/v1/object/public/cabin-images/cabin-002.jpg'
        alt='cabin-image'
      />
    </Row>
  );
}

export default Cabins;
