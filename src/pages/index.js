import { useState } from "react";
import LayoutsPage from "./layouts";
import Link from "next/link";

const HomePage = () => {

    const [title_modal, setTitleModal] = useState('');
    const [show_modal , setModalShow] = useState(false);
    const [image_modal, setImageModal] = useState('');

    const showModalAction = (e) => {
        // alert(e.target.getAttribut('title'));
        let src = e.target.getAttribute('src');
        let title = e.target.getAttribute('title');
        setImageModal(src);
        setTitleModal(title);
        if(show_modal == true) {
            setModalShow(false);
        } else {
            setModalShow(true);
        }
    }


    return (
        <LayoutsPage>

        <div >
        
            <div className="container mx-auto">
                <section className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12 py-20">
                    <div className="text-center lg:text-left lg:w-1/2 px-5">
                        <h1 className="text-6xl xl:text-9xl lg:text-9xl font-bold bebas-neue-regular text-lime-400">
                            Fronted Developer
                        </h1>
                    </div>
                <div className="lg:w-1/2">
                    <img src="/images/profile-portofolio-2.jpg" alt="Profile" className="mx-auto"/>
                </div>
                </section>

                <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-2">
                <div className="w-full h-full">
                    <img src="/images/profile-portofolio.jpg" alt="Coding" className="w-full h-full object-cover"/>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Halo, nama saya <span className="text-lime-500">Flandy Rockyliano Mamun</span></h1>
                <p className="text-gray-700 mb-6">
                    Saya seorang <span className="font-semibold">Website Programmer</span> dengan pengalaman lebih dari <span className="font-semibold">3</span> tahun dalam pengembangan aplikasi web. 
                    Saya memiliki spesialisasi dalam membangun aplikasi yang cepat, responsif, dan sesuai dengan kebutuhan klien, baik dari sisi frontend maupun backend.
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Pengalaman Kerja</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                        <span className="font-semibold ">E-commerce:</span> Mengembangkan fitur-fitur seperti keranjang belanja, checkout, dan integrasi pembayaran menggunakan API.
                    </li>
                    <li>
                        <span className="font-semibold ">Dashboard Admin:</span> Membuat sistem manajemen data interaktif untuk admin, termasuk statistik dan laporan real-time.
                    </li>
                    <li>
                        <span className="font-semibold ">Sistem Autentikasi:</span> Mengimplementasikan login multi-peran, seperti admin, user, atau promotor.
                    </li>
                    <li>
                        <span className="font-semibold ">Optimasi Website:</span> Menggunakan teknik SEO, kompresi, dan caching untuk meningkatkan performa situs.
                    </li>
                    </ul>
                </section>

                </div>

                </section>

                <section>

                    <div id="static-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" className={`${show_modal == false ? 'hidden ' : ''}overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex`}>
                        <div className="relative p-4 w-full max-w-2xl max-h-full">
                          
                            <div className="relative bg-white rounded-lg shadow">
                               
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-gray-900 ">
                                        {title_modal}
                                    </h3>
                                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="static-modal" onClick={showModalAction}>
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                               
                                <div className="p-4 md:p-5 space-y-4">
                                     <img src={image_modal} alt="Book 2" className="rounded shadow w-full h-auto"/>
                                </div>
                        
                            </div>
                        </div>
                    </div>

                </section>
                
                <section className="mt-16 relative container mx-auto">
                
                <div className="grid xl:grid-cols-3 lg:grid-cols-3 xl:gap-5 lg:gap-5 md:gap-0 sm:gap-0 justify-items-center lg:grid md:grid md:grid-cols1 sm:flex sm:flex-col px-5 space-y-5">
                        <div className="border-r-gray-100 bordr">
                            <h2 className="text-4xl font-bold bebas-neue-regular text-lime-400">Experience</h2>
                            <p className="mt-4 ">
                                Perjalanan Saya Menjadi Developer Website
                                Dari hobi hingga profesi, perjalanan saya sebagai seorang developer website adalah proses yang penuh tantangan dan pembelajaran.
                            </p>

                            <p className="mt-4 ">
                                Sebelum saya terjun di dunia fronted saya bekerja di bagian IT SUPPORT. Perusahaan <strong >CK HELMER</strong> <br/> Perusahaan ini bergerak di bidang Booth Kontruktor & Event Organizer.
                            </p>

                        </div>
                        <div className="mt-8 grid grid-cols-1 gap-8 border-l-4 border-l-gray-100 ps-5 w-full">
                            <div>
                            <h3 className="font-semibold text-lime-400 text-xl">2021</h3>

                            <p className="mt-2">- IT Support</p>
                            </div>
                            <div>
                            <h3 className="font-semibold text-lime-400 text-xl">2022 - 2023</h3>
                            <div className="space-y-2 mt-2">
                                <p>
                                - Project Home Credit (Fronted Developer) <br/>
                                </p>
                                <p>
                                - Project Ticketing Soulofjakarta (Fronted Developer) <br/>
                                </p>
                                <p>
                                - Project Soulofjakarta Article (Fronted Developer) <br/>
                                </p>
                            </div>
                           
                            </div>
                            <div>
                            <h3 className="font-semibold text-lime-400 text-xl">2024</h3>
                            <div className="space-y-2 mt-2">
                            <p>
                                - Project Ticketing Soulofjakarta (Fronted Developer) <br/>
                                </p>
                                <p>
                                - Project Soulofjakarta Article (Fronted Developer) <br/>
                                </p>
                                <p>
                                - Project Website Uniqlo Careers (Fronted Developer) <br/>
                                </p>
                                <p>
                                - Project Website Megacareerexpo (Fronted Developer & Backend) <br/>
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="h-[500px] w-full">
                            <img src="/images/asset-image-2.png" className="h-full w-full object-cover" />
                        </div>
                </div>
                
                </section>

                <section className="my-8 p-5 xl:p-20 lg:p-20 md:p-10  bg-lime-400 rounded-xl">
                    <h2 className=" font-bold text-black mb-2 uppercase text-2xl xl:text-3xl sm:text-2xl">Keahlian & Tools</h2>
                    <ul className="list-disc list-inside sm:text-base text-black space-y-2">
                    <li><span className="font-semibold">Frontend:</span> React.js, Vue.js, Tailwind CSS, Next.js</li>
                    <li><span className="font-semibold">Backend:</span> Laravel</li>
                    <li><span className="font-semibold">Database:</span> MySQL, MongoDB</li>
                    <li><span className="font-semibold">DevOps:</span>Apache</li>
                    <li><span className="font-semibold">Version Control:</span> Git, GitHub</li>
                    </ul>
                </section>

            </div>


            <section className="mt-16 py-8 bg-black">
                <div className="mx-auto container">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center place-items-center gap-8 px-5">
                        <div className="flex items-center flex-col px-10 text-center">
                            <h2 className="text-4xl font-bold text-white">Certificate</h2>
                            <p className="mt-4 text-gray-300">
                                I write about marketing, branding, and personal experiences in internet marketing and communications.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            <div className="text-center" onClick={showModalAction} data-img="/images/image-asset.jpg" >
                                <img src="/images/image-asset.jpg" alt="Book 1" className="rounded shadow w-full h-auto" title="How to Walk Away"/>
                                <h3 className="mt-4 text-gray-300 font-semibold">How to Walk Away</h3>
                            </div>
                            <div className="text-center" onClick={showModalAction}>
                                <img src="/images/asset-image-3.png" alt="Book 2" className="rounded shadow w-full h-auto" title="The Worlds Game"/>
                                <h3 className="mt-4 text-gray-300 font-semibold">The Worlds Game</h3>
                            </div>
                            <div className="text-center" onClick={showModalAction}>
                                <img src="/images/asset-image-4.png" alt="Book 3" className="rounded shadow w-full h-auto" title="Digital Branding"/>
                                <h3 className="mt-4 text-gray-300 font-semibold">Digital Branding</h3>
                            </div>
                            <div className="text-center" onClick={showModalAction}>
                                <img src="/images/asset-image-5.png" alt="Book 4" className="rounded shadow w-full h-auto" title="Learn to be Yourself"/>
                                <h3 className="mt-4 text-gray-300 font-semibold">Learn to be Yourself</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto py-20 px-5">
                <div className="text-center">
                    <div className="bg-lime-500 w-fit px-10 py-0 rounded mx-auto" >
                        <h2 className="text-4xl font-bold text-black">Project</h2>
                    </div>
                    <p className="mt-4 ">
                        Berikut adalah project yang telah dibuat
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 md:grid-cols-2 gap-8">

                    <Link href="/project/login">
                        <div className="text-center">
                            <div className="bg-black">
                            <img src="/images/login.png" alt="Book 1" className="rounded shadow hover:opacity-30"/>
                        </div>
                            <h3 className="mt-4 text-lime-500 font-semibold">Login Page</h3>
                        </div>
                    </Link>
                    <Link href="/project/calculator">
                        <div className="text-center">
                        <div className="bg-black">
                        <img src="/images/calculator.png" alt="Book 1" className="rounded shadow hover:opacity-30"/>
                        </div>
                        <h3 className="mt-4 text-lime-500 font-semibold">Calculator Project</h3>
                        </div>
                    </Link>

                    <Link href="https://umc.megacareerexpo.com/">
                        <div className="text-center">
                        <div className="bg-black">
                        <img src="/images/uniqlo.png" alt="Book 1" className="rounded shadow hover:opacity-30 h-full xl:h-[215px] lg:h-[215px] md:h-[215px] object-cover" />
                        </div>
                        <h3 className="mt-4 text-lime-500 font-semibold">Uniqlo Project</h3>
                        </div>
                    </Link>

                    <Link href="/project/snake">
                        <div className="text-center">
                        <div className="bg-black">
                        <img src="/images/snake.png" alt="Book 1" className="rounded shadow hover:opacity-30 h-full xl:h-[215px] lg:h-[215px] md:h-[215px] object-cover" />
                        </div>
                        <h3 className="mt-4 text-lime-500 font-semibold">Snake Project</h3>
                        </div>
                    </Link>

                    <Link href="/project/chart">
                        <div className="text-center">
                        <div className="bg-black">
                        <img src="/images/chart.png" alt="Book 1" className="rounded shadow hover:opacity-30 h-full xl:h-[215px] lg:h-[215px] md:h-[215px] object-cover" />
                        </div>
                        <h3 className="mt-4 text-lime-500 font-semibold">Chat Project</h3>
                        </div>
                    </Link>

                </div>
               </div>
            </section>

      
        </div>
        </LayoutsPage>
    )
}

export default HomePage;