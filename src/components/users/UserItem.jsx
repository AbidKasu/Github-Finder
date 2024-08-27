import { Link } from 'react-router-dom'

/* eslint-disable react/prop-types */
function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className='card shadow-md compact side-bg-100'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div>
          <div className='avatar'>
            <div className='rounded-full shadow w-14 h-14'>
              <img src={avatar_url} alt='' />
            </div>
          </div>
        </div>
        <div>
          <h2 className='card-title'>{login}</h2>
          <Link to={`/user/${login}`} className='text-base-content opacity-40'>
            Visit Profie
          </Link>
        </div>
      </div>
    </div>
  )
}
export default UserItem
