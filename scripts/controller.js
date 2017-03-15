function keyHandler(e) {
    app.models.screen.activeCollectionIndex += 1;
    switch (e.keyCode) {
        case app.models.remoteCode.left:
            break;
        case app.models.remoteCode.right:
            console.log('dziala');
            break;
        case app.models.remoteCode.down:
            break;
        case app.models.remoteCode.up:
            break;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keydown',keyHandler);
    findActive();
});


function findActive() {

}
