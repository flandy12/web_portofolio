import Head from "next/head";

const HomePage = () => {
    return (
        <>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        {/* <link href="https://fonts.googleapis.com/css2?family=Ramaraja&display=swap" rel="stylesheet"/> */}
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Ramaraja&display=swap" rel="stylesheet"></link>
        </Head>

        <header class="p-6 flex justify-between items-center  bg-black text-white">
           <div class="mx-auto container">
           <nav class="flex space-x-6">
            <a href="#" class=" hover:text-gray-800">About Me</a>
            <a href="#" class=" hover:text-gray-800">Books</a>
            <a href="#" class=" hover:text-gray-800">Blog</a>
            <a href="#" class=" hover:text-gray-800">Press</a>
            <a href="#" class=" hover:text-gray-800">Contacts</a>
            </nav>
            <div class="flex space-x-4">
            <a href="#" class=" hover:text-gray-800"><i class="fab fa-twitter"></i></a>
            <a href="#" class=" hover:text-gray-800"><i class="fab fa-facebook"></i></a>
            <a href="#" class=" hover:text-gray-800"><i class="fab fa-youtube"></i></a>
            </div>
           </div>
        </header>

        <div >
        
            <div className="container mx-auto">
                <section class="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12 py-20">
                <div class="text-center lg:text-left lg:w-1/2">
                    <h1 class="text-4xl font-bold bebas-neue-regular text-lime-400">
                    Hello, I'm <span class="">Flandy Rockyliano M</span>
                    </h1>
                    <p class="mt-4 ">
                    Welcome to my website. Here you'll find information about all my books and links to all my social media.
                    </p>
                
                </div>
                <div class="lg:w-1/2">
                    <img src="/images/profile.jpg" alt="Profile" class="rounded-full w-80 mx-auto"/>
                </div>
                </section>

                <section class="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                    <img src="/images/asset-image.png" alt="Coding" class="rounded-lg"/>
                </div>
                <div>
                    <h2 class="text-4xl font-bold bebas-neue-regular">I'm a Frontend Developer</h2>
                    <p class="mt-4 ">
                    Saya bekerja di salah satu perusahaan di bidang kontraktor, event organizer dan startup. Saya juga telah bekerja selama 3 tahun.
                    </p>
                    <p class="mt-2 ">
                    Sebagai Frontend Developer, saya sudah memulai dengan 1.5 tahun, menggunakan framework Laravel dan React.js sebagai frontendnya.
                    </p>
                    <a href="#" class="mt-6 inline-block px-6 py-2 bg-lime-500 text-black rounded hover:bg-lime-600">My Latest Book</a>
                </div>
                </section>
                
                <section class="mt-16 relative ">
                
                <div class="grid grid-cols-3 justify-items-center">
                        <div class="border-r-gray-100 bordr">
                            <h2 class="text-4xl font-bold bebas-neue-regular text-lime-400">Experience</h2>
                            <p class="mt-4 ">
                                My books are often featured in popular magazines and journals. Receiving feedback from professionals is extremely important for me.
                            </p>
                        </div>
                        <div class="mt-8 grid grid-cols-1 gap-8 border-l-4 border-l-gray-100 ps-5">
                            <div>
                            <h3 class="font-semibold text-lime-400 text-xl">2021</h3>
                            <p class="">Handling Networking & Maintenance Device In Company</p>
                            </div>
                            <div>
                            <h3 class="font-semibold text-lime-400 text-xl">2022 - 2023</h3>
                            <p class="">Handling Networking, Maintenance & Website Frontend</p>
                            </div>
                            <div>
                            <h3 class="font-semibold text-lime-400 text-xl">2024</h3>
                            <p class="">Handling Website Frontend & Backend Projects</p>
                            </div>
                        </div>
                        <div className="h-[500px]">
                            <img src="/images/asset-image-2.png" className="h-full" />
                        </div>
                </div>
                
                </section>

            </div>


            <section class="mt-16 py-8  bg-black">
            <div class="mx-auto container">
                <div class="grid grid-cols-2 align-items-center place-items-center">
                <div class="flex items-center flex-col px-10 text-center">
                    <h2 class="text-4xl font-bold ">Certificate</h2>
                    <p class="mt-4 ">
                        I write about marketing, branding, and personal experiences in internet marketing and communications.
                    </p>
                </div>
                <div class="grid grid-cols-2 gap-8">
                    <div class="text-center">
                    <img src="/images/image-asset.jpg" alt="Book 1" class="rounded shadow"/>
                    <h3 class="mt-4 text-gray-300 font-semibold">"How to Walk Away"</h3>
                    
                    </div>
                    <div class="text-center">
                    <img src="/images/asset-image-3.png" alt="Book 2" class="rounded shadow"/>
                    <h3 class="mt-4 text-gray-300 font-semibold">"The World's Game"</h3>
                    
                    </div>
                    <div class="text-center">
                    <img src="/images/asset-image-4.png" alt="Book 3" class="rounded shadow"/>
                    <h3 class="mt-4 text-gray-300 font-semibold">"Digital Branding"</h3>
                    
                    </div>
                    <div class="text-center">
                    <img src="/images/asset-image-5.png" alt="Book 4" class="rounded shadow" />
                    <h3 class="mt-4 text-gray-300 font-semibold">"Learn to be Yourself"</h3>
                    
                    </div>
                </div>
                </div>
            </div>
            </section>
            <section>
                <div class="container mx-auto py-20">
                <div class="text-center">
                    <div class="bg-lime-500 w-fit px-10 py-0 rounded mx-auto" >
                        <h2 class="text-4xl font-bold text-black">Project</h2>
                    </div>
                    <p class="mt-4 ">
                        I write about marketing, branding, and personal experiences in internet marketing and communications.
                    </p>
                </div>
                <div class="mt-8 grid grid-cols-4 gap-8">
                    
                    <div class="text-center">
                    <div class="bg-black">
                    <img src="/images/image-asset.jpg" alt="Book 1" class="rounded shadow hover:opacity-30"/>
                    </div>
                    <h3 class="mt-4 text-lime-500 font-semibold">"How to Walk Away"</h3>
                    <a href="#" class="text-grey-500 hover:underline">More Info</a>
                    </div>
                    <div class="text-center">
                    <div class="bg-black">
                    <img src="/images/asset-image-3.png" alt="Book 1" class="rounded shadow hover:opacity-30"/>
                    </div>
                    <h3 class="mt-4 text-lime-500 font-semibold">"The World's Game"</h3>
                    <a href="#" class="text-grey-500 hover:underline">More Info</a>
                    </div>
                    <div class="text-center">
                    <div class="bg-black">
                    <img src="/images/asset-image-4.png" alt="Book 1" class="rounded shadow hover:opacity-30"/>
                    </div>
                    
                    <h3 class="mt-4 text-lime-500 font-semibold">"Digital Branding"</h3>
                    <a href="#" class="text-grey-500 hover:underline">More Info</a>
                    </div>
                    <div class="text-center">
                    <div class="bg-black">
                    <img src="/images/asset-image-5.png" alt="Book 1" class="rounded shadow hover:opacity-30"/>
                    </div>
                    <h3 class="mt-4 text-lime-500 font-semibold">"Learn to be Yourself"</h3>
                    <a href="#" class="text-grey-500 hover:underline">More Info</a>
                    </div>
                </div>
               </div>
            </section>

            <section>
                <div class="container mx-auto py-20">
                <div class="text-left">
                    <div class="bg-lime-500 w-fit px-10 py-0 rounded" >
                        <h2 class="text-4xl font-bold text-black">Contact</h2>
                    </div>
                </div>
                <div class="mt-8 grid grid-cols-4 gap-8">
                    
                    <div class="text-center">
                    <div class="bg-black">
                    <img src="/images/image-asset.jpg" alt="Book 1" class="rounded shadow hover:opacity-30"/>
                    </div>
                    <h3 class="mt-4 text-lime-500 font-semibold">"How to Walk Away"</h3>
                    <a href="#" class="text-grey-500 hover:underline">More Info</a>
                    </div>
                    <div class="text-center">
                    <div class="bg-black">
                    <img src="/images/asset-image-3.png" alt="Book 1" class="rounded shadow hover:opacity-30"/>
                    </div>
                    <h3 class="mt-4 text-lime-500 font-semibold">"The World's Game"</h3>
                    <a href="#" class="text-grey-500 hover:underline">More Info</a>
                    </div>
                    <div class="text-center">
                    <div class="bg-black">
                    <img src="/images/asset-image-4.png" alt="Book 1" class="rounded shadow hover:opacity-30"/>
                    </div>
                    
                    <h3 class="mt-4 text-lime-500 font-semibold">"Digital Branding"</h3>
                    <a href="#" class="text-grey-500 hover:underline">More Info</a>
                    </div>
                    <div class="text-center">
                    <div class="bg-black">
                    <img src="/images/asset-image-5.png" alt="Book 1" class="rounded shadow hover:opacity-30"/>
                    </div>
                    <h3 class="mt-4 text-lime-500 font-semibold">"Learn to be Yourself"</h3>
                    <a href="#" class="text-grey-500 hover:underline">More Info</a>
                    </div>
                </div>
               </div>
            </section>

        </div>
        </>
    )
}

export default HomePage;