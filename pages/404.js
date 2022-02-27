
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Navbar from '../component/Navbar';
const ErrorPage = () => {
    const router = useRouter();
     const handleInput = () => {
        router.push("/");
    }
    useEffect(() => {
        setTimeout(() => {
            router.push("/");  
        }, 5000);
        
    }, [])
    
    return (
        <>
            <Navbar/>
            <h1>404|Error Found</h1>
            {/* <Link href="/">
    <a>onclick ={()=>Router.push("/")}</a>
    </Link> */}

                <a onClick={handleInput}><button>Go Back</button></a>
        </>
    )
}
export default ErrorPage;