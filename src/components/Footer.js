import React from 'react'
import Image from 'next/image'

import logoWhite from "../../public/assets/pictures/logoWhite.svg"
import facebook from "../../public/assets/pictures/facebook.svg"
import x from "../../public/assets/pictures/x.svg"
import mail from "../../public/assets/pictures/mail.svg"
import tel from "../../public/assets/pictures/tel.svg"
import instagram from "../../public/assets/pictures/instagram.svg"



export default function Footer() {


return (
    <main className='flex justify-center bg-light-primary'>

    
    <div className='w-full flex flex-col justify-center items-center gap-12 lg:px-52 py-6 bg-light-primary max-w-[1440px]'>
        <Image className='lg:self-start' src={logoWhite} alt="logo mon toubib" />

        <div className='w-full flex flex-col gap-11 lg:flex-row justify-between'>

            <div className='flex flex-col gap-4 justify-center items-center lg:items-stretch'>
                <span className='text-title-medium text-light-primary-container font-roboto font-medium'>{'links.useful'}</span>
                <ul className='flex flex-col gap-3 items-center justify-center lg:items-stretch'>
                    <li className='text-body-large text-light-on-primary font-roboto font-normal'>{'links.policy'}</li>
                    <li className='text-body-large text-light-on-primary font-roboto font-normal'>{'links.terms'}</li>
                    <li className='text-body-large text-light-on-primary font-roboto font-normal'>{'links.legal'}</li>
                </ul>                
            </div> 

            <div className='flex flex-col gap-4 items-center lg:items-stretch'>
                <span className='text-title-medium text-light-primary-container font-roboto font-medium'>{'contact'}</span>
                <div className='flex gap-2 items-center'>
                    <Image src={mail} alt="icone mail" />
                    <span className='text-body-large font-roboto font-normal text-light-on-primary'>info@montoubib.com</span>                    
                </div>

                <div className='flex gap-2 items-center lg:items-stretch'>
                    <Image src={tel} alt="icone telephone" />
                    <span className='text-body-large font-roboto font-normal text-light-on-primary'>+212 654 987 412</span>
                </div>
            </div> 

            <div className='flex flex-col gap-4 items-center lg:items-stretch'>
                <span className='text-title-medium text-light-primary-container font-roboto font-medium'>{'social'}</span>
                <div className='flex gap-4 items-center lg:items-stretch'>
                    <Image src={facebook} alt="lien vers facebook" />
                    <Image src={instagram} alt="lien vers instagram" />
                    <Image src={x} alt="lien vers X" /> 
                </div>                              
            </div> 


        </div>    

        <span className='lg:self-start text-body-medium text-light-on-primary font-roboto font-normal'>{'trademark'}</span>         
    </div>
    </main>
  )
}
