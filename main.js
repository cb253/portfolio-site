document.addEventListener('DOMContentLoaded', function(){
    export const name = "main";
    const main = document.querySelector('#main');
    const div = document.creatElement("div");
    div.innerHTML = "Hello World";
    main.appendChild(div);
});
