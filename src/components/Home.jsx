import "./Home.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {


    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")

    const navigate = useNavigate();
  
    const welcomepage = () => {
      // 👇️ navigate to /contacts
      navigate('/home',{state : {email : email, contact : number}});
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setEmail("")
      setNumber("")
    }

    return (
        <>
            <div className="Home" >
                <form onSubmit={handleSubmit} id="formfeild" autoComplete="on">
                    <input type='email' id="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Enter your email' required autoComplete="on"/>
                    <input type='number' id="number" value={number} onChange={(event) => setNumber(event.target.value)} placeholder='Enter your mobile' required autoComplete="on"/>
                    <input type='submit' id="submitbtn" onClick={welcomepage} placeholder='TALK TO US ->' value="TALK TO US"/>
                </form>
            </div>
        </>
    )
}