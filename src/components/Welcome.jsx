import "./Welcome.css"
import { useLocation } from "react-router-dom"

export default function Welcome(props) {
    const location = useLocation()
    console.log("welcome page entered",location.state.email,location.state.contact)
    console.log(props)
    return (
        <>
            <div className="welcome">
                <p>Thanks a ton for taking out your precious time and for completing the survey Email Address {location.state.email} Contact Number {location.state.contact}</p>
                {/* <div className="email">
                    <div>Address :</div>
                    <div>{location.state.email}</div>
                </div>
                <div className="number">
                    <div>Contact :</div>
                    <div>{location.state.contact}</div>
                </div> */}
            </div>
        </>
    )
}