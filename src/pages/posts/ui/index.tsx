import {useState} from "react";
import type { RootState } from '../../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import {increment} from "../../../app/store/users/slice";
import { useLocation,useSearchParams } from 'react-router-dom'

export const PostsPage = ()=>{
    const count = useSelector((state: RootState) => state.user.value)
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams();
    const code = searchParams.get('user_id')
    const location = useLocation()
    const [user,setUser] = useState({name:'Dumster'})

    function incrementAge(){
        dispatch(increment())
    }
    return(
        <div>
            Hello this is Posts page
        <h1>User name is {user.name} and his age {count}</h1>
            <button onClick={incrementAge}>Increse age</button>
            <div>
                {location.pathname} query: {code}
            </div>
        </div>
    )
}
