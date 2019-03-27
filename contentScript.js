console.log("Chrome extension loaded");



  
var all=document.body.getElementsByTagName('*');
var divs=document.body.getElementsByTagName('*');

function gethtml(who, deep){
    if(!who || !who.tagName) return '';
    var txt, ax, el= document.createElement("div");
    el.appendChild(who.cloneNode(false));
    txt= el.innerHTML;
    if(deep){
        ax= txt.indexOf('>')+1;
        txt= txt.substring(0, ax)+who.innerHTML+ txt.substring(ax);
    }
    el= null;
    return txt;
}
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
		var tx=gethtml(this,true);
		alert(tx);
		var el=this;

		document.write("Check the console for HTML markup and CSS style of the selected element!");
		console.log(window.getComputedStyle(this));
		/*var fs = require('fs'); // reqire fileSystem node module
		fs.writeFile("console.txt", el, function(err) {
  		if(err) {
    	return console.log(err);
  		}
  		console.log("The file was saved!");
		});
		//read this line !!!!!//console.log("copy(JSON.decycle(this))");*/
		});
	}
	for (var i = 0, ma=divs.length; i <ma; i++)
	{
	
		/*var el=this.parentNode;
		while(el)
		{
		divs[i].addEventListener('mouseover', function(){
  		el.classList.remove('h');
		});
		el=this.parentNode;	
		}*/

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





	
	