import "./Welcome.css"

export default function Welcome(props) {
    console.log("welcome page entered")
    console.log(props)
    return (
        <>
            <div className="welcome">
                <p>Thanks a ton for taking out your precious time and for completing the survey Email Address Contact Number</p>
                <div className="email">
                    <div>Address :</div>
                    <div>{props.email}</div>
                </div>
                <div className="number">
                    <div>Contact :</div>
                    <div>{props.number}</div>
                </div>
            </div>
        </>
    )
}