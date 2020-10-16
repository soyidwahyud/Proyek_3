import axios from "axios";

export const register = newAdmin => {
  return axios
    .post('admin/register', {
      id_admin: newAdmin.id_admin,
      username_admin : newAdmin.username_admin,
      email_admin : newAdmin.email_admin,
      password_admin : newAdmin.password_admin,
      nama_admin : newAdmin.nama_admin
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = admin => {
  return axios
    .post('admin/login', {
      username_admin: admin.username_admin,
      password_admin: admin.password_admin
    })
    .then(response => {
      localStorage.setItem('admintoken', response.data)
      return response.data
    })
    .catch(err =>{
      console.log(err)
    })
}
export const getProfile = admin => {
  return axios
    .get('admin/profile', {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
