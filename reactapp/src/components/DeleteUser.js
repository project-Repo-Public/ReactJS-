
import {  useParams } from "react-router-dom";
import {React,useEffect, useState} from "react";
import Header from "./Header";
function DeleteUser(){
    const id = useParams();
    const [getUser,setGetUser] = useState({});
    useEffect(()=>{
        fetch("http://localhost:8080/"+id.id)
        .then((res)=>{return res.json();})
        .then((data)=>{
            setGetUser(data);
        })
    },[])

    const deluser =(e)=>{
        fetch("http://localhost:8080/delete/"+id.id);
        e.preventDefault();
        window.location.href = "https://localhost:3000";
    }

    const btnBack =(e)=>{
        e.preventDefault();
        window.location.href = "https://localhost:3000";
    }


    return(
        <>  
            <Header />
            <div className="container custom-div">
                <form>
                    <div className="form-group">
                       <h3>Delete User</h3>
                    </div>
                    <div className="form-group">
                        <label htmlFor="idfname">First Name</label>
                        <input type="text" name="fname" autoComplete="off"  disabled  defaultValue={getUser.fname}  className="form-control" id="idfname"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="idlname">Last Name</label>
                        <input type="text" name="lname" autoComplete="off" disabled defaultValue={getUser.lname}  className="form-control" id="idlname"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="idemail">Email address</label>
                        <input type="email" name="email" autoComplete="off" disabled defaultValue={getUser.email}  className="form-control" id="idemail" aria-describedby="emailHelp"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <button type="submit"  onClick={deluser}   className="btn btn-primary">Delete</button>
                    <button  onClick={btnBack}   className="btn btn-danger">Cancel</button>
                </form>
            </div> 
        </>
    )
}
export default DeleteUser;