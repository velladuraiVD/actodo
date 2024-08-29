import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props) 
{
    const navigate = useNavigate()
    const users=props.users
    const setusers=props.setusers

    const [eusername, seteusername] = useState()
    const [epassword, setepassword] = useState()

    
    function handleUInput(evt) {
        seteusername(evt.target.value)
    }
    function handlePInput(evt) {
        setepassword(evt.target.value)
    }

    function adduser()
    {
        setusers([...users,{username:eusername,password:epassword}])
        navigate("/login")
    }




    return (
    <div className="bg-black p-10">
        <div className="bg-[#efefef] p-10 border rounded-md ">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            <p>Sign up here:)</p>

            <div className="flex flex-col gap-2 my-2">
                <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="User name" onChange={handleUInput} />

                <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Password" onChange={handlePInput} />

                <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Conform Password" />


                <button className="bg-[#fca201] w-24 p-1 rounded-md" onClick={adduser}>
                    Sign up
                </button>

                <p>Don't Have an Account?<Link to={"/login"} className="underline"> Login</Link></p>

            </div>

        </div>

    </div>)
}
export default Signup