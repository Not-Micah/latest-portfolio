import ResumeItem from "./components/ResumeItem";

import { resumeItems } from "../data";

const Resume = () => {
  return (
    <section className="
    w-full min-h-[100vh]
    flex justify-center items-start
    bg-[#F6EEE3]">
        <div
        className='
        max-w-max w-full mx-auto
        padding my-40
        '>
            <h3 className="dynamic-subheading">Micah Tidball's Resume</h3>
            <p className="dynamic-text font-accentTwo mt-4">IGCSE: 9A*s, AS Level: 3As, 2x Highest Mark in Indonesia</p>

            <p></p>

            <div className="
            flex flex-col gap-y-14
            my-16">
                {resumeItems.map((item, index) => (
                    <ResumeItem 
                    key={index}
                    title={item.title}
                    description={item.description}
                    date={item.date}
                    link={item.link} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Resume