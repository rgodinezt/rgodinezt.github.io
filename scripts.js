function setResource(file, elementSelector) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.querySelector(elementSelector).innerHTML = data;
        });
}
