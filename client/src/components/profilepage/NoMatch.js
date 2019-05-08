import React, { Component } from 'react';

class NoMatch extends Component {
    render() {
        console.log(this.props.match.path)
        return (
            <div className="text-center">
             <h1>Nothing Here </h1>  
            </div>
        );
    }
}

export default NoMatch;