import { navBarLinks } from "../data"

const NavBar = () => {
  return (
    <nav 
    className="
    z-30
    w-full
    fixed top-[20px] left-1/2 transform -translate-x-1/2
    flex justify-center items-center
    padding">
      <div
      className='
      max-w-max w-full
      bg-black/20 rounded-xl
      flex justify-between items-center
      backdrop-blur-sm
      padding py-4'>
        <a href="./">
          <img src="/logo.png" className="w-[25px] aspect-square"/>
        </a>
        <div className="flex justify-center items-start gap-x-8">
          {
            navBarLinks.map((item, index) => (
              <a
              key={index}
              href={item.link}
              className={`dynamic-label ${item.label !== "Resume" && 'max-[500px]:hidden'}`}>
                {item.label}
              </a>
            ))
          }
        </div>
      </div>
    </nav>
  )
}

export default NavBar