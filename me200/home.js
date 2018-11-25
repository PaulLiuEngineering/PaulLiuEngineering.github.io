// function function1() {
//     var x = document.getElementById("components_link");
//     if (x.style.display == "none") {
//        $('#components_link').fadeIn('slow')
//     } else {
//         $('#components_link').fadeOut('slow')
//         x.style.display = "none";
//     }
// }
var n = 0;
$(document).ready(function() {
        // var str = $(this).attr('id');
        // console.log(str);
        $('.map').maphilight();
        $("#components").click(function(){

            var x = document.getElementById("components_link");
            if (x.style.display == "none") {
                $('#cycle').fadeOut('fast');
                $('#components_link').fadeIn('slow');
                $('#components').text('cycles')
                
            } else {
                $('#components_link').fadeOut('fast');
                $('#cycle').fadeIn('slow');
                $('#components').text('components')
                x.style.display = "none";
            }})
        
        //console.log(($(this).attr('id') || null));
        
        // $(this).effect('highlight','swing','3000')
});