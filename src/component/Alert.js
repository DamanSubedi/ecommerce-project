import { useContext } from "react"
import { StoreConsumer, StoreContext } from "./context"



export default function Alert() {
    const context = useContext(StoreContext)
    const { alert } = context
    const { type, msg } = alert

    return (
        <div className={`alert_container ${type}`}>
            <p>{msg}</p>
        </div>
    )
}