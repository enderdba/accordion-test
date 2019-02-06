import React, { Component } from 'react';

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    showChildren() {
        return React.Children.map(this.props.children, child => {
            //cloning the elements to apply props to all of them...
            return React.cloneElement(child, {
                dynamic: this.props.dynamic
            });
        });
    }

    render() {
        return <div className="accordion">{this.showChildren()}</div>;
    }
}

export default Accordion;
