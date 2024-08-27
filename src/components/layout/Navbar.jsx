import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-white '>
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <FaGithub className='inline pr-2 text-3xl' />
          <Link to='/' className='text-lg align-middle font-bold	 '>
            Github Finder
          </Link>
        </div>
        <div className='flex-1 pr-2 mx-2'>
          <div className='flex justify-end'>
            <Link to='/' className='btn btn-ghost btn-sm'>
              Home
            </Link>
            <Link to='/about' className='btn btn-ghost btn-sm'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
