import Head from "next/head";
import Link from "next/link";
const LayoutsPage = ({children}) => {
    return (
        <>  
            <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Ramaraja&display=swap" rel="stylesheet"></link>
            <title>Portofolio Flandy Rockyliano Mamun</title>
            </Head>

            <header className="p-6 flex justify-between items-center  bg-black text-white">
                <div className="mx-auto container ">
                    <nav className="flex space-x-6">
                        <Link href="/" className=" hover:text-gray-800">MY PROFILE</Link> 
                    </nav>
                    <div className="flex space-x-4">
                        <a href="#" className=" hover:text-gray-800"><i className="fab fa-twitter"></i></a>
                        <a href="#" className=" hover:text-gray-800"><i className="fab fa-facebook"></i></a>
                        <a href="#" className=" hover:text-gray-800"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </header>

            {children}
        </>
    )
}

export default LayoutsPage;