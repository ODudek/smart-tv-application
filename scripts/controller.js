function keyHandler(e) {
    let currentCollection = app.models.screen.activeCollectionIndex;
    let lengthOfCollections = app.models.screen.collections.length;
    switch (e.keyCode) {
        case app.models.remoteCode.left:
            clearCurrentFocus(currentCollection);
            prevElement(currentCollection);
            clearHTML();
            renderScreen(app.view.menu(), app.view.content(), app.view.footer());
            break;
        case app.models.remoteCode.right:
            clearCurrentFocus(currentCollection);
            nextElement(currentCollection);
            clearHTML();
            renderScreen(app.view.menu(), app.view.content(), app.view.footer());
            break;
        case app.models.remoteCode.down:
            if (currentCollection < lengthOfCollections - 1) {
                clearCurrentFocus(currentCollection);
                currentCollection += 1;
                generateNextCollection(currentCollection);
            }
            break;
        case app.models.remoteCode.up:
            if (currentCollection > 0) {
                clearCurrentFocus(currentCollection);
                currentCollection -= 1;
                generatePrevCollection(currentCollection);
            }
            break;
    }
}

function generateNextCollection(currentCollection) {
    app.models.screen.activeCollectionIndex = currentCollection;
    focus(currentCollection);
    firstFocusElement(currentCollection);
    clearHTML();
    renderScreen(app.view.menu(), app.view.content(), app.view.footer());
}

function generatePrevCollection(currentCollection) {
    app.models.screen.activeCollectionIndex = currentCollection;
    focus(currentCollection);
    firstFocusElement(currentCollection);
    clearHTML();
    renderScreen(app.view.menu(), app.view.content(), app.view.footer());
}

function clearHTML() {
    let $app = document.querySelector('#app');
    $app.innerHTML = '';
}

function clearCurrentFocus(currentCollection) {
    app.models.screen.collections[currentCollection].currentElement();
}

function nextElement(currentCollection) {
    app.models.screen.collections[currentCollection].nextElement();
}

function prevElement(currentCollection) {
    app.models.screen.collections[currentCollection].prevElement();
}

function firstFocusElement(currentCollection) {
    app.models.screen.collections[currentCollection].firstFocusElement();
}

function focus(currentCollection) {
    app.models.screen.focus(currentCollection);
}

function renderScreen(menu, content, footer) {
    app.models.screen.render(menu);
    app.models.screen.render(content);
    app.models.screen.render(footer);
}

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', keyHandler);
});

renderScreen(app.view.menu(), app.view.content(), app.view.footer());