import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Login(props) {
    const navigate = useNavigate()
    const [eusername, seteusername] = useState()
    const [epassword, setepassword] = useState()
    const [ruser, setruser] = useState(true)
    
    const users=props.users
  


    function handleUInput(evt) {
        seteusername(evt.target.value)
    }
    function handlePInput(evt) {
        setepassword(evt.target.value)
    }
    

    function checkUser() {
        
        var userfound = false

        users.forEach(function (item) {
            if (item.username === eusername && item.password === epassword) {
                console.log("Log in Sucessful")
                userfound = true
                navigate("/landing",{state:{user:eusername}})
            }
            
        })

        if(userfound===false)
        {
            console.log("Log in Failed")
            setruser(false)
        }

    }

    return (<div className="bg-black p-10">
        <div className="bg-[#efefef] p-10 border rounded-md ">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            {ruser?<p>I Help You To Manage Your Activities After You login :)</p>:<p className="text-red-500">please singup before you login</p> }
            

            <div className="flex flex-col gap-2 my-2">
                <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="User name" onChange={handleUInput} />

                <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Password" onChange={handlePInput} />

                <button className="bg-[#8272da] w-24 p-1 rounded-md" onClick={checkUser}>
                    Login
                </button>

                <p>Already Have an Account?<Link to={"/signup"} className="underline"> Signup</Link></p>

            </div>

        </div>

    </div>)
}
export default Login