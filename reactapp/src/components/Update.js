import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import React from "react";
import Header from "./Header";


function Update(){
    const  id  = useParams();
    const [getUser,setGetUser] = useState({});

    useEffect(()=>{
          fetch("http://localhost:8080/"+id.id)
                .then(async (res)=>{return await res.json();})
                .then((data)=>{
                    setGetUser(data);
            })
    },[])


    const sendUpdate =(e)=>{
         let tmpfname = document.getElementById("idfname").value;
         let tmplname = document.getElementById("idlname").value;
         let tmpemail = document.getElementById("idemail").value;
         console.log(tmpfname.length)
        if (window.confirm('Update user?')){
            fetch("https://localhost:8443/updateuser", {
            method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                                    id: id.id, 
                                    fname: tmpfname,
                                    lname: tmplname, 
                                    email: tmpemail
                                })
            });
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
    return(<>
        <Header />

        <div className="container custom-div">
                <form>
                    <div className="form-group">
                       <h3>Update User</h3>
                    </div>
                    <div className="form-group">
                        <label htmlFor="idfname">First Name</label>
                        <input type="text" name="fname" autoComplete="off"   defaultValue={getUser.fname}  className="form-control" id="idfname"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="idlname">Last Name</label>
                        <input type="text" name="lname" autoComplete="off" defaultValue={getUser.lname}  className="form-control" id="idlname"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="idemail">Email address</label>
                        <input type="email" name="email" autoComplete="off"  defaultValue={getUser.email}  className="form-control" id="idemail" aria-describedby="emailHelp"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <button type="submit" onClick={sendUpdate}   className="btn btn-primary">Update</button>
                </form>
            </div>
   
    </>);
}
export default Update;