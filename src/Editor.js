import React, { Component } from 'react';

import Tabs from './Tabs';
import Pane from './Pane';
import Markdown from './Markdown';

class Editor extends Component {
    state = {
        title: '',
        content: ''
    }

    handleTitleChange = (e) => {
        this.setState({ title: e.target.value });
    }

    handleContentChange = (e) => {
        this.setState({ content: e.target.value });
    }

    handlePostAdd = (e) => {
        e.preventDefault();

        const { title, content } = this.state;

        if (title && content) {
            this.props.onPostAdd({
                ...this.state,
                id: Date.now(),
                timestamp: new Date()
            });

            this.resetState();
        }
    }

    resetState() {
        this.setState({
            title: '',
            content: ''
        });
    }

    render() {
        const { title, content } = this.state;

        return (
            <form className="editor container" onSubmit={this.handlePostAdd}>
                <Tabs>
                    <Pane label="Write">
                        <div className="form-group">
                            <input
                                className="editor-input form-control"
                                type="text"
                                placeholder="Title"
                                value={title}
                                autoFocus
                                onChange={this.handleTitleChange}
                            />
                        </div>

                        <div className="form-group">
                            <textarea
                                className="editor-textarea form-control"
                                rows={10}
                                placeholder="Tell your story..."
                                value={content}
                                onChange={this.handleContentChange}
                            />
                        </div>
                    </Pane>

                    <Pane label="Preview">
                        {title || content ? (
                            <div>
                                <h1>{title}</h1>
                                <Markdown content={content} />
                            </div>
                        ) : (
                            <p>Nothing to preview</p>
                        )}
                    </Pane>
                </Tabs>

                <div className="editor-actions text-right">
                    <button className="btn btn-primary" type="submit">
                        Publish
                    </button>
                </div>
            </form>
        )
    }
}

export default Editor;
