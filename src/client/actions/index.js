import axios from 'axios'

export const FETCH_USERS = 'fetch_users'
export const fetchUsers = () => async dispatch => {
  const res = await axios.get('http://localhost:3000/api/users')
  
  dispatch({
    type: FETCH_USERS,
    users: res.data
  })
}