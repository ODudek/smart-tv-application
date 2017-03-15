app.view.menu = _.template('<nav><div id="menu"> <ul> ' +
    '<% _.each(app.models.screen.collections[0].list, function( list ){ %>' +
    '<% if(list.isActive) { %>' +
    '<li class="active"><a href="<%= list.href%>"><%= list.name%></a></li>' +
    '<% } else { %>' +
    '<li><a href="<%= list.href%>"><%= list.name%></a></li> ' +
    '<%}}) %> ' +
    '</ul></div></nav>');

app.view.content = _.template('<section><div id="content">' +
    '<ul>' +
    '<% _.each(app.models.screen.collections[1].list, function( list ){ %>' +
    '<% if(list.isActive) { %>' +
    '<li class="active"><img src="<%= list.url%>"><a href="<%= list.href%>"><%= list.name%></a></li>' +
    '<% } else { %>' +
    '<li><img src="<%= list.url%>"><a href="<%= list.href%>"><%= list.name%></a></li> ' +
    '<%}}) %> ' +
    '</ul>' +
    '</div></section>');

function renderScreen() {
    app.models.screen.render(app.view.menu());
    app.models.screen.render(app.view.content());
}

renderScreen();