import {useEffect, useState} from "react"
import { getPost } from "../api/PostApi";
const Posts=()=>
{
const [data,setData]=useState([]);

 const getPostData=async()=>{
  const res=await getPost();
  console.log(res.data);
  setData(res.data);
 }
 useEffect(()=>{
  getPostData();
 },[]);

 //Card UI...
 return(
    // <h1>hello..crud</h1>
 <section className="section-post">
    <ul>
        {
            data.map((curElem)=>{
                const {id,body,title}=curElem;
                return <li key={id}>
                   <p>{title}</p>
                   <p>{body}</p>
                   <button>Edit</button>
                   <button>Delete</button>
                </li>
            })
        }
    </ul>
 </section>
 )
}
export default Posts;