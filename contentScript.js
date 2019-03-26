console.log("Chrome extension loaded");



  
var all=document.body.getElementsByTagName('*');
var divs=document.body.getElementsByTagName('*');
	//var divs = $('*');

	//console.log(divs[1]);

	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = '.h *:hover { background-color: #83aff7; }';
	document.getElementsByTagName('head')[0].appendChild(style);

	//var divs = document.querySelectorAll("div:not(.first)").children;
	console.clear();
	for (var i = 0, max=all.length;i<max; i++)

	 {
		all[i].addEventListener("click",function(){
		console.log(this);

		var el=JSON.stringify(this);
		
		document.write("Check the console");
		console.log(window.getComputedStyle(this));});
	}
	for (var i = 0, ma=divs.length; i <ma; i++)
	{
	
		var el=this.parentNode;
		while(el)
		{
		divs[i].addEventListener('mouseover', function(){
  		el.classList.remove('h');
		});
		el=this.parentNode;	
		}

		(divs[i]).addEventListener('mouseover', function(){
  		this.classList.add('h');
		});

		


		/*divs[i].addEventListener("mouseenter",function(){
		
			
		this.setAttribute('class','h');});
		this.addEventListener("mouseout",function(){
			this.parent().removeClass('h')
		});*/
		/*all[i].setAttribute('onclick','getid(this)');
		all[i].setAttribute('onmouseover','geth(this)');*/

	



};





	
	