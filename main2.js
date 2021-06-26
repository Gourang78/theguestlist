//Code Button And Function

var name_of_the_guest_array = [];

function addaguest() { 
    //Code Add A Guest Button

    var display_names_array = [];

   var length_of_name_of_the_guest_array = name_of_the_guest_array.length;

   for (var j = 1; j <= 4; j++) {

    var name_of_the_guest = document.getElementById("add_the_name" + j).value;
    console.log(name_of_the_guest);
    name_of_the_guest_array.push(name_of_the_guest);

   }

    console.log(name_of_the_guest_array);

    var length_of_name_of_the_guest_array = name_of_the_guest_array.length;

    for (var k=0; k < length_of_name_of_the_guest_array; k++) {

        display_names_array.push("<h4>" + name_of_the_guest_array + "</h4>")
        console.log(display_names_array);

    }

    document.getElementById("guest_list").innerHTML = display_names_array;

}

function showguest() {
//Code The Second List Button Here
 
    document.getElementById("guest_list").innerHTML = display_names_array;
    console.log(display_names_array);
}

function sorting() {
//Code Sorting Button Here

    var sorted_list = name_of_the_guest_array.sort();
    var display_sorted_list = ("<h4>" + sorted_list + "</h4>")

}