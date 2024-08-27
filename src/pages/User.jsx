import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../components/layout/Spinner'
import {
  FaCodepen,
  FaStore,
  FaUser,
  FaUserFriends,
  FaUsers,
} from 'react-icons/fa'
function User() {
  const { loginn } = useParams()
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (loginn) {
      getUser(loginn)
    }
  }, [loginn])

  const getUser = async (login) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_GITHUB_URL}/users/${login}`,
        {
          headers: {
            Authorization: `token ${
              import.meta.env.VITE_REACT_APP_GITHUB_TOKEN
            }`,
          },
        }
      )

      if (!response.ok) {
        toast.error('User not found', { theme: 'dark' })
        return
      }

      const data = await response.json()
      setUser(data)
      console.log(data)
      setLoading(false)
    } catch (error) {
      toast.error('An error occurred while fetching the user data', {
        theme: 'dark',
      })
    }
  }
  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user
  if (!loading) {
    return (
      <>
        <div className='w-full mx-auto lg:w-10/12'>
          <Link to='/' className='btn btn-ghost mb-8'>
            Back to Home
          </Link>
          <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
            <div className='custom-card-image mb-6 md:mb-0'>
              <div className='rounded-lg shadow-xl card image-full'>
                <figure>
                  <img src={avatar_url} alt='' />
                </figure>
                <div className='card-body justify-end text-white '>
                  <h2 className='card-title mb-0 mt-auto text-white'>{name}</h2>
                  <p className='mb-0 flex-grow-0 text-white'>{name}</p>
                </div>
              </div>
            </div>
            <div className='col-span-2'>
              <div className='mb-6'>
                <h1 className='text-3xl card-title'>
                  {name}
                  <div className='ml-2 mr-1 badge badge-success'>{type}</div>
                  {hireable && (
                    <div className='mx-1 badge badge-info'>Hireable</div>
                  )}
                </h1>
                <p>{bio}</p>
                <div className='mt-4 card-actions'>
                  <a
                    href={html_url}
                    target='_blank'
                    rel='noreferrer'
                    className='btn btn-outline'
                  >
                    Visit Profile
                  </a>
                </div>
              </div>
              <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
                {location && (
                  <div className='stat'>
                    <div className='stat-title text-md'>Location</div>
                    <div className='text-lg stat-value'>{location}</div>
                  </div>
                )}
                {blog && (
                  <div className='stat'>
                    <div className='stat-title text-md'>Website</div>
                    <div className='text-lg stat-value'>
                      <a href={`https://${blog}`} target='_blank'>
                        {blog}
                      </a>
                    </div>
                  </div>
                )}
                {twitter_username && (
                  <div className='stat'>
                    <div className='stat-title text-md'>Twitter</div>
                    <div className='text-lg stat-value'>
                      <a
                        href={`https://twitter.com/${twitter_username}`}
                        target='_blank'
                      >
                        {twitter_username}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='w-full py-5 mb-6 rounded shadow-md bg-base-100 stats'>
            <div className='stat'>
              <div className='stat-figure text-secondary'>
                <FaUser className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Followers</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {followers}
              </div>
            </div>
            <div className='stat'>
              <div className='stat-figure text-secondary'>
                <FaUserFriends className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Following</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {following}
              </div>
            </div>
            <div className='stat'>
              <div className='stat-figure text-secondary'>
                <FaCodepen className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Public Repos</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {public_repos}
              </div>
            </div>
            <div className='stat'>
              <div className='stat-figure text-secondary'>
                <FaStore className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Public Gists</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {public_gists}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return <Spinner />
  }
}

export default User
