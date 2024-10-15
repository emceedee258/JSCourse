function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
        console.log(previewPic.alt);
        console.log(previewPic.src);
        x = document.getElementById("image");
        x.style.backgroundColor = "#CCEECC";
        x.style.backgroundImage = "url("+previewPic.src+")";

        x.innerHTML = previewPic.alt;

        /*document.getElementById("image").innerHTML = previewPic.alt;*/
	}

	function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was*/
      x = document.getElementById("image");
      x.style.backgroundColor = "#8e68ff";
      x.style.backgroundImage = "url('')";
      x.innerHTML = "Hover over an image below to display here.";
    /*2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
		
	}
