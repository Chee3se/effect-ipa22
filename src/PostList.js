import React from "react"
import {useEffect, useState} from "react";
import Post from "./Post";

export default function PostList(props) {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])
    const [loadingPosts, setLoadingPosts] = useState(true)
    const [loadingUsers, setLoadingUsers] = useState(true)
    useEffect(()=>{
        async function getPosts() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json()
            setPosts(data)
        }
        getPosts()
        setLoadingPosts(false)
    },[])
    useEffect(()=>{
        async function getUsers() {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            setUsers(data)
        }
        getUsers()
        setLoadingUsers(false)
    },[])

    return (
        <>
        {loadingUsers||loadingPosts ? <p>Loading...</p> : 
        users.map((user)=>{
            return posts.map((post, i)=>{
                if (post.userId == user.id) {
                    return <Post key={i} post={post} user={user}></Post>
                }
            })
        })}
        </>
    )
}