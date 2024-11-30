import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const Hero = () => {
  return (
    <section
    className='
    padding
    max-w-max w-full mx-auto
    h-[100vh]
    relative
    flex flex-col justify-center 
    gap-y-24 max-lg:gap-y-12'>
        <h3 className='dynamic-heading'>
            Micah Tidball,<br />Full Stack Developer
        </h3>
        <p className='
        max-w-[800px]
        self-end
        max-lg:self-start
        dynamic-text
        text-right max-lg:text-left'>
            I'm an A-Level student based in Indonesia, with a passion for Computer Science! Aside from web development, I have experience in both game and mobile app development.
        </p>
        <div className="
        absolute left-1/2 bottom-[10px] transform -translate-x-1/2
        flex justify-center items-center gap-x-4">
            <HiOutlineChevronDoubleDown size={30} />
            <p className="dynamic-label text-nowrap">Scroll Down</p>
            <HiOutlineChevronDoubleDown size={30} />
        </div>
    </section>
  )
}

export default Hero