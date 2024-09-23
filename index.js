const httpRequest = new XMLHttpRequest()
httpRequest.open("GET", "data.json")
httpRequest.onload = function(){
    let objectFormat = JSON.parse(this.responseText)
    console.log(objectFormat);   
}
httpRequest.send()