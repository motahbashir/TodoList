import { useSelector } from "react-redux"
export const Contact =()=>{
    const selectore= useSelector((state)=> state.user)

    return(
        <div>Contact{selectore.username}</div>
    )
}