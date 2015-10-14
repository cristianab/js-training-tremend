var dataContainer = document.querySelector("#data");

var itemsContainer = document.createElement("ul");

var mainCheckbox = document.createElement("input");
mainCheckbox.setAttribute("type", "checkbox");
mainCheckbox.addEventListener("change", function() {
    var checkboxes = document.querySelectorAll(".checkbox_item");
    console.log(mainCheckbox.checked);
    for (var i = 0; i < checkboxes.length; i++) {
        // add check for checkbox
        checkboxes[i].checked = mainCheckbox.checked;
    }
});

dataContainer.appendChild(mainCheckbox);

for (var i = 0; i < items.length; i++) {
    var item = items[i];

    // var itemContainer = document.createElement("li");
    // var itemDataContainer = document.createElement("ul");

    // var idContainer = document.createElement("li");
    /**
     * innerHtml - only for html content
     * innerText - not supported by firefox
     * textContent - purrrfect
     */

    var item = items[i].name;
    var nameList = document.createElement("ul");
    var nameContainer = document.createElement("li");

    nameContainer.textContent = items[i].name;
    nameList.appendChild(nameContainer);

    
    dataContainer.appendChild(nameList);

    var checkboxContainer = document.createElement("span");
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkbox_item");
    checkboxContainer.appendChild(checkbox);
    nameContainer.appendChild(checkboxContainer);

    // checkboxContainer.textContent = items[i].id;
    // nameContainer.appendChild(checkboxContainer);
    // // itemDataContainer.appendChild(checkboxContainer);

    // // itemContainer.appendChild(itemDataContainer);
    // // itemsContainer.appendChild(itemContainer);
 }


dataContainer.appendChild(itemsContainer);
