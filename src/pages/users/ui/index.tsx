import {useState} from "react";
import type { RootState } from '../../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import {increment} from "../../../app/store/users/slice";

export const UsersPage = ()=>{
    const count = useSelector((state: RootState) => state.user.value)
    const dispatch = useDispatch()
    const [user,setUser] = useState({name:'Dumster'})

    function incrementAge(){
        dispatch(increment())
    }
    return(
        <div>
            Hello this is Users page
        <h1>User name is {user.name} and his age {count}</h1>
            <button onClick={incrementAge}>Increse age</button>
        </div>
    )
}
