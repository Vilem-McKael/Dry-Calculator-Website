import React from 'react'
import dryCalcLogo from '../../assets/dryCalc.png'


export default function LandingPage() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center mt-24'>
            <img src={dryCalcLogo} className='w-[252px] h-[252px] md:w-[400px] md:h-[400px] rounded-[25px] md:rounded-[40px] border border-gray-400 drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]'/>
            <div className='px-8 sm:px-20 max-w-[800px] text-start'>
              <h1 className='text-2xl sm:text-4xl text-center font-bold my-4 mt-8'>Dry Calculator</h1>
              <h1 className='text-ivory mt-8 mb-12'>
                There's something special about going exceptionally dry on a drop. At a certain point, many learn to wear their misfortune like a badge of honor - except, well, there's no badge. That's where Dry Calculator comes in.
              </h1>

              <h2 className='mb-8'>
                Whether you're going dry or getting lucky, Dry Calculator has everything you need to measure your luck against the average. Are you dozens of hours deep into a grind, with nothing to show for it but sweat and tears? Or conversely, did you manage to get lucky on a 1kc drop, and want your non-gaming partner to understand just how insane that is? Dry Calculator was built with Old School Runescape players in mind, while remaining a valuable tool for other games with similar reward mechanics, e.g. Runescape 3, Terraria, World of Warcraft, & Warframe.
              </h2>

              <h2 className='mb-2'>Features:</h2>

              <ul className=' list-disc [&_li]:ml-4 space-y-1 mb-8'>
                <li><span className='font-bold'>Robust Probability Calculator:</span> get probability stats for up to 30 individual drops, combined into an overall luck score.</li>
                <li><span className='font-bold'>OSRS Prefabs:</span> A comprehensive list of prefab calculators made just for Old School Runescape.</li>
                <li><span className='font-bold'>Track Progress:</span> Save, load, and create new calculators to track luck across multiple bosses or encounters.</li>
                <li><span className='font-bold'>Show It Off:</span> Shareable cards for individual drop probabilities and for the overall calculator.</li>
                <li><span className='font-bold'>Session View:</span> Easily increment your tracked drops and attempt count while playing.</li>
                <li><span className='font-bold'>Simulator View:</span> Roll drops on a drop table over a chosen number of attempts, at variable speeds - surprisingly addicting.</li>
              </ul>

              <h2 className='mb-16'>Don't get lost in the ambiguity of your RNG - find out exactly how lucky or unlucky you are, with Dry Calculator.</h2>
            </div>
        </div>
    </div>
  )
}
