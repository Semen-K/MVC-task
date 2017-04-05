/*-----------------Model-----------------------*/

define(  function () {
						let Model = function() {
								this.ServerReq = function (y,callback) {											
				 						let request = new XMLHttpRequest();
										request.open('GEt', y);
										request.send();
												request.onreadystatechange = function() {
														if(request.readyState === 4 && request.status === 200) {
															let resultRequest = request.responseText;
															callback(resultRequest);
															}
												}		
									}
						}									
								
						return Model;	
});			

