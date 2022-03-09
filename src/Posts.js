import React from 'react';

import Post from './Post';

const Posts = ({ posts, onPostDelete }) =>
    <div className="posts">
        <div className="container">
            {posts.map((post, index) =>
                <Post
                    key={index}
                    id={post.id}
                    timestamp={post.timestamp}
                    title={post.title}
                    content={post.content}
                    onPostDelete={onPostDelete}
                />
            )}
        </div>
    </div>;

export default Posts;
