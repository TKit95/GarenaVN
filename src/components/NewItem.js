import React from 'react';
import PropTypes from 'prop-types';

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
                <div className="Item l-4" key={post.id}>
                    <img className="Item__img" src={post.img} />
                    <div className="Item__test">
                            <p className="Item__test-p1">Sự kiện</p>
                            <h2 className="Item__test-h2">{post.title}</h2>
                            <p className="Item__test-p2">{post.content}</p>
                    </div>
                </div>
                ))
            }
        </>
    )
}

export default PostList