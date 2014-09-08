$( document ).ready(function() {

$.ajax({
  url: "http://localhost:60858/api/terrace/GetFeatured",
  dataType: 'json',
  success: function(featured){
alert('test');
  	$( "#list" ).append( "<li data-role='list-divider' style='background-color:#ffffff;'>Featured<span class='ui-li-count'>" + featured.length + "</span></li>" ).listview('refresh');;

    $.each(featured,function( i, terrace )
    	{

    		$( "#list" ).append("<div id='featureditem1'><br/><h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2><br/></div><li data-theme='b'><a href='index.html'><div><h2>" + terrace.Business.Name + "</h2></div><p><strong>You've been invited to a meeting at Filament Group in Boston, MA</strong></p></a></li>").listview('refresh');
    	});

    $.ajax({
			  url: "http://localhost:60858/api/terrace/GetOthers",
			  dataType: 'json',
			  success: function(others){

			  	$( "#list" ).append( "<li data-role='list-divider' style='background-color:#ffffff;'>Others<span class='ui-li-count'>" + others.length + "</span></li>" ).listview('refresh');;

			    $.each(others,function( i, terrace )
			    	{
			    		$( "#list" ).append("<li><a href='index.html'><h2>" + terrace.Business.Name + "</h2><p><strong>Re: Dinner Tonight</strong></p><p>Sure, let's plan on meeting at Highland Kitchen at 8:00 tonight. Can't wait!</p><p class='ui-li-aside'><strong>4:48</strong>PM</p></a></li>").listview('refresh');
			    	});
			  }
			  
			});



  }
  
});

});