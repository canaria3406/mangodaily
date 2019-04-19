$.ajax({
	success: function (data) {
		
		var ndAritcle_headPic = $('.ndAritcle_headPic', $(data));
		var ndArticle_margin = $('.ndArticle_margin', $(data));
		
		$('.thoracis').prepend(ndAritcle_headPic);
		$('.ndArticle_content').prepend(ndArticle_margin);
		
		$(".ndPaywall").attr("style", "display:none");
		$(".ndAritcle_headPic").removeAttr("style");
		$(".ndArticle_margin").removeAttr("style");
		
	}
});
