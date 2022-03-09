import React, { Component } from 'react';

import { LOCALSTORAGE_NAMESPACE } from './utils/constants';

import Editor from './Editor';
import Posts from './Posts';

class App extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        const savedPosts = JSON.parse(localStorage.getItem(LOCALSTORAGE_NAMESPACE));
        if (savedPosts) {
            this.setState({ posts: savedPosts });
        }
    }

    componentDidUpdate() {
        const posts = JSON.stringify(this.state.posts);
        localStorage.setItem(LOCALSTORAGE_NAMESPACE, posts);
    }

    onPostAdd = (newPost) => {
        this.setState({
            posts: [newPost, ...this.state.posts]
        });
    }

    handlePostDelete = (postId) => {
        this.setState({
            posts: this.state.posts.filter((post) => post.id !== postId)
        });
    }

    render() {
        return (
            <div className="App">
                <div className="page-header">
                    <div className="container">
                        <h1>React Blog App <small>share your thoughts</small></h1>
                    </div>
                </div>

                <Editor onPostAdd={this.onPostAdd} />
                <Posts
                    posts={this.state.posts}
                    onPostDelete={this.handlePostDelete}
                />
            </div>
        );
    }
}

export default App;
