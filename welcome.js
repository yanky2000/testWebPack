'use strict';

export default function (message) {

    if (NODE_ENV == 'development') {
        console.log(`welcome me + ${message}`);
    }
    console.log(NODE_ENV);
    

    alert(`Welcome 234 + ${message}`);
    this.uses = 2;
};

