
interface ResumeItemProps {
    title: string;
    description: string;
    date: string;
    link: string;
}

const ResumeItem: React.FC<ResumeItemProps> = ({ title, description, date, link }) => {
  return (
    <div
    className="
    flex flex-col gap-y-1
    max-w-[800px]">
        <a 
        href={link}
        className="
        dynamic-text 
        hover:underline hover:text-blue-700">
            {title}
        </a>
        <p className="dynamic-label text-black/40">
            {date}
        </p>
        <p className="
        dynamic-label text-black/80
        ml-6 mt-3">
            {description}
        </p>
    </div>
  )
}

export default ResumeItem