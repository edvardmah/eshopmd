$(function () {
	$('.menu_open').click(function () {
		$('.dropdown-content').toggleClass('show_menu')
	})
});

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

