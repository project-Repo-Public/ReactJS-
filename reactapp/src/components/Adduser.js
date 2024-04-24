import React, { useState } from "react";

function AddUser(){
    const [userFname, setFname] = useState();
    const [userLname, setLname] = useState();
    const [useEmail, setEmail] =  useState();

    const fnamevalue =(event)=>{
        const val = event.target.value;
        setFname(val);
    }
    const lnamevalue =(event)=>{
        const val = event.target.value;
        setLname(val);
    }
    const emailvalue =(event)=>{
        const val = event.target.value;
        setEmail(val);
    }

    const adduser =(e)=>{
        if(!userFname){
            e.preventDefault();
            return;
        }
        if(!userLname){
            e.preventDefault();
            return;
        }
        if(!useEmail){
            e.preventDefault();
            return;
        }
         
         if(validateEmail(useEmail) !== null){
            fetch('http://localhost:8080/add', {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({fname: userFname,lname: userLname, email:useEmail})
            })
            e.preventDefault();
            window.location.href = "https://localhost:3000/";        
         }
        
    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        };
    return(
        <>
            <div className="container custom-div">
                <form method="post" >
                    <div className="form-group">
                       <h3>Add New User</h3>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">First Name</label>
                        <input type="text" name="fname" onChange={fnamevalue} className="form-control" id="exampleInputPassword1" placeholder="first name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Last Name</label>
                        <input type="text" name="lname" onChange={lnamevalue} className="form-control" id="exampleInputPassword1" placeholder="last name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" onChange={emailvalue} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <button type="submit" onClick={adduser} className="btn btn-primary">Create</button>
                </form>
            </div>
        </>
    );
}
export default AddUser;