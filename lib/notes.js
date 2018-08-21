
function Note(title){
this.title = title 
this.body = ""
var div = document.createElement("div")
div.id = "a_note"
var notes_container = document.getElementById("notes_container")
notes_container.appendChild(div)
note_template = "<h2 id = 'note_header'></h2> <br/> <p id = 'note_text'></p>"
document.getElementById("a_note").innerHTML = note_template
}

Note.prototype.add_text = function(text){
    this.body = text
}

Note.prototype.display = function (){
document.getElementById("note_header").innerText = this.title 
document.getElementById("note_text").innerText = this.body 


}




{/* <div id = "a_note">
   
<h2 id = "note_header"></h2>
 
    
<p id = "note_text"></p>
</div>  */}