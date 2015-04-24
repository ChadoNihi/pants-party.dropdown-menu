document.addEventListener("DOMContentLoaded", function(event) {
	var dropdowntoggler = document.getElementsByClassName('dropdown')[0];
	var dropdownmenu = document.getElementsByClassName('dropdown-menu')[0];
	var htmlTagForClicksOutside = document.getElementsByTagName('html')[0];

	dropdowntoggler.addEventListener("click", function(){
		dropdownmenu.classList.toggle('show-dr-menu');
		dropdowntoggler.classList.toggle('toggled');
	});

	//clicks outside dropmenu close it:
	htmlTagForClicksOutside.addEventListener("click", function(e){
		if (e.target != dropdowntoggler && e.target.parentNode != dropdowntoggler){
			dropdownmenu.classList.remove("show-dr-menu");
			dropdowntoggler.classList.remove('toggled');
		}
	});

});