let $firstFocus = document.getElementsByClassName('active')[0];
$firstFocus = $firstFocus.focus;
KEY_CODE = {
    left: 37,
    up: 38,
    right: 39,
    down: 40
};

function changeFocus(e) {
    let $focus = document.getElementsByClassName('active')[0];
    console.log($focus);
    if (e != $focus) {
        e.className = 'active';
        $focus.className = '';
    }
}

function setupRemoteHandler() {
    let $menu = document.getElementById('menu');
    document.addEventListener('keydown', (e) => {
        controlByKeyCode(e);
    })
}

function controlByKeyCode(e) {
    let i = 0;
    switch (e.keyCode) {
        case KEY_CODE.up :
            break;
        case KEY_CODE.down :
            break;
        case KEY_CODE.left :
            break;
        case KEY_CODE.right :
            selectNextItem(i);
            i++;
            break;
    }
}

function selectNextItem(i) {
    let $li = document.querySelector('li');
    let next = $($li).next()[i];
    console.log(next);
    changeFocus(next)
}

setupRemoteHandler();
