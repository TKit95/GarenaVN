import React, { useEffect, useState } from "react";
import PostList from "./NewItem";
import '../grid.css';
import '../App.css';

function ContentNews() {
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
            <div className="Container__input">
                <div className="Container__input-all">
                    <span className="Container__input-icon">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input className="Container__input-input" type="text" placeholder="Tìm kiếm thông tin" />
                </div>
            </div>
            
            
            <div className="ContentNew__width">
                <PostList posts={postList} />
            </div>
    </div>
  )
};


export default ContentNews


    