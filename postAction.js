import {FETCH_POSTS,NEW_POSTS} from './type';


export const fetchPost=()=>dispatch=>{

        fetch('https://jsonplaceholder.typicode.com/posts')
           .then(res=>res.json())
              .then(posts=>dispatch({
                  type:FETCH_POSTS,
                  payload:posts
              }));
    
};


export const createPost=()=>dispatch=>{

          fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify()
        })
        .then(res=>res.json())
              .then(posts=>dispatch({
                  type:NEW_POSTS,
                  payload:posts
              }));
         

    
};