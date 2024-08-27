import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function Home() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const getUsers = async (param) => {
    setLoading(true)
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_GITHUB_URL}/search/users?q=${param}`,
      {
        headers: {
          Authorization: `token ${import.meta.env.VITE_REACT_APP_GITHUB_TOKEN}`,
        },
      }
    )
    const { items } = await response.json()
    if (items.length === 0) {
      toast.error('User not found', { theme: 'dark' })
      setLoading(false)
      clear()
    } else {
      setUsers(items)
      setLoading(false)
    }
  }
  const clear = () => {
    setUsers([])
  }
  return (
    <>
      <UserSearch users={users} searchUsers={getUsers} handleClear={clear} />
      <UserResults users={users} loading={loading} />
    </>
  )
}
export default Home
