let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let h1 = document.querySelector("h1");
    let randomcolor = getrandomColor();
    h1.innerText = randomcolor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomcolor;
    console.log("updated");
});

function getrandomColor() {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${blue}, ${green})`;
    return color;
}