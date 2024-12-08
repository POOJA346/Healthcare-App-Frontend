import React from 'react'

const Contact = () => {
  return (
    <section className='my-10'>
      <div className="px-4 mx-auto max-w-screen-md bg-cardColor p-5 rounded-lg">
        <h2 className="heading text-center text-white">
          Contact Us
        </h2>
        <p className=" lg:mb-5 font-light text-center text__para text-white">
        Whether you have questions about our services, need support, or want to give feedback, our team is ready to assist you. Reach out to us through any of the channels below, and we will get back to you as soon as possible.
        </p>
        <form action="#" className='space-y-3'>
          <div>
            <label htmlFor="email" className='form__label text-white'>
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder='example@gmail.com'
              className='form__input mt-1'
              />
          </div>
          <div>
            <label htmlFor="subject" className='form__label text-white'>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder='write the subject or title'
              className='form__input mt-1'
              />
          </div>
          <div className='sm:col-span-2'>
            <label htmlFor="message" className='form__label text-white'>
              Your Message
            </label>
            <textarea
              rows='6'
              id="message"
              placeholder='your message here'
              className='form__input mt-1'
              />
          </div>
          <button type="submit" className='btn rounded sm:w-fit'>
            Submit
          </button>
        </form>
      </div>
    </section>
)
}

export default Contact