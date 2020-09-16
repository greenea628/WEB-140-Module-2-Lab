$( document ).ready (function() {
    $( "#area" ).on("mouseenter", function() {

          alert("Close me to turn the box green");            
        $(this).css("background-color", "green");

       });
            
        $( "#reset").on("click", function() {

         $("#area").css("background-color", "#953674");
        
      });
      
});
