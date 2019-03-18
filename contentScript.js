console.log("Chrome extension loaded");
	var all=document.body.getElementsByTagName('*');

	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = '.h:hover { background-color: #83aff7; }';
	document.getElementsByTagName('head')[0].appendChild(style);
	var all=document.body.getElementsByTagName('*');
	
	for (var i = 0, max=all.length;i<max; i++)

	 {
		all[i].addEventListener("click",function(){
		console.log(this);
		console.log(window.getComputedStyle(this));});
		all[i].addEventListener("mouseover",function(){
		this.setAttribute('class','h');});
		/*all[i].setAttribute('onclick','getid(this)');
		all[i].setAttribute('onmouseover','geth(this)');*/

	}
	