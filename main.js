student_name_array = [];
function submit(){
   
var display_student_array = [];
for (var j = 1; j <= 4; j++){
    var name_of_the_student = document.getElementById("name_of_the_student_" +j).value;
    console.log(name_of_the_student);
    student_name_array.push(name_of_the_student);

}
console.log(student_name_array);
var lenght_of_name_of_sudent_array = student_name_array.length;
console.log(lenght_of_name_of_sudent_array);

for (var k = 0; k <lenght_of_name_of_sudent_array; k++){
    display_student_array.push("<h4>NAME - "+ student_name_array[k] + "</h4>");
    console.log(display_student_array);
}

    console.log(display_student_array);
    document.getElementById("display_name_with_comas") .innerHTML = display_student_array;
    var remove_comas = display_student_array.join(" ");
 console.log(remove_comas);
 document.getElementById("display_name_without_comas").innerHTML = remove_comas;


    document.getElementById("submit_btn").style.display = "none";
    document.getElementById("sort_btn").style.display = "inline-block";


}
function sorting(){
     student_name_array.sort();
     console.log(student_name_array);
     var display_student_array_sorting = [];
     var lenght_of_name_of_sudent_array = student_name_array.length;
     console.log(lenght_of_name_of_sudent_array);
     for (var k = 0; k <lenght_of_name_of_sudent_array; k++){
        display_student_array_sorting.push("<h4>NAME - "+student_name_array[k] + "</h4>");
        console.log(display_student_array_sorting);
    }
    var remove_comas = display_student_array_sorting.join(" ");
 console.log(remove_comas);

 document.getElementById("display_name_without_comas").innerHTML = remove_comas;


     document.getElementById("display_name").innerHTML = student_name_array;
}


student_name_array = [];
function submit(){
   
var display_student_array = [];
for (var j = 1; j <= 4; j++){
    var name_of_the_student = document.getElementById("name_of_the_student_" +j).value;
    console.log(name_of_the_student);
    student_name_array.push(name_of_the_student);

}
console.log(student_name_array);
var lenght_of_name_of_sudent_array = student_name_array.length;
console.log(lenght_of_name_of_sudent_array);

for (var k = 0; k <lenght_of_name_of_sudent_array; k++){
    display_student_array.push("<h4>NAME - "+ student_name_array[k] + "</h4>");
    console.log(display_student_array);
}

    console.log(display_student_array);
    document.getElementById("display_name_with_comas") .innerHTML = display_student_array;
    var remove_comas = display_student_array.join(" ");
 console.log(remove_comas);
 document.getElementById("display_name_without_comas").innerHTML = remove_comas;


    document.getElementById("submit_btn").style.display = "none";
    document.getElementById("sort_btn").style.display = "inline-block";


}
function sorting(){
     student_name_array.sort();
     console.log(student_name_array);
     var display_student_array_sorting = [];
     var lenght_of_name_of_sudent_array = student_name_array.length;
     console.log(lenght_of_name_of_sudent_array);
     for (var k = 0; k <lenght_of_name_of_sudent_array; k++){
        display_student_array_sorting.push("<h4>NAME - "+student_name_array[k] + "</h4>");
        console.log(display_student_array_sorting);
    }
    var remove_comas = display_student_array_sorting.join(" ");
 console.log(remove_comas);

 document.getElementById("display_name_without_comas").innerHTML = remove_comas;


     document.getElementById("display_name").innerHTML = student_name_array;
}