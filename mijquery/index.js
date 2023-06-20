
import $ from 'https://cdn.skypack.dev/jquery'
const total = document.getElementById('button');
$(total).on('click',()=> {
    alert('hola mundo')
    var nombre = $("#itnombre").val();
    var correo = $("#itcorreo").val();
    var asunto = $("#itasunto").val();

    if(nombre ==""){
        $("#mensaje1").fadeIn();
        return false;

    }
});


