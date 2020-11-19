import axios from 'axios'
import { context as c } from '../../context'

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
  };
  /*
  access : async (user_id, password, name, phone, email) => {
    const req = {
        method: c.post,
        url: `${c.url}/api/access`,
        data: {id:user_id, password:password, name:name, phone:phone, email },
        auth: c.auth
    }
    const resp = await axios(req)
    const data = resp.data
    alert(`Welcome ! ${data.name}'s connection is successful. ! `)
    return data
  },
  */


  async function login(user_id, password ) {
    alert(`CCCC ${user_id} & ${password}`)

    const req = {
        method: c.post,
        url: `http://192.168.0.21:8080/api/login`,
        data: {user_id:user_id, password:password},
        auth: c.auth
    }
    const resp = await axios(req)
    const data = resp.data
    alert(`Welcome ! ${data.name}'s connection is successful. ! `)
    return data
  }
  
  async function logout(user_id, password, name, phone, email) {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
  }
  
  async function getAll(user_id, password, name, phone, email) {
    const req = {
        method: c.post,
        url: `${c.url}/api/signup`,
        data: {user_id:user_id, password:password, name:name, phone:phone, email:email },
        auth: c.auth
    }
    const resp = await axios(req)
    const data = resp.data
    alert(`Welcome ! ${data.name}'s connection is successful. ! `)
    return data
  }
  
  async function getById(user_id, password, name, phone, email) {
    const req = {
        method: c.post,
        url: `${c.url}/api/user`,
        data: {id:user_id, password:password, name:name, phone:phone, email:email },
        auth: c.auth
    }
    const resp = await axios(req)
    const data = resp.data
    alert(`Welcome ! ${data.name}'s connection is successful. ! `)
    return data
  }
  
  async function register(user_id, password, name, phone, email) {
    const req = {
        method: c.post,
        url: 'http://192.168.0.21:8080/api/signup',
        data: {user_id:user_id, password:password, name:name, phone:phone, email:email },
        auth: c.auth
    }
    const resp = await axios(req)
    const data = resp.data
    alert(`Welcome ! ${data.name}'s connection is successful. ! `)
    return data
  }
  
  async function update(user_id, password, name, phone, email) {
    const req = {
        method: c.post,
        url: `${c.url}/api/signup`,
        data: {id:user_id, password:password, name:name, phone:phone, email:email },
        auth: c.auth
    }
    const resp = await axios(req)
    const data = resp.data
    alert(`Welcome ! ${data.name}'s connection is successful. ! `)
    return data
  }
  
  // prefixed function name with underscore because delete is a reserved word in javascript
  async function _delete(user_id, password, name, phone, email) {
    const req = {
        method: c.post,
        url: `${c.url}/api/user`,
        data: {id:user_id, password:password, name:name, phone:phone, email:email },
        auth: c.auth
    }
    const resp = await axios(req)
    const data = resp.data
    alert(`Welcome ! ${data.name}'s connection is successful. ! `)
    return data
  }
  
  
  
  ///////////////////////////////////////////////////////////////////////////
  const UserServiceSample = {
    access : async (user_id, password, name, phone, email) => {
      const req = {
          method: c.post,
          url: `${c.url}/api/access`,
          data: {id:user_id, password:password, name:name, phone:phone, email:email },
          auth: c.auth
      }
      const resp = await axios(req)
      const data = resp.data
      alert(`Welcome ! ${data.name}'s connection is successful. ! `)
      return data
    },
    detail : async () => {
      alert(`move to detail`)
      
    }
  } 