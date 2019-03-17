console.log("Chrome extension loaded");
	
	var all=document.body.getElementsByTagName('*');
	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = '.h:hover { background-color: #83aff7; }';
	document.getElementsByTagName('head')[0].appendChild(style);

	for (var i = 0, max=all.length;i<max; i++)

	 {
		all[i].setAttribute('onclick','getid(this)');
		all[i].setAttribute('onmouseover','geth(this)');

	}
	
	/*for (var i = 0, max=all.length;i<max; i++) 
	{
		var el=all[i];
		el.addEventListener('mouseover',function(){el.style['background-color']='#83aff7'});
	}*/

	function geth(el)
	{
	
		el.setAttribute('class','h');

	}
	function getid(el)
	{
		console.log(el);
		console.log(window.getComputedStyle(el));

	}
	

