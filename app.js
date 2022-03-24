console.log('Hello')

function changeHeaderColor(event){
        color= window.prompt ("What color do you want the text to be")
        event.target.style.color=color
    }

const headerColor=document.querySelector('h1');
// headerColor.addEventlistener('click', function () {
//     console.log("title has been clicked");
// })
headerColor.addEventListener('click', changeHeaderColor )