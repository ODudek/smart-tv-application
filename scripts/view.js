app.view.menu = _.template('<header><nav><div id="menu">' +
    '<ul class="list">' +
    '<% _.each(app.models.screen.collections[0].list, function( list ){ %>' +
    '<% if(list.isActive) { %>' +
    '<li class="active"><a href="<%= list.href%>"><%= list.name%></a></li>' +
    '<% } else { %>' +
    '<li><a href="<%= list.href%>"><%= list.name%></a></li>' +
    '<%}}) %>' +
    '</ul>' +
    '</div></nav></header>');

app.view.content = _.template('<section><div id="content">' +
    '<ul class="list">' +
    '<% _.each(app.models.screen.collections[1].list, function( list ){ %>' +
    '<% if(list.isActive) { %>' +
    '<li><img src="<%= list.url%>"><a class="active" href="<%= list.href%>"><%= list.name%></a></li>' +
    '<% } else { %>' +
    '<li><img src="<%= list.url%>"><a href="<%= list.href%>"><%= list.name%></a></li>' +
    '<%}}) %>' +
    '</ul>' +
    '</div></section>');

app.view.footer = _.template('<footer><div id="footer">' +
    '<ul class="list">' +
    '<% _.each(app.models.screen.collections[2].list, function( list ){ %>' +
    '<% if(list.isActive) { %>' +
    '<li class="active"><a href="<%= list.href%>"><%= list.name%></a></li>' +
    '<% } else { %>' +
    '<li><a href="<%= list.href%>"><%= list.name%></a></li>' +
    '<%}}) %> ' +
    '</ul></div></footer>');