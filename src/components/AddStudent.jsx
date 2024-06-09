import React, { useState } from 'react'
import Navbar from './Navbar'

const AddStudent = () => {
    const [data,setData]=useState(
        {
            "firstname":"",
            "lastname":"",
            "college":"",
            "dob":"",
            "course":"",
            "phno":"",
            "email":"",
            "address":""

        }
    )
    const inputHandler=(event)=>{
       setData ({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                     <b><label htmlFor="" className="form-label">First Name</label>
                    <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler}/></b>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                   <b> <label htmlFor="" className="form label">Last Name</label>
                    <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler}/></b>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                   <b><label htmlFor="" className="form-label">College</label>
                    <input type="text" className="form-control"name='college' value={data.college} onChange={inputHandler} /></b>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                   <b> <label htmlFor="" className="form-label">Dob</label>
                    <input type="date" className="form-control" name='dob'value={data.dob} onChange={inputHandler} /></b>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                   <b><label htmlFor="" className="form-label">Course</label>
                    <select name="course" id="" className="form-control" value={data.course} onChange={inputHandler}>
                        <option value="select option">select option</option>
                        <option value="MCA">MCA</option>
                        <option value="MBA">MBA</option>
                        <option value="Btech-cs">Btech-cs</option>
                    </select></b>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                   <b> <label htmlFor="" className="form-label">Ph.No</label>
                    <input type="number" className="form-control" name='phno' value={data.phno} onChange={inputHandler} /></b>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                     <b><label htmlFor="" className="form-label">Email</label>
                     <input type="email" className="form-control" name='email' value={data.email} onChange={inputHandler}/></b>

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                   <b>  <label htmlFor="" className="form-label">Address</label>
                     <textarea name="address" id="" className="form-control" value={data.address} onChange={inputHandler}></textarea></b>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                   <button className="btn btn-success" onClick={readValue}>Submit</button>

                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddStudent
