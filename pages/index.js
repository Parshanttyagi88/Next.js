import Navbar from '../component/Navbar';
import Image from 'next/image';
const index = () => {
  return (
    <>
       <Image src="/background.jpeg" alt='Background Image' layout="fill"></Image>
      <Navbar/>
    </>
  )
};
export default index;