    let input = document.getElementById("figure-color-text");
    let figures = document.getElementById("figures");
    let optionList = document.getElementById("figures-list");
    let button = document.getElementById("figure-click");

    optionList.addEventListener('click', function() {
        if (optionList.value === 'cube') {
            figures.className = "cube-form";
        } else if (optionList.value === 'rectangle') {
            figures.className = "rectangle-form";
        } else if (optionList.value === 'circle') {
            figures.className = "circle-form";
        } else {
            figures.style.backgroundColor = "black";
        }
    });

    button.addEventListener('click', function() {
        figures.style.backgroundColor = input.value;
    })


