import React, { Component } from 'react';

class Tabs extends Component {

    static defaultProps = {
        selected: 0,
        prefixCls: 'tabs'
    }

    state = { selected: this.props.selected }

    handleClick(e, index) {
        e.preventDefault();
        this.setState({ selected: index });
    }

    renderTitles() {
        const { prefixCls, children } = this.props;
        return (
            <ul className={`${prefixCls}-nav nav nav-tabs`}>
                {children.map((child, index) => {
                    const activeClass = (this.state.selected === index ? 'active' : '');
                    return (
                        <li className={activeClass} key={index}>
                            <a href="#" onClick={(e) => this.handleClick(e, index)}>
                                {child.props.label}
                            </a>
                        </li>
                    )
                })}
            </ul>
        );
    }

    renderContent() {
        const { prefixCls, children } = this.props;
        return (
            <div className={`${prefixCls}-content`}>
                {children[this.state.selected]}
            </div>
        )
    }

    render() {
        return (
            <div className={this.props.prefixCls}>
                {this.renderTitles()}
                {this.renderContent()}
            </div>
        )
    }
}

export default Tabs;
