function Note(title){
this.title = title 
this.body = ""
}

Note.prototype.add_text = function(text){
    this.body = text
}

Note.prototype.read = function (){
    document.write(this.title)
    document.write(this.body)
}

Note.prototype.title = function (){
    return this.title
}


