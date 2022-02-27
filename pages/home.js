
import Navbar from "../component/Navbar";
import Head from 'next/head';
const home = () => {
  return (
  <>
    <Head>
      <title>Home Page</title>
      <meta charset="UTF-8" />
      <meta name="description" content="Free Web tutorials" />
      <meta name="keywords" content="HTML, CSS, JavaScript" />
      <meta name="author" content="John Doe" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <Navbar />
    <h1>Home Page</h1>

  </>
  )
};
export default home;