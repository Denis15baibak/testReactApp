import React from 'react'
import Post from './Post/Post'

const Posts = (props) => {

    let avatarImg = props.avatar.map((el) => <Post id={el.id} src= {el.src} />)

    return (
        <div className= 'posts'>
            <h2 className= 'postsTitle'>Posts</h2>
            <img src='https://picsum.photos/680/300'></img>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>
            {avatarImg}
        </div>
    )

}
export default Posts;