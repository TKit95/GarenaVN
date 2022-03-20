import React from 'react';
import PropTypes from 'prop-types';
import { type } from '@testing-library/user-event/dist/type';

PostList.propTypes = {
    posts: PropTypes.array,
}

PostList.defaultProps = {
    posts: [],
};

function PostList(props) {
    const { posts } = props;
    return (
        <>
            {
            posts.slice(0, 6).map(post => (
                
                <div className="New__item l-4 m-6 c-12" key={post.id}>
                    <div className="figure">
                        <img className="Item__img" src={post.img} />
                    </div>
                       
                    <div className="Item__test">
                            <p className="Item__test-p1">{post.type}</p>
                            <h2 className="Item__test-h2">{post.title}</h2>
                            <p className="Item__test-p2">{post.content}</p>
                            <p className="Item__test-p3">{post.date}</p> 
                    </div>
                   
                </div>
                ))
            }
        </>
    )
}

export default PostList