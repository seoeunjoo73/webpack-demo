var _ = require('lodash');
import './style.css';
import './hello.scss';
import {area} from './js/circle' ; //name import : 반드시 {} 안에 동일한 이름을 사용
import aaa from './js/cube'; //전체

function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    console.log(area(3));
    console.log(aaa.bulk(10));

    return element;
}

document.body.appendChild(component());