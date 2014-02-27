function Smurfs2Spalsh() {}
var smurfs2Spalsh = new Smurfs2Spalsh();

 

Smurfs2Spalsh.prototype.sectionsSetup = function() {
	var _this = this;
	var navItems = $('.top-nav a');
	var sections = $('#sitecontent').children('section');
	
 	
	navItems.each(function(i){
		var item = navItems[i];
		$(item).unbind().bind('click', function(e){
			e.preventDefault();
			var dest = $(this).attr('href');
			dest = dest.replace(/\#*/g, '');
			
			sections.each(function(i) {
				$(sections[i]).addClass('disabled')
			});
			$('#'+dest).removeClass('disabled');
			
			
			if(typeof(sCode) == 'object'){
				if (dest == 'homepage') {
					dest = 'main';
				}
				sCode.trackPageView(dest+'.html');
			}
		})
	})
	 
}



Smurfs2Spalsh.prototype.trailersSetup = function() {
	var _this = this;
	
	$('.watch-trailer').click(function(e){
		var name = $(this).text().toLowerCase();
		name = name.replace (/[.,?!\s,]/g, "");
 		
		if(typeof(sCode) == 'object'){	 
			sCode.trackVideo(name, 'start');
		}
	})
	
}	

 

Smurfs2Spalsh.prototype.initialize = function() {
	var _this = this;
	_this.sectionsSetup();
	_this.trailersSetup();
	 
	 
}

$(document).ready(function(){
     
	 smurfs2Spalsh.initialize();
	   
});