document.addEventListener("DOMContentLoaded", function() {
    const filterButton = document.getElementById("filterButton");
    const dirtyContainer = document.getElementById("dirtyContainer");
    const cleanContainer = document.getElementById("cleanContainer");

    const dirtyItems = ["salt", "dirt", "calcite", "uranium", "rubber"];
    const itemsToFilterOut = ["uranium", "rubber", "dirt"];

    dirtyContainer.textContent = "Dirty: " + dirtyItems.join(", ");

    function filterItems(dirty, filter) {
        return dirty.filter(item => !filter.includes(item));
    }

    filterButton.addEventListener("click", function() {
        const cleanItems = filterItems(dirtyItems, itemsToFilterOut);

        cleanContainer.textContent = "Clean: " + cleanItems.join(", ");
        dirtyContainer.textContent = "Dirty: ";

        dirtyContainer.style.backgroundColor = "transparent"; 
        cleanContainer.style.backgroundColor = "blue";
    });
});
