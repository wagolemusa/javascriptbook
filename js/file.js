  function replaceImages() {
    var images = document.body.getElementsByTagName("img");
    for (var i = images.length - 1; i >= 0; i--) {
      var image = images[i];
      if (image.alt) {
        var text = document.createTextNode(image.alt);
        image.parentNode.replaceChild(text, image);
      }
    }
  }


// saving words
var form = document.querySelector("form");
form.addEventListener("submit", function(event){
	document.write("Saving value", form.elements.value.value);
	event.preventDefault();
});

// counting th value
 var text = document.querySelector("input");
  var output = document.querySelector("#length");
  text.addEventListener("input", function() {
    output.textContent = text.value.length;
  });

var buttons = document.getElementsByName("color");
  function setColor(event) {
    document.body.style.background = event.target.value;
  }
  for (var i = 0; i < buttons.length; i++)
    buttons[i].addEventListener("change", setColor);


// it select the number
  var select = document.querySelector("select");
  var output = document.querySelector("#output");
  select .addEventListener("change", function(){
  	var number = 0;
  	for (var i = 0; i < select.options.length; i++){
  		var option = select.options[i];
  		if (option.selected)
  			number += Number(option.value);
  	}
  	output.textContent = number;
  });


