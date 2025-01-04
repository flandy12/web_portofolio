import { useState } from "react";
import LayoutsPage from "./layouts";
import Link from "next/link";

const HomePage = () => {

    const [title_modal, setTitleModal] = useState('');
    const [show_modal , setModalShow] = useState(false);
    const [image_modal, setImageModal] = useState('');
    const [projectAll, setProjectAll] = useState('all');

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


    const onFilter = (e) => {
        let value = e.target.getAttribute('data-target');
        setProjectAll(value);
        console.log(projectAll);
        // let element =  document.querySelectorAll('.project');

        // for (let index = 0; index < element.length; index++) {
        //     const value_element = element[index];

        //     const value_element_spesific = value_element.getAttribute('data-target');

        //     if(value_element_spesific == project) {
        //         console.log(value_element_spesific);
        //     }

        // }
      
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
                            {/* <p className="mt-4 text-gray-300">
                                I write about marketing, branding, and personal experiences in internet marketing and communications.
                            </p> */}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            <div className="text-center" data-img="/images/HTML_SOLOLEARN.jpg" >
                                <Link href="https://www.sololearn.com/certificates/CC-K4PXGPOY" target="_blank">
                                    <img src="/images/HTML_SOLOLEARN.jpg" alt="Book 1" className="rounded shadow w-full h-auto" title="Introduction to HTML"/>
                                    <h3 className="mt-4 text-gray-300 font-semibold">Introduction to HTML
                                    </h3>
                                </Link>
                            </div>
                            <div className="text-center">
                               <Link target="_blank" href="https://www.sololearn.com/certificates/CC-L30ZTQ8K">
                               <img src="/images/JAVASCRIPT_SOLOLEARN.jpg" alt="Book 2" className="rounded shadow w-full h-auto" title="JavaScript Intermediate"/>
                               <h3 className="mt-4 text-gray-300 font-semibold">JavaScript Intermediate</h3>
                               </Link>
                            </div>
                            <div className="text-center">
                               <Link href="https://www.sololearn.com/certificates/CC-BSGUTNGP" target="_blank">
                               <img src="/images/JAVASCRIPT2_SOLOLEARN.jpg" alt="Book 3" className="rounded shadow w-full h-auto" title="Introduction to JavaScript"/>
                               <h3 className="mt-4 text-gray-300 font-semibold">Introduction to JavaScript</h3>
                               </Link>
                            </div>
                            <div className="text-center">
                                <Link href="https://www.sololearn.com/certificates/CC-JJESFYNS" target="_blank">
                                <img src="/images/CSS_SOLOLEARN.jpg" alt="Book 4" className="rounded shadow w-full h-auto" title="Introduction to CSS"/>
                                <h3 className="mt-4 text-gray-300 font-semibold">Introduction to CSS</h3>
                                </Link>
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
                    <div className="flex flex-wrap gap-5 w-fit text-center mx-auto my-5">
                        <button className="bg-lime-500 w-fit px-10 py-0 rounded mx-auto" onClick={onFilter} data-target="all">All</button>
                        <button className="bg-lime-500 w-fit px-10 py-0 rounded mx-auto" onClick={onFilter} data-target="sertifikat">Certificate</button>
                        <button className="bg-lime-500 w-fit px-10 py-0 rounded mx-auto" onClick={onFilter} data-target="project">Project</button>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-8">
                    
                    <div className={`project ${projectAll == 'all' ? 'block' : projectAll != 'project' ? 'hidden' : 'block'} `} data-target="project">
                    <Link href="/project/login">
                        <div className="text-center">
                            <div className="bg-black">
                            <img src="/images/login.png" alt="Book 1" className="rounded shadow hover:opacity-30"/>
                        </div>
                            <h3 className="mt-4 text-lime-500 font-semibold">Login Page</h3>
                        </div>
                    </Link>
                    </div>

                    <div className={`project ${projectAll == 'all' ? 'block' : projectAll != 'project' ? 'hidden' : 'block'}`} data-target="project">
                    <Link href="/project/calculator">
                        <div className="text-center">
                        <div className="bg-black">
                        <img src="/images/calculator.png" alt="Book 1" className="rounded shadow hover:opacity-30"/>
                        </div>
                        <h3 className="mt-4 text-lime-500 font-semibold">Calculator Project</h3>
                        </div>
                    </Link>
                    </div>
                    
                    <div className={`project ${projectAll == 'all' ? 'block' : projectAll != 'project' ? 'hidden' : 'block'}`} data-target="project">
                    <Link href="https://umc.megacareerexpo.com/">
                        <div className="text-center">
                        <div className="bg-black">
                        <img src="/images/uniqlo.png" alt="Book 1" className="rounded shadow hover:opacity-30 h-full xl:h-[215px] lg:h-[215px] md:h-[215px] object-cover" />
                        </div>
                        <h3 className="mt-4 text-lime-500 font-semibold">Uniqlo Project</h3>
                        </div>
                    </Link>
                    </div>
                    
                    <div className={`project ${projectAll == 'all' ? 'block' : projectAll != 'project' ? 'hidden' : 'block'}`} data-target="project">
                    <Link href="/project/snake"> 
                        <div className="text-center">
                        <div className="bg-black">
                        <img src="/images/snake.png" alt="Book 1" className="rounded shadow hover:opacity-30 h-full xl:h-[215px] lg:h-[215px] md:h-[215px] object-cover" />
                        </div>
                        <h3 className="mt-4 text-lime-500 font-semibold">Snake Project</h3>
                        </div>
                    </Link>
                    </div>
                    
                    <div className={`project ${projectAll == 'all' ? 'block' : projectAll != 'project' ? 'hidden' : 'block'}`} data-target="project">
                    <Link href="/project/chart">
                        <div className="text-center">
                        <div className="bg-black">
                        <img src="/images/chart.png" alt="Book 1" className="rounded shadow hover:opacity-30 h-full xl:h-[215px] lg:h-[215px] md:h-[215px] object-cover" />
                        </div>
                        <h3 className="mt-4 text-lime-500 font-semibold">Chat Project</h3>
                        </div>
                    </Link>
                    </div>
                                
                    <div className={`project ${projectAll == 'all' ? 'block' : projectAll != 'project' ? 'hidden' : 'block'}`} data-target="project">
                    <Link href="https://flandy-rockyliano-mamun-05-tple-004.vercel.app" target="_blank" >
                        <div className="text-center">
                        <div className="bg-black">
                        <img src="/images/uts-img.png" alt="Book 1" className="rounded shadow hover:opacity-30 h-full xl:h-[215px] lg:h-[215px] md:h-[215px] object-cover" />
                        </div>
                        <h3 className="mt-4 text-lime-500 font-semibold">UTS Project</h3>
                        </div>
                    </Link>
                    </div>

                    <div className={`project ${projectAll == 'all' ? 'block' : projectAll == 'sertifikat' ? 'block' : 'hidden'}`}  data-target="sertifikat" >
                        <Link href="https://www.sololearn.com/certificates/CC-K4PXGPOY" target="_blank">
                            <img src="/images/HTML_SOLOLEARN.jpg" alt="Book 1" className="rounded shadow w-full h-auto" title="Introduction to HTML"/>
                            <h3 className="mt-4 text-gray-300 font-semibold">Introduction to HTML
                            </h3>
                        </Link>
                    </div>
                    
                    <div className={`project ${projectAll == 'all' ? 'block' : projectAll == 'sertifikat' ? 'block' : 'hidden'}`} data-target="sertifikat" >
                        <Link target="_blank" href="https://www.sololearn.com/certificates/CC-L30ZTQ8K">
                        <img src="/images/JAVASCRIPT_SOLOLEARN.jpg" alt="Book 2" className="rounded shadow w-full h-auto" title="JavaScript Intermediate"/>
                        <h3 className="mt-4 text-gray-300 font-semibold">JavaScript Intermediate</h3>
                        </Link>
                    </div>

                    <div className={`project ${projectAll == 'all' ? 'block' : projectAll == 'sertifikat' ? 'block' : 'hidden'}`} data-target="sertifikat" >
                        <Link href="https://www.sololearn.com/certificates/CC-BSGUTNGP" target="_blank">
                        <img src="/images/JAVASCRIPT2_SOLOLEARN.jpg" alt="Book 3" className="rounded shadow w-full h-auto" title="Introduction to JavaScript"/>
                        <h3 className="mt-4 text-gray-300 font-semibold">Introduction to JavaScript</h3>
                        </Link>
                    </div>

                    <div className={`project ${projectAll == 'all' ? 'block' : projectAll == 'sertifikat' ? 'block' : 'hidden'}`} data-target="sertifikat" >
                        <Link href="https://www.sololearn.com/certificates/CC-JJESFYNS" target="_blank">
                        <img src="/images/CSS_SOLOLEARN.jpg" alt="Book 4" className="rounded shadow w-full h-auto" title="Introduction to CSS"/>
                        <h3 className="mt-4 text-gray-300 font-semibold">Introduction to CSS</h3>
                        </Link>
                    </div>

                </div>

                <div className="py-10">
                    <div className="bg-lime-500 w-fit px-10 py-0 rounded mx-auto" >
                        <h2 className="text-4xl font-bold text-black my-5">Lokasi</h2>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3738166352864!2d106.68896592378186!3d-6.345614212080936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e50078ae00b1%3A0x81a60674ba49b072!2sUnpam%20Viktor!5e0!3m2!1sen!2sid!4v1735982310458!5m2!1sen!2sid" className="w-full h-96" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

               </div>
            </section>

      
        </div>
        </LayoutsPage>
    )
}

export default HomePage;