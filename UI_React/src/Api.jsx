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

const addInstitute =(institute) => axios.post(`${URL}/institute/addinstitute`,institute, { headers })
const getAllInstitute = ()=> axios.get(`${URL}/institute/allIntitutes`, { headers })
const getInstituteById = (id)=> axios.get(`${URL}/institute/id/${id}`, { headers })
const updateInstitute = (id,editinstitute)=> axios.put(`${URL}/institute/editinstitute/${id}`,editinstitute, { headers })
const deleteInstitute =(id)=> axios.delete(`${URL}/institute/deleteinstitute/${id}`, { headers })

const addCourse=(course) => axios.post(`${URL}/courses/addcourse`,course, { headers })
const getCourseById = (id)=> axios.get(`${URL}/courses/id/${id}`, { headers })
const updateCourse = (id,editinstitute)=> axios.put(`${URL}/courses/editcourse/${id}`,editinstitute, { headers })
const deleteCourse =(id)=> axios.delete(`${URL}/courses/deletecourse/${id}`, { headers })
const getAllCourse = ()=>axios.get(`${URL}/courses/allcourses`, { headers })

export  {userLogin,userRegister,adminLogin,getUsers,getUserbyId,editUser,deleteUser,getAllInstitute,addInstitute,deleteInstitute,getInstituteById,updateInstitute,getAllCourse,addCourse,getCourseById,updateCourse,deleteCourse}