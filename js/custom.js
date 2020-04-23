/* Carouseles */

$('.clientes-carousel').owlCarousel({
        
	items: 1,
	dots: true,
	loop: true,

	autoplay: false
});

/* Funciones del navbar */
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var navContainer = document.getElementById("nav-container");

function myFunction() {
  if (window.pageYOffset >= 70) {
	navbar.classList.add("nav-scrolled");
	navbar.classList.remove("navbar-dark");
	navbar.classList.add("navbar-light");
	navContainer.classList.add("nav-scrolled");
  } else {
	navbar.classList.remove("nav-scrolled");
	navbar.classList.remove("navbar-light");
	navbar.classList.add("navbar-dark");
	navContainer.classList.remove("nav-scrolled");
  }
}

/* Formulario de contacto */

function _(id){ return document.getElementById(id); }

function submitForm(){
  _("form-btn").disabled = true;
  _("status").innerHTML = 'Enviando mensaje ...';
  var formdata = new FormData();
  formdata.append( "fname", _("fname").value );
  formdata.append( "femail", _("femail").value );
  formdata.append( "fsubject", _("fsubject").value );
  formdata.append( "fmessage", _("fmessage").value );
  var ajax = new XMLHttpRequest();
  ajax.open( "POST", "contact-form-handler.php" );
  ajax.onreadystatechange = function() {
	if(ajax.readyState == 4 && ajax.status == 200) {
		
		_("status").innerHTML = '<p class="valid-feedback d-block">Gracias '+_("fname").value+', su mensaje ha sido enviado.</p>';
		_("form-btn").disabled = true;
	  
	}else{
		_("status").innerHTML = '<div class="alert alert-danger" role="alert"><p>Error al enviar el mensaje, intente nuevamente.</p></div>';
		_("form-btn").disabled = false;
	}
  }
  ajax.send( formdata );
}

 $(function(){ 
     var navMain = $(".navbar-collapse"); 
     
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
 });