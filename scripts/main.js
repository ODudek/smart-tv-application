require('../styles/style.css');
require('./app.js');
require('./models.js');
app.models.remoteCode = {
    up: 38,
    down: 40,
    left: 37,
    right: 39
};
app.models.menu = _.template('<nav><div id="menu"> <ul> ' +
    '<% _.each(app.models.screen.collections[0].list, function( list ){ %>' +
    '<% if(list.isActive) { %>' +
    '<li class="active"><a href="<%= list.href%>"><%= list.name%></a></li>' +
    '<% } else { %>' +
    '<li><a href="<%= list.href%>"><%= list.name%></a></li> ' +
    '<%}}) %> ' +
    '</ul></div></nav>');

app.models.content = _.template('<section><div>' +
    '<ul id="content">' +
    '<% _.each(app.models.screen.collections[1].list, function( list ){ %>' +
    '<li><img src="<%= list.url%>"><a href="<%= list.href%>"><%= list.name%></a></li>' +
    '<% }) %>' +
    '</ul>' +
    '</div></section>');

app.models.screen.render(app.models.menu());
app.models.screen.render(app.models.content());

console.log(app.models);

