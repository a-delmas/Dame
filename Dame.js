var damier = document.createElement("section")
document.body.appendChild(damier);

for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
        var position = document.createElement("div")
        damier.appendChild(position);
        if (j % 2 == i % 2) {
            position.style.backgroundColor = "maroon";
        }
        else {
                if (i <= 3) {
                    var pblanc = document.createElement("button")
                    pblanc.style.backgroundColor = "black"
                    pblanc.style.borderRadius = "50%"
                    pblanc.style.position = "absolute"
                    pblanc.style.width = "50px"
                    pblanc.style.height = "50px"
                    position.appendChild(pblanc);
                }
                if (i >= 6) {
                    var pblanc = document.createElement("button")
                    pblanc.style.backgroundColor = "blue"
                    pblanc.style.borderRadius = "50%"
                    pblanc.style.position = "absolute"
                    pblanc.style.width = "50px"
                    pblanc.style.height = "50px"
                    position.appendChild(pblanc);
                }
            }
        }

    }

// var pblanc = document.createElement("button")
// pblanc.style.backgroundColor = "black"
// pblanc.style.borderRadius = "50%"
// for ()