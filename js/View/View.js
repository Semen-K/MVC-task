define( function () {
			let View = function() {	
			this.writes=function(Obj){
			 			
			 			let objJS = JSON.parse(Obj);
			 			let x = objJS.articles;
			 			for(let z=0; z < x.length; z++){
				 			let newTr = document.createElement('tr');
			       			newTr.innerHTML = '<td colspan="2"><img src="' + x[z].urlToImage + '"> <h1>' + x[z].title + '</h1> <p>' + x[z].description + 
							 '</p><p>' + x[z].author +'</br>' + x[z].publishedAt + '</p><a href="'+ x[z].url +'">Read more...</a></td>';
							add.appendChild(newTr);	
						}
					}
				}	
			
		return View;
	});


