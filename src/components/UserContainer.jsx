import React, {useEffect} from 'react'
import {fetchUsers} from '../redux'
import { useDispatch, useSelector } from 'react-redux'

function UserContainer() {

    //use effect will run the dispatch that will start the fetch to the server
    const dispatch = useDispatch()
    useEffect( () => { dispatch(fetchUsers()) }, [])

    //save and collect the store information
    const usersData = useSelector( (state) => state.users)

    return (
        <div>
            <h2>Users</h2>
            { (usersData.loading) ?  (<h2>Loading</h2>) :
            ( 
                (usersData.error) ? (<h2>{usersData.error}</h2>) :
                ( usersData.users.map( user => <p>{user.username}</p>))
            ) 
        }
        </div>
    )
}

export default UserContainer
