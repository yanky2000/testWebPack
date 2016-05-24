'use strict';

export default function (message) {

    if (NODE_ENV == 'development') {
        console.log(message);
    }
    console.log(NODE_ENV);

    alert(`Welcome + ${message}`);
};

