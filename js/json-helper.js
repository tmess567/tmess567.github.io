var preDate = "<li> <div class='collapsible-header active waves-effect waves-light grey darken-2 white-text'> <i class='mega-octicon octicon-calendar'></i> <b>";

var postDate = "</b> </div>";

var headPosts = "<div class='collapsible-body grey lighten-5'> <ul class='details'>"

var preContent = "<li><b>";

var postContent = "</li>";

var endPosts = "<br/></ul></div></li>";

  var config = {
    apiKey: "AIzaSyBdJZcb2XiR4p06n75U1VQdjY_yOSFcbg8",
    authDomain: "devlog-28bc7.firebaseapp.com",
    databaseURL: "https://devlog-28bc7.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);

  firebase.database().ref('posts/').on('value', function(snapshot) {
	  posts = snapshot.val();
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
		$("div.spinner").hide();
	});