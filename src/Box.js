import React from 'react';


class Box extends React.Component {
    constructor(props)
    {
        super(props);
    }

    render(){
        return <button onClick={this.props.onClick}>{this.props.value}</button>;
    }
}



export default Box;