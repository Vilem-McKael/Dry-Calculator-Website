import React, { useState } from 'react'
import { NetlifyForm, Honeypot } from 'react-netlify-forms'
// import Footer from '../../components/Footer/Footer'
import 'dotenv/config'

export default function SupportPage() {

  const [hasSubmitted, setHasSubmitted] = useState(false)

  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })

  const handleChange = (event) => {
    setFormDetails({...formDetails, [event.target.name]: event.target.value})
  }

  return (
    <div className='w-full sm:h-full flex flex-col items-center'>
      <div className='text-center text-2xl sm:text-4xl mt-16 font-bold'>
        Contact
      </div>
      <div className='mx-8 md:max-w-full md:mx-16 mt-4 text-sm sm:text-base mobileLandscape:w-[400px] max-w-[400px] text-justify sm:text-center'>
        {hasSubmitted ? "Thank you for contacting me, and for helping Dry Calculator be the best application it can be. I will get back to you as soon as I can!" : "Get in touch with the developer regarding any bugs, crashes, questions, or feature suggestions!"}
      </div>


      
      <div className='h-full w-full flex-col items-center'>
      {!hasSubmitted && <form className='flex flex-col items-center justify-center py-12 w-full px-8' action={`${process.env.FORMURL}`} name='support' method='POST' data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <div className='flex flex-col items-start w-full max-w-[400px] [&_*]:w-full [&_label]:mb-1 space-y-4'>
          <div className='flex flex-col'>
            <label >
              Name
            </label>
            <input type='text' name='name' className='px-2 py-1 rounded-sm'>

            </input>
          </div>
          <div className='flex flex-col'>
            <label>
              E-Mail
            </label>
            <input type='text' name='email' className='px-2 py-1 rounded-sm'>

            </input>
          </div>

        <div className='flex flex-col'>
          <label className='mb-[-2]'>
            Please leave your message below :
          </label>
        

          <textarea name='message' className='px-2 py-1 rounded-sm min-h-28'>
          </textarea>
        </div>
        
        <div className=''>
          <button type='submit' className='h-[40px] bg-gradient-to-r from-[#FFBA10] to-[#FF7B00] text-[#1A1A1D] mt-2 p-2 rounded-lg border  transform hover:scale-110 duration-75'>
            <i className=''></i>Send
          </button>
        </div>

        </div>

        <div className='pt-16'>
          Or, feel free to send an e-mail to <a href='mailto:vilemmckael.dev@gmail.com' className='text-blue-500'>vilemmckael.dev@gmail.com</a>
        </div>
        
      </form>}
      
      </div>
    </div>
  )
}
