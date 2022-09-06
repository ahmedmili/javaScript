const items = document.querySelectorAll(".item");

let movingItem = null;

items.forEach((item) => item.addEventListener("mousedown", handleClickItem));
document.addEventListener("mouseup", cancelActionsItem);

/*************************************
 * ITEMS                             *
 *************************************/
function handleClickItem(e)
{
    if (!e.target.classList.contains("item")) return;

    movingItem = e.target;
    movingItem.classList.add("moving");

    updateCursorPosition(e);
    document.addEventListener("mousemove", handleMoveItem);
}

let lastCursorPosition = {
    x: 0,
    y: 0
};

function handleMoveItem(e)
{
    movingItem.style.left = movingItem.offsetLeft + e.clientX - lastCursorPosition.x + "px";
    movingItem.style.top = movingItem.offsetTop + e.clientY - lastCursorPosition.y + "px";
    updateCursorPosition(e);
}

function cancelActionsItem(e)
{
    if (!movingItem) return;

    if (movingItem)
    {
        movingItem.classList.remove("moving");
        movingItem = null;
        document.removeEventListener("mousemove", handleMoveItem);
        return;
    }
}

function updateCursorPosition(e)
{
    lastCursorPosition = { x: e.clientX, y: e.clientY };
}