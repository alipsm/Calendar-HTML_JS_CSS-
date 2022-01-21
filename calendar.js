var container_calendar= document.getElementById('container-calendar');
var text_box= document.getElementById('text_input');
var number=0;

function add() {
    //debugger
    if (text_box.value != '' && text_box.value != ' ') {
        var tag_btn=document.createElement("button");
        tag_btn.innerHTML=text_box.value;
        tag_btn.classList.add('edit-text');
        var tag_span=document.createElement('span');
        tag_span.innerHTML='x';
        tag_span.classList.add('delete_icon');
        tag_span.onclick=function() {
            this.parentElement.classList.add('view-remove');
            setTimeout(function(){
                tag_span.parentElement.remove();
                // this.parentElement.remove();
            },600);
            //this.parentElement.remove();
        }
        tag_span.addEventListener("click",remove_1,this);
        tag_btn.appendChild(tag_span);
        container_calendar.appendChild(tag_btn);
        text_box.value='';
    }else{
        alert('please write text and next add...');
    }
    
}

function remove_1(e) {
    
}
function remove_2(e) {
    //alert(e);
    
    //setTimeout(2000,e.parentElement.remove());
    //e.parentElement.remove();
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 13) {
        add();
    }
});