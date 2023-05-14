let url = "https://web-series-quotes-api.deta.dev/quote/";

let bodyElement = document.querySelector('body');

let qouteDivElement = document.createElement('div');
qouteDivElement.setAttribute('class', "container d-flex flex-column justify-content-center align-items-center m-3 p-5");
bodyElement.appendChild(qouteDivElement);
qouteDivElement.style.borderRadius = '15px';

let qouteElement = document.createElement('p');
qouteDivElement.appendChild(qouteElement);
let authorElement = document.createElement('h6');
qouteDivElement.appendChild(authorElement);

let newQuoteBtn = document.createElement('button');
newQuoteBtn.setAttribute('class', 'btn btn-primary');
// newQuoteBtn.setAttribute('onclick', "window.location.reload()")
newQuoteBtn.innerText = 'New Quote';
qouteDivElement.appendChild(newQuoteBtn);

let colorsArray = [
    {
        bg: "black",
        color: "white"
    },
    {
        bg: "white",
        color: "black"
    },
    {
        bg: "red",
        color: "yellow"
    },
    {
        bg: "yellow",
        color: "red"
    },
    {
        bg: "orange",
        color: "darkblue"
    },
    {
        bg: "darkblue",
        color: "orange"
    },
    {
        bg: "yellow",
        color: "darkviolet"
    },
    {
        bg: "darkviolet",
        color: "yellow"
    }
]
// console.log(colors.length)


newQuoteBtn.setAttribute('onclick', "window.location.reload()");

async function getQoutes() {
    try {
        let qoutes = await fetch(url);
        let qoute = await qoutes.json();
        // console.log(qoute);

        qouteElement.innerText = `${qoute[0].quote}`;
        authorElement.innerText = `${qoute[0].author}`;
        randomColors()

    } catch (error) {
        console.log(error)
    }
};
getQoutes();

function randomColors() {

    let randomColor = Math.round(Math.random() * (colorsArray.length));
    // console.log(colorsArray[randomColor].color);
    qouteDivElement.style.background = `${colorsArray[randomColor - 1]["bg"]}`;
    newQuoteBtn.style.background = `${colorsArray[randomColor - 1]["color"]}`;
    newQuoteBtn.style.color = `${colorsArray[randomColor - 1]["bg"]}`;
    qouteElement.style.color = `${colorsArray[randomColor - 1]["color"]}`;
    authorElement.style.color = `${colorsArray[randomColor - 1]["color"]}`;

}
// randomColors();