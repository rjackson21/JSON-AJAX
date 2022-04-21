var clickCounter = 1 
const btn = document.getElementById("btn")
const animalContainer = document.getElementById("animal-info")

btn.addEventListener("click" , function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + clickCounter + '.json')
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText)
        renderHTML(ourData)
    }
    ourRequest.send()
    clickCounter++
    if (clickCounter > 3) {
        btn.classList.add("hide-me")
    }
})

function renderHTML(data){
    var htmlString = ""

    for (i = 0; i < data.length; i++){
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + "." + "</p>"
    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString)
}


