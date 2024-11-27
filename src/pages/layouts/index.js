import Head from "next/head";
const LayoutsPage = ({children}) => {
    return (
        <>  
            <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            {/* <link href="https://fonts.googleapis.com/css2?family=Ramaraja&display=swap" rel="stylesheet"/> */}
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Ramaraja&display=swap" rel="stylesheet"></link>
            <title>Porotfolio Flandy Rockyliano Mamun</title>
            </Head>

            <header class="p-6 flex justify-between items-center  bg-black text-white">
                <div class="mx-auto container ">
                    <nav class="flex space-x-6">
                        <a href="/" class=" hover:text-gray-800">MY PROFILE</a> 
                    </nav>
                    <div class="flex space-x-4">
                        <a href="#" class=" hover:text-gray-800"><i class="fab fa-twitter"></i></a>
                        <a href="#" class=" hover:text-gray-800"><i class="fab fa-facebook"></i></a>
                        <a href="#" class=" hover:text-gray-800"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </header>

            {children}
        </>
    )
}

export default LayoutsPage;