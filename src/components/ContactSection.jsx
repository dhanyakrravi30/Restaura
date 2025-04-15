import React from 'react'
import { CONTACT } from "../constants"

const ContactSection = () => {
  return (
    <section className="container mx-auto py-16 px-4" id="contact">
      <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl text-rose-500">
        Contact Us
      </h2>
      
      <div className="text-white">
        {CONTACT.map((detail) => (
          <p
            key={detail.key}
            className="my-6 text-center text-xl tracking-tight lg:text-2xl"
          >
            {detail.value}
          </p>
        ))}
      </div>
    </section>
  )
}

export default ContactSection
