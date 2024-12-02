import React from 'react'

const Contacts = () => {
  return (
    <section
    className='
    max-w-max w-full mx-auto
    padding my-32
    grid grid-cols-2'>

        <div className="
        w-full
        relative">

            <div className="
            w-full aspect-square bg-black/50
            absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
            rounded-lg"/>

            <img 
            src="./myself.jpg"
            className='
            w-full aspect-square object-cover 
            rounded-lg
            transform scale-90 rotate-12 saturate-[25%]
            hover:scale-100 hover:rotate-0 hover:saturate-100
            transition-all duration-300
            '
            />

            <h3 
            className='
            dynamic-subheading font-accentTwo
            absolute -bottom-[35px] -left-[20px]'>
                Contact me!
            </h3>

        </div>

    </section>
  )
}

export default Contacts