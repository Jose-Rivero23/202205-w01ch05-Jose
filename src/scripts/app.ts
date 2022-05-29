//import { about } from '../pages/about.js';
//import { index } from "";
//import { todo } from '../pages/todo.js';

import { details } from '../../dist/pages/details.js';
import { index } from '../../dist/pages/index.js';

(() => {
    const path = location.pathname.split('/');
    if (
        path[path.length - 1] === '' ||
        path[path.length - 1] === 'index.html'
    ) {
        document.addEventListener('DOMContentLoaded', index);
    } else if (path[path.length - 1] === 'todo.html') {
        document.addEventListener('DOMContentLoaded', details);
    }
    //  else {
    //     document.addEventListener('DOMContentLoaded', about);
    // }
})();
