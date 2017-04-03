app.models.remoteCode = {
    up: 38,
    down: 40,
    left: 37,
    right: 39
};

app.models.functions = {
    nextElement: function () {
        let lengthOfArray = app.models.screen.collections[app.models.screen.activeCollectionIndex].list.length;
        if (this.activeIndex < lengthOfArray - 1) {
            this.activeIndex += 1;
            this.list[this.activeIndex].isActive = true;
        } else {
            this.list[this.activeIndex].isActive = true;
        }
    },
    prevElement: function () {
        if (this.activeIndex > 0) {
            this.activeIndex -= 1;
            this.list[this.activeIndex].isActive = true;
        } else {
            this.list[this.activeIndex].isActive = true;
        }
    },
    currentElement: function () {
        this.list[this.activeIndex].isActive = false;
    },
    firstFocusElement: function () {
        this.list[this.activeIndex].isActive = true;
    },

};

app.models.screen = {
    name: 'app',
    collections: {},
    activeCollectionIndex: 0,
    render: function (template) {
        let $app = document.querySelector('#app');
        $app.innerHTML += template;
    },
    focus: function (currentCollection) {
        app.models.screen.collections[currentCollection].firstFocusElement();
    },
};

app.models.screen.collections = [
    {
        name: 'menu',
        list: [],
        activeIndex: 0,
    },
    {
        name: 'content',
        list: [],
        activeIndex: 0,

    },
    {
        name: 'footer',
        list: [],
        activeIndex: 0,
    }
];

app.models.screen.collections[0].list = [{
    isActive: true,
    name: 'przyklad',
    href: '#'
}, {
    isActive: false,
    name: 'przyklad2',
    href: '#'
}, {
    isActive: false,
    name: 'przyklad3',
    href: '#'
}];

app.models.screen.collections[1].list = [{
    isActive: false,
    name: 'przyklad',
    url: './image/example.jpeg',
    href: '#'
}, {
    isActive: false,
    name: 'przyklad2',
    url: './image/example.jpeg',
    href: '#'
}, {
    isActive: false,
    name: 'przyklad3',
    url: './image/example.jpeg',
    href: '#'
}];

app.models.screen.collections[2].list = [{
    isActive: false,
    name: 'przyklad',
    href: '#'
}, {
    isActive: false,
    name: 'przyklad2',
    href: '#'
}, {
    isActive: false,
    name: 'przyklad3',
    href: '#'
}];

Object.setPrototypeOf(app.models.screen.collections[0], app.models.functions);
Object.setPrototypeOf(app.models.screen.collections[1], app.models.functions);
Object.setPrototypeOf(app.models.screen.collections[2], app.models.functions);
