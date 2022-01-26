/*------------------------------------------operation supp--------------------------------*/
var icons=document.getElementsByClassName("fa-trash-alt")
for(var i=0;i<icons.length;i++){
    icons[i].addEventListener("click",supprimer);
}
function supprimer(){
    var c=confirm("are you sure!!!");
    if(c){
        this.parentElement.parentElement.remove();
    }
}
/*------------------------------------opération ajout---------------------------*/
document.getElementById("add-task").addEventListener("click",ajout);
function ajout(){
    var task=document.getElementById("add").textContent.trim();
    if(task!=""){
        document.getElementById("ul").innerHTML+=' <li class="list-group-item"> <span contenteditable="">' +task +'</span> <div class="icons"><i class="fas fa-trash-alt"></i><i class="fas fa-user-edit"></i></div></li>'
        document.getElementById("add").textContent=" "
    }
    else{
        alert("task is empty")}}
/*------------------------------------opération chercher---------------------------*/
document.getElementById("se").addEventListener("keyup",chercher);
function chercher(){
 var cle=this.value.trim().toLowerCase();
 var tasks=document.getElementsByTagName("span")
 for( var i=0;i<tasks.length;i++){
     if(!tasks[i].textContent.toLocaleLowerCase().includes(cle)){
         tasks[i].parentElement.style.display="none"
     }
     else{
         tasks[i].parentElement.style.display="block"
     }
 }

}