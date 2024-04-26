import axios from "axios";

let jwtToken = localStorage.getItem('Token')
const authheader = `Bearer ${jwtToken}`;
console.log(authheader)
const headers = {
  'Authorization': authheader,
  'Content-Type': 'application/json',
};
const URL = 'http://localhost:8080/api'

const userLogin = (signin) => axios.post(`${URL}/auth/login`, signin)
const userRegister = (register) => axios.post(`${URL}/auth/register`, register)
const adminLogin = (signin) => axios.post(`${URL}/auth/login`, signin)

const getUsers = () => axios.get(`${URL}/user/all`, { headers })
const getUserbyId = (id) => axios.get(`${URL}/user/findbyId/${id}`, { headers })
const editUser = (id, userInfo) => axios.put(`${URL}/user/update/${id}`, userInfo, { headers })
const deleteUser = (id) => axios.delete(`${URL}/user/delete/${id}`, { headers })

const getAllInstitute = ()=> axios.get(`${URL}/institute/allIntitutes`, { headers })
const addInstitute =(institute) => axios.post(`${URL}/institute/addinstitute`,institute, { headers })
const deleteInstitute =(id)=> axios.delete(`${URL}/institute/deleteinstitute/${id}`, { headers })


export  {userLogin,userRegister,adminLogin,getUsers,getUserbyId,editUser,deleteUser,getAllInstitute,addInstitute,deleteInstitute}