
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
    


{/* <div id = "a_note">
   
<h2 id = "note_header"></h2>
 
    
<p id = "note_text"></p>
</div>  */}