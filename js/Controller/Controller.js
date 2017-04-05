/*-----------------Controller----------------*/
define( ['View/View'], function (View) {
	let Controller = function() {
		this.urlRequst = function(callback) {
				let appView = new View();
				add.innerHTML = " "; 
				let	urlic = ["https://newsapi.org/v1/articles?source=abc-news-au&sortBy=top&apiKey=43c38bd86c664ebd8598b439298daee4",
				  "https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=43c38bd86c664ebd8598b439298daee4",
			      "https://newsapi.org/v1/articles?source=breitbart-news&sortBy=top&apiKey=43c38bd86c664ebd8598b439298daee4"];
		          	urlic.forEach(function(item, i, urlic) {
		            if(document.getElementById("check"+i).checked) {
		            	callback(item, appView.writes);
		            }
				})  
			};
		
   	}
   return Controller;                  
});






