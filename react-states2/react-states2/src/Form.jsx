import { useState } from "react"
export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password:"",
    })

    // let handelNameChange = (event) => {
    //     setFullname(event.target.value)
    // }
    // let handelUsername = (event) => {
    //     setUsername(event.target.value)
    

    let handelInputChange = (event) => {
        
        setFormData( (currData) => {
            return {...currData, [event.target.name]: event.target.value};
        })
    }
    let handelSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
        setFormData({
            fullName:"",
            username: "",
            password: ""
        })
    }

    return(
        <form onSubmit={handelSubmit}>
            <label htmlFor="fullName">Full Name</label>
        <input placeholder="enter full name" type="text" value={formData.fullName} onChange={handelInputChange} id="fullName" name="fullName" />
                    <br /><br />
            <label htmlFor="username">Username</label>
        <input placeholder="enter username" type="text" value={formData.username} onChange={handelInputChange} id="username" name="username"/>
                    <br /><br />
                    <label htmlFor="password">Password</label>
        <input placeholder="enter password" type="password" value={formData.password} onChange={handelInputChange} id="password" name="password"/>
        <button>Submit</button>

        </form>
    )}
