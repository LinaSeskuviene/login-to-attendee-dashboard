import React from 'react';
import AttendeeList from './AttendeeList';
import Users from './users.json'

export function Dashboard() {
    return (
        <>
        <AttendeeList />
        {/* <div className='getUsersContainer'> 
        {
            Users && Users.map( user => {
                return(
                    <div className='usersContainer' key= { user.id } 
                    style={{color: "white"}}>
                        { user.firstName } { }
                        { user.lastName } { }
                        { user.email } { }
                        { user.age }
                    </div>
                )
            })
        }
        </div> */}
        </> 
    )
};
