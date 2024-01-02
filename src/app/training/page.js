"use client"
import { Button, SimpleGrid } from "@chakra-ui/react"
import Image from "next/image"
import { BsArrowUpRight, BsPatchCheckFill, BsPersonBadgeFill } from "react-icons/bs"
export default function Training() {
    function Go(link) {
          location.href = '/training' + link;
    }
    
    return (
    <>
    <h1 className="m-12 font-bold text-3xl">Training Session Portal</h1>
    <div className="grid grid-flow-col auto-cols-ma gap-100 lg:p-32 p-6">
        <SimpleGrid columns={[1, 1, 4]} spacingX='20px' spacingY='20px'>
        {teams.map((qE, index) => (
            <div className='border border-black border-2 p-6' key={index}>
                <div className="bg-black p-3">
                    <Image src={qE.imgSrc} width={1000} height={1000} alt='banner' className='h-[200px]'/>
                </div>
                <h1 className={`text-black text-3xl text-left mt-6 mb-3`}>{qE.name}</h1>
                <div className={`text-black text-xl text-left flex flex-row`}><BsPersonBadgeFill/>: {qE.inst}<BsPatchCheckFill color='#0047ab' className='ml-1'/></div>
                <Button onClick={() =>Go(qE.link)} className="bg-black text-xl mt-12 border-2 border-black rounded-none text-white font-medium hover:bg-white hover:text-black p-6">Go to Dashboard<BsArrowUpRight className='ml-3'/></Button>
            </div>
        ))}
        </SimpleGrid>
      </div>
    </>  
    )
}

const teams=[
    {
        name: 'Frontend Website',
        link: '/fw',
        inst: 'Poonyawatt Klumnaim',
        imgSrc: 'fwLogo.svg',
        color: ''
    },
    {
        name: 'Frontend Mobile',
        link: '/fa',
        inst: 'Thanachot Onlamoon',
        imgSrc: 'faLogo.svg',
        color: ''
    },
    {
        name: 'Backend',
        link: '/bn',
        inst: 'Sanhanut Kungwolngan',
        imgSrc: 'bnLogo.svg',
        color: ''
    }
]