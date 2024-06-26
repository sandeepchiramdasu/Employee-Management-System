import React, { useEffect, useState } from 'react'
import empService from '../service/emp.service';
import { Link } from 'react-router-dom';

const Home = () => {
  const[empList,setEmpList] = useState([]);
  const[msg,setMsg] = useState("");

  useEffect(()=>{init();},[]);

  const init=()=>{
    empService.getAllEmp().then((res)=>{
      console.log(res.data);
      setEmpList(res.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  const deleteEmp = (id)=>{
    empService.deleteEmp(id).then((res)=>{
      setMsg("Deleted Sucessfully");
      init();
      }).catch((error)=>{
        console.log(error);
    })
  }

  return (
    <div className='container'>
        <h1 className='text-center mt-3'> Emp </h1>
        {
          msg && <p className='text-center text-success' >{msg}</p>
        }
        <table class="table mt-5">
  <thead className='bg-light'>
    <tr>
      <th scope="col">s.no</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Salary</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      empList.map((e,num)=>(
        <tr>
      <th scope="row">{num+1}</th>
      <td>{e.firstName}</td>
      <td>{e.lastName}</td>
      <td>{e.email}</td>
      <td>{e.salary}</td>
      <td>
        <Link to={"editEmp/"+e.id} className='btn btn-sm btn-primary'>Edit</Link>
        <a onClick={()=>deleteEmp(e.id)} className='btn btn-sm btn-danger m-2'>Delete</a>
      </td>
    </tr>

      ))
    }

    
  </tbody>
</table>
    </div>
  )
}

export default Home