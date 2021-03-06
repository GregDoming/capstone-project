import axios from 'axios'



export const loginLoading = () => ({
  type: 'LOGIN_LOADING'
})

export const loginFailed = () => ({
  type: 'LOGIN_FAILED'
})

export const loginSucceeded = (user) => ({
  type: 'LOGIN_SUCCEEDED',
  user
})

export const authenticate = () => {
  return async dispatch => {
    dispatch(loginLoading)
    try {
      const response = await axios.post('/api/session')
      dispatch(loginSucceeded(response.data))
    } catch (error) {
      dispatch(loginFailed())
    }
  }
}


export const login = (email, password) => {
  return async dispatch => {
    dispatch(loginLoading())
    try {
      console.log(email, password)
      const response = await axios.post('/api/session', {
        email,
        password
      })
      dispatch(loginSucceeded(response.data))
    } catch (error) {
      dispatch(loginFailed())
    }
  }
}
export const signupUser = (username, email, password) => {
  return async dispatch => {
    console.log("Hello")
    const res = await axios.post('/api/users/signup',
       {username, email, password})

    console.log(res)
    if (res.ok) {
      dispatch(loginSucceeded(res.data.user));
    }
    return res;
  }
}