/* eslint-disable react/prop-types */
import { useState } from 'react'
import { toast } from 'react-toastify'
function UserSearch({ users, searchUsers, handleClear }) {
  const [text, setText] = useState('')
  const handleChange = (e) => {
    setText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if (text === '') {
      toast.error('Please enter something', { theme: 'dark' })
    } else {
      searchUsers(text)
      setText('')
    }
  }
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                placeholder='search'
                value={text}
                onChange={handleChange}
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className='btn btn-ghost btn-lg' onClick={handleClear}>
            CLEAR
          </button>
        </div>
      )}
    </div>
  )
}
export default UserSearch
