import React from 'react'
import Posts from './Posts/Posts'

const Profile = (props) => {

    return (
        <div className='profile'>
            <Posts avatar={props.avatar}/>
        </div>

    )

}
export default Profile;