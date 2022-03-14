import React, { useEffect, useState } from "react";
import PostList from "./NewItem";
import '../grid.css';
import '../App.css';

function ContentHome() {
    const [postList, setPostList] = useState([])

    useEffect(() => {
        async function fetchPostList() {
            const requesUrl = 'http://localhost:3000/listHome';
            const response = await fetch(requesUrl);
            const responseJSON = await response.json();
            console.log(responseJSON)
           
            
            setPostList(responseJSON);
        }
    fetchPostList();
    }, [])


  return (
    <div className="Container">
        <div className="ContentNew__width">
            <PostList posts={postList} />
        <div className="Container__end-loadmore">
          <a className="Container__end-loadmore-a">XEM THÊM</a>
        </div>
    </div>
        
                
          
    </div>
  )
};


export default ContentHome


    