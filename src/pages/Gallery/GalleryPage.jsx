import React from 'react'

import intro from '../../assets/screenshots/1intro.png'
import prefabs from '../../assets/screenshots/2prefabs.png'
import save from '../../assets/screenshots/3save.png'
import simulator from '../../assets/screenshots/4simulator.png'
import session from '../../assets/screenshots/5session.png'
import share from '../../assets/screenshots/6share.png'
import download from '../../assets/screenshots/7download.png'


export default function GalleryPage() {
  return (
    <div className='flex flex-col items-center pb-16'>
      <div className='text-center text-2xl md:grid md:grid-cols-2 md:gap-8 sm:text-4xl pt-8 sm:pt-16 font-bold [&_img]:w-full mx-8 max-w-[400px] md:max-w-[640px] space-y-8 sm:space-y-16 md:space-y-0 [&_img]:rounded-xl'>
        <img src={intro}/>
        <img src={prefabs}/>
        <img src={save}/>
        <img src={simulator}/>
        <img src={session}/>
        <img src={share}/>
        <img src={download}/>
      </div>
    </div>
  )
}
