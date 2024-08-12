import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Fetching = () => {
    const [posts, setPosts] = useState([])
const [newPost, setNewPost] = useState({id:null, name:'', email:''})

const fetchApi = async() => {

    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
      setPosts(res.data)

}

useEffect(()=>{
fetchApi()
},[]) 



const deletePost = async(id)=>{
   await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)

 const postTobeDleted =  posts.filter((post) => post.id !==id)

 setPosts(postTobeDleted)



}


const handleChange =(e)=>{


    setNewPost({...newPost,[e.target.name]: e.target.value})

}

const addPosts = async()=> {


    const res = await axios.post(`https://jsonplaceholder.typicode.com/users`,newPost)
    // setPosts([...posts,res.data])

    setPosts( prevPOST => [...prevPOST,res.data])
    setNewPost({id:null,  name:'', email:''})
}


const UpdatePosts = async() =>{
                

    await axios.put(`https://jsonplaceholder.typicode.com/users/${newPost.id}`, newPost)

   const UpdatedUser = posts.map((post) =>(post.id === newPost.id? newPost:post))

   setPosts(UpdatedUser)
   setNewPost({id:null, name:'', email:''})


}

const updatePost = (userId)=>{

  const postToBeUpdated=   posts.find((post) => post.id ===userId)
  setNewPost(postToBeUpdated)
  console.log('update')
}
// console.log(posts)
  return (
    <div>


        <table border={1}>
           <tr>
            <th>ID</th>
           <th>Title</th>
           <th>Body</th>
           </tr>
           {posts.map((post) =>(
            <tr key={post.id}><td>{post.id}</td>
            <td>{post.name}</td>
            <td>{post.email}</td>
            <td> <button onClick={() => deletePost(post.id)}> delete</button></td>
            <td >  <button onClick={()=> updatePost(post.id)}>Update Post</button></td>
            </tr>
           ))}

        </table>
 <h1>Posts</h1>
        <label>Title</label>
        <input type='text' placeholder='enter your titie' name='name' value={newPost.name}  onChange={handleChange}/>
        <label>Body</label>
        <input  type="text" placeholder='enter your body' name='email' value={newPost.email} onChange={handleChange}/>
        <button onClick={addPosts}>Add post</button> 
        <button onClick={UpdatePosts}>Update Post</button>
        
    </div>
  )
}

export default Fetching