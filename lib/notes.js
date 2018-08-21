var note_counter = 1
function Note(title, body){
    this.title = title 
    this.body = body
    this.counter = note_counter;
    var div = document.createElement("div")
    div.id = "note_" + note_counter
    var notes_container = document.getElementById("notes_container")
    notes_container.appendChild(div)
    note_template = `<h2 class = 'note_header'>${this.title}</h2> <br/> <p class = 'note_text'>${this.body}</p>`
    document.getElementById("note_" + note_counter).innerHTML = note_template
    console.log("number of notes created is " + note_counter)
    note_counter +=1 
    }
    
    Note.prototype.edit_title = function(text){
        target = document.getElementById(`note_${this.counter}`).getElementsByClassName("note_header")[0]
        target.innerHTML = text
     }
 

    Note.prototype.edit_body = function(text){
       target = document.getElementById(`note_${this.counter}`).getElementsByClassName("note_text")[0]
       target.innerHTML = text
    }

    


{/* <div id = "a_note">
   
<h2 id = "note_header"></h2>
 
    
<p id = "note_text"></p>
</div>  */}