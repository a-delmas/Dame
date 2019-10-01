var damier = document.createElement("section")
document.body.appendChild(damier);

for (i = 0; i < 100; i++) {
    var position = document.createElement("div")
    damier.appendChild(position);
    for (j = 0; j < 10; j++) {
        if (j % 2 == 0) {
            position.style.backgroundColor = "maroon";
        }
    }
}

