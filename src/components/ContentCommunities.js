import React, { useEffect, useState } from "react";
import PostList from "./NewItem";
import '../grid.css';
import '../App.css';

function ContentCommunities() {
    const [postList, setPostList] = useState([])

    useEffect(() => {
        async function fetchPostList() {
            const requesUrl = 'https://raw.githubusercontent.com/TKit95/GarenaVN/master/dl.json';
            const response = await fetch(requesUrl);
            const responseJSON = await response.json();
            console.log(responseJSON)
           
            
            setPostList(responseJSON.new);
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
                    <input className="Container__input-input" type="text"
                     placeholder="Tìm kiếm thông tin" />
                </div>
            </div>
            
            
            <div className="grid wide">
                <div className="row">
                    <PostList posts={postList} />
                </div>      
            </div>
    </div>
  )
};


export default ContentCommunities


    