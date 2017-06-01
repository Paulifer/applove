/*
 * Archivo principal de funcionalidad de JS
 */
 /*Añadiendo modal*/

 (function modal(){
    var boxs = Array.from(document.getElementsByClassName("box-services"));
    var modal = document.getElementById("box-services-modal");
    var modalBody, cerrar, img;
    boxs.forEach(function(box){
        box.addEventListener("click", function(){
            modal.innerHTML = "";
            modalBody = document.createElement("div");
            modalBody.classList.add("modal-body");
            modalBody.innerHTML = box.innerHTML;            
            modal.appendChild(modalBody);
            modal.classList.remove("equis");
            cerrar = document.createElement("div");
            cerrar.classList.add("cerrar");
            img = document.createElement("img");
            img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
            cerrar.appendChild(img);
            modal.appendChild(cerrar);
            cerrar.addEventListener("click",function(){
                modal.classList.add("equis");
            });
        });     
    });
})();