import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.isMount = true;
    }

    onClick = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    clickHandler = event => {
        if (
            this.isMount &&
            this.state.isOpen &&
            !ReactDOM.findDOMNode(this).contains(event.target)
        ) {
            this.setState({ isOpen: false });
        }
    };

    componentDidMount() {
        if (this.props.dynamic) {
            document.addEventListener('click', this.clickHandler, false);
        }
    }

    componentWillUnmount() {
        this.isMount = false;
        document.removeEventListener('click', this.clickHandler, false);
    }

    render() {
        const classes = "item" + (this.state.isOpen ? " active" : "");

        return (
            <div className={classes}>
                <button className="title" onClick={this.onClick}>
                    {this.props.title}
                </button>
                <div className="panel">{this.props.children}</div>
            </div>
        );
    }
}

export default Item;
