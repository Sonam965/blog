import React, { Component } from 'react';
import Remarkable from 'remarkable';

class Markdown extends Component {
    createMarkup = (content) => {
        const markdown = new Remarkable();
        return {__html: markdown.render(content)};
    }

    render() {
        const { content } = this.props;
        return (
            <div dangerouslySetInnerHTML={this.createMarkup(content)} />
        )
    }
}


export default Markdown;
