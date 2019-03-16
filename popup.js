	
	console.log("Chrome extension loaded");
	
		var all=document.body.getElementsByTagName("*");
	

	for (var i = 0, max=all.length;i<max; i++)
	 {
		all[i].setAttribute('onclick','getid(this)');
	}
	
	for (var i = 0, max=all.length;i<max; i++) 
	{
		all[i].classList.add('hv');
	}

	function getid(el)
	{
		console.log(el);
		console.log(window.getComputedStyle(el));
	}


