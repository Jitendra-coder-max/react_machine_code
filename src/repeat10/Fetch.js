import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
const Fetch = () => {

    // url = 'https://jsonplaceholder.typicode.com/posts'

    const [posts, setPosts] = useState([]);

    const [newPost, setnewPosts] = useState({id:null,title:'', body:''})

const fetchApi = async() =>{

    const res =  await axios.get(`https://jsonplaceholder.typicode.com/posts`);

    


    setPosts(res.data)
} 

console.log(posts)
useEffect(() =>{
    fetchApi()
},[])

const deletePost = async (id) =>{

                  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
               
   const filtereduser =  posts.filter((post) => post.id !==id )
   setPosts(filtereduser)
    
}

const addPosts =async(e)=> {
   
   

    const res =  await axios.post(`https://jsonplaceholder.typicode.com/posts/`, newPost)


    setPosts([...posts, res.data])
    

    setnewPosts({id:null, title:'', body:''})
}


const handleChange =(e) => {

// setnewPosts({...newPost,[e.target.name]: e.target.value})
    // setnewPosts(preNewUser => ({...preNewUser,[e.target.name]:e.target.value}))
       setnewPosts(prevNewUser => ({...prevNewUser,[e.target.name]:e.target.value}))
       console.log("change input")
}

const updatePost = (id) => {

        const postTobeUpdated =       posts.find((post) => post.id === id)
    setnewPosts(postTobeUpdated)
}


const updatePosts = async()=>{

                    await  axios.put(`https://jsonplaceholder.typicode.com/posts/${newPost.id}`,newPost)

                const updatedPosts =      posts.map((post) => post.id === newPost.id ? newPost:post )

                setPosts(updatedPosts)
                setnewPosts({id:null, title:'', body:''})

}

  return (
    <div>
    <table border={1}>
        <tr> 
            <th>ID</th>
        <th>Ttile</th>
        <th>Body</th>
        </tr>
        {posts.map((post) =>(
            <tr key={post.id} style={{fontSize:20}}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body.slice(0,50)}</td>
               <td> <button onClick={()=>deletePost(post.id)}> delete</button></td>
               <td> <button onClick={()=>updatePost(post.id)}> update</button></td>
            </tr>
        ))}

    </table>
    {/* <form onSubmit={addPosts}> */}

        <label> Title</label>
        <input  type='text' placeholder='enter your title' value={newPost.title} name='title'  onChange={handleChange}/>
        <label> Body</label>
        <input  type="text" placeholder='enter body text'  value={newPost.body} name="body"  onChange={handleChange}/>
        {/* <input  type='submit'/> */}
        <button onClick={addPosts}>add post</button>
        <button onClick={updatePosts}>Update post</button>
    {/* </form> */}
    </div>
  )
}

export default Fetch