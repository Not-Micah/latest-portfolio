import { socialLinks } from "../data"

const Contacts = () => {
  return (
    <section
    id="contact"
    className='
    z-20
    max-w-max w-full mx-auto
    padding my-32
    grid grid-cols-2 gap-x-16
    max-[1100px]:grid-cols-1 max-[1100px]:gap-y-12'>

        <div className="
        z-20
        max-w-[600px]
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
            dynamic-subheading font-accentTwo text-nowrap
            max-[400px]:text-3xl
            absolute -bottom-[35px] left-1/2 transform -translate-x-1/2
            max-[1100px]:-bottom-[20px]'>
                Contact me!
            </h3>

        </div>

        <div className="
        z-20
        max-w-[600px] aspect-square
        flex flex-col gap-y-12
        max-[1100px]:mt-12">
          <p className='dynamic-text'>
            I&apos;m always open to new opportunities, whether it&apos;s <span className='italic'>internships, start-ups, commissions, or other projects</span>. Feel free to reach out through any of the following!
          </p>
          <div className="flex flex-col gap-y-3">
            {socialLinks.map((item, index) => (
              <a 
              key={index}
              href={item.link}
              className="
              flex justify-between items-center
              rounded-lg px-4 py-1
              group hover:bg-white/50">
                <div className="flex justify-start items-center gap-x-4">
                  {item.icon}
                  <p className="dynamic-label">{item.title}</p>
                </div>
                {
                  item.favorite && (
                    <img src="/star.svg" className="
                    w-[20px] 
                    group-hover:w-[25px] group-hover:rotate-12 
                    transition-all duration-200" />
                  )
                }
              </a>
            ))}
          </div>
        </div>

    </section>
  )
}

export default Contacts