import React, { Component } from 'react';
import BtnCSHD from './BtnCSHD';
import BtnDKHSV from './BtnDKHSV';

class BtnGroup extends Component {
    render() {
        return (
            <div>
            <div>
                <BtnCSHD/>
                </div>
                <div className="mt-2">     
                <BtnDKHSV/>
                </div>
                </div>
        );
    }
}

export default BtnGroup;