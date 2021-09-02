$(document).ready(function () {

//EFECTO SCROLL DE LAS SECCIONES
	$('a.scroll').click(function(e){
		e.preventDefault();
		$('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
	});

//EFECTO PARA EL MENU Y EL LOGO SE HAGAN MAS PEQUEÑOS
$("#Portada").css({"height":$(window).height() + "px"});
var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				$("#logo").css({"margin-top": "-5px", "width": "100px","height":"40px"});

				$("header").css({"background-color": "#a158d8"});
				flag = true;
			}
		}else{
			if(flag){
				$("#logo").css({"margin-top": "150px", "width": "700px","height":"300px"});

				$("header").css({"background-color": "transparent"});
				flag = false;
			}
		}


	});
	



});
//FUNCION PARA EL MENU DE LOS MOVILES
 function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



