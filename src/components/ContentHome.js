import React, { useEffect, useState } from "react";
import PostList from "./NewItem";
import '../grid.css';
import '../App.css';

function ContentHome() {
    const [postList, setPostList] = useState([])

    useEffect(() => {
        async function fetchPostList() {
            const requesUrl = 'https://raw.githubusercontent.com/TKit95/GarenaVN/master/dl.json';
            const response = await fetch(requesUrl);
            const responseJSON = await response.json();
            console.log(responseJSON)
           
            
            setPostList(responseJSON.listHome);
        }
    fetchPostList();
    }, [])


  return (
    <div className="grid wide">
        <div className="row">
            <PostList posts={postList} />
        </div>
        <div className="Container__end-loadmore">
          <a className="Container__end-loadmore-a">XEM THÊM</a>
        </div>
    
        
                
          
    </div>
  )
};


export default ContentHome


    