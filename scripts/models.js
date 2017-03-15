app.models.screen = {
    name: '',
    collections: {},
    activeCollectionIndex: 0,
    render: function (template) {
        let $app = document.querySelector('#app');
        $app.innerHTML += template;
    }
};

app.models.screen.collections = [
    {
        name: 'menu',
        list: [],
        activeIndex: 0
    },
    {
        name: 'content',
        list: [],
        activeIndex: 0
    },
    {
        name: 'footer',
        list: [],
        activeIndex: 0
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
}];

app.models.screen.collections[1].list = [{
    name: 'przyklad',
    url: 'http://lorempixel.com/200/400/',
    href: '#'
}, {
    name: 'przyklad2',
    url: 'http://lorempixel.com/200/400/',
    href: '#'
}];