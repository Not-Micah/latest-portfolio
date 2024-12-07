
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

interface ResumeItemProps {
    title: string;
    description: string;
    date: string;
    url?: string;
    github?: string;
}

const ResumeItem: React.FC<ResumeItemProps> = ({ title, description, date, url, github }) => {
  return (
    <div
    className="
    flex flex-col gap-y-1
    max-w-[800px]">
        <p className="dynamic-text">
            {title}
        </p>
        <p className="dynamic-label text-black/40">
            {date}
        </p>
        <p className="
        dynamic-label text-black/80
        ml-6 mt-3">
            {description}
        </p>
        <div className="
        ml-6 mt-3
        flex justify-start items-center gap-x-2">
            {
                url && (
                <a 
                className="
                bg-black/20 text-black/50
                p-1 rounded-full"
                href={url}>
                    <FaLink size={25} />
                </a>
                )
            }
            {
                github && (
                <a 
                className="
                bg-black/20 text-black/50
                p-1 rounded-full"
                href={github}>
                    <FaGithub size={25} />
                </a>
                )
            }
        </div>
    </div>
  )
}

export default ResumeItem