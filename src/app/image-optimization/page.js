import Image from 'next/image'
import React from 'react'
// import Img from '/public/next.svg';

const ImageOptimization = () => {
  // console.log(Img);
  return (
    <>
       <h2>Image Optimization In Next JS</h2>
       {/* <Image 
         src={Img}
         alt='Next JS Image'
         height={300}
         width={500}
         />
         <img src={Img} alt='Img'/> */}
       <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTz-6p_GFBURO1LCNqfSKZ9ACpNtKurGE5cKblmMfdyQ&s=10"
          alt='Pexel Image'
          height={400}
          width={400}
       />
    </>
  )
}

export default ImageOptimization