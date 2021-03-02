import React from 'react'

const Post = (props) => {

    
    return (

        <div>
            <img src={props.src} class="avatar" id= {props.id}></img>
        </div>

    )

}

export default Post;