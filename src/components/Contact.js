import React from "react";
import { FaPhone } from "react-icons/fa";

export default function Contact() {
    return (
        <section className="sm:p-20 p-5 bg-[#0a192f]" id="contact">
            <div className="sm:container mx-auto">
                <h2 className="text-center text-4xl font-bold pb-10">Contact</h2>
                <div className="w-full sm:flex">
                    <div className="sm:w-1/2 w-full">
                        <div className="mb-5">
                        
<div className="flex flex-row items-center space-x-2 text-blue-600 ">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

                            <p className="text-xl text-gray-500">
                            Address
                            </p>                   
                        </div>
                          
                            <p className="text-gray-400">Addis Ababa, Ethiopia</p>
                        </div>
                        <div className="mb-5">
                           
                            <div className="flex flex-row items-center space-x-2 text-blue-600 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

                            <p className="text-xl text-gray-500">
                            Email
                            </p>                   
                        </div>
                            <a className="text-gray-400" href="mailto:Davegbhonesty@gmail.com">Davegbhonesty@gmail.com</a>
                        </div>
                        <div className="flex flex-row items-center space-x-2 text-blue-600 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 3.75 18 6m0 0 2.25 2.25M18 6l2.25-2.25M18 6l-2.25 2.25m1.5 13.5c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                            </svg>
                            <p className="text-gray-500 font-light text-xl">
                                Phone
                            </p>                   
                        </div>
                        <a className="text-gray-400" href="+251925401353">+251925401353</a>
                       
                    </div>
                    <div className="sm:w-1/2 w-full bg-gray-50 p-10 rounded-md">
                        <form action="#">
                            <div className="mt-5 grid grid-cols-1 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                                    <input type="text" name="username" id="username" autoComplete="username" className="block w-full outline-1 border border-1 flex-1 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Defar Gobeze" />
                                </div>
                            </div>
                            <div className="mt-5 grid grid-cols-1  gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900">Subject</label>
                                    <input type="text" name="subject" id="subject" autoComplete="subject" className="block w-full outline-1 border border-1 flex-1 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Hiring" />
                                </div>
                            </div>
                            <div className="mt-5 grid grid-cols-1  gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">Message</label>
                                    <textarea name="message" id="message" autoComplete="message" className="block w-full outline-1 border border-1 flex-1 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Message" defaultValue={""} />
                                </div>
                            </div>
                            <div className="mt-5 grid grid-cols-1 gap-y-8 sm:grid-cols-6">
                                <a href="#" className="bg-gray-200 mx-auto w-32 text-center rounded-md p-2 border border-1 border-gray-100 hover:bg-white">Submit</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
}