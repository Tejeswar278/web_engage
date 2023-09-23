import "./Welcome.css"

export default function Welcome(props) {
    console.log("welcome page entered")
    console.log(props)
    return (
        <>
            <div>
                <div>
                    <div>Email</div>
                    <div>{props.email}</div>
                </div>
                <div>
                    <div>Number</div>
                    <div>{props.number}</div>
                </div>
            </div>
        </>
    )
}