var preDate = "<li> <div class='collapsible-header active waves-effect waves-light grey darken-2 white-text'> <i class='mega-octicon octicon-calendar'></i> <b>";

var postDate = "</b> </div>";

var headPosts = "<div class='collapsible-body grey lighten-5'> <ul class='details'>"

var preContent = "<li><b>";

var postContent = "</li>";

var endPosts = "<br/></ul></div></li>";

$.get('posts.json', function(posts) {
	var content = "";
	$.each(posts, function(i, item) {
		content += (preDate+item.date+postDate);
		content += (headPosts);

		var postsString = "";
		$.each(item.entries, function(i, item) {
			content += preContent + item + postContent;
		});
		content += endPosts;
		$('#postsContainer').append(content);
		content = "";
	});
}); 