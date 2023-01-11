import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

function ImgSlider() {
    const images = ["/team.jpg", "/wc2022.jpg", "DSC00009.jpg"]
    const length = images.length
    const [imageNum, setImageNum] = useState(0) 
    
    const nextImage = ()=>{
        if(imageNum == length-1){
            setImageNum(0)
        }
        else{
            setImageNum(imageNum + 1)
        }
    }
    const prevImage = ()=>{
        if(imageNum == 0){
            setImageNum(length-1)
        }
        else{
            setImageNum(imageNum - 1)
        }
    }

    return (
        <div className='2xl:ml-96 2xl:mr-96 h-128 relative overflow-hidden'>
            <ChevronLeftIcon onClick={nextImage} className="w-10 text-white absolute mt-20"></ChevronLeftIcon>
            <ChevronRightIcon onClick={prevImage} className="w-10 text-white absolute mr-20" ></ChevronRightIcon>
            <img src={images[imageNum]}  alt="" className='h-auto w-auto'></img>
        
        </div>
    )
}

export default ImgSlider