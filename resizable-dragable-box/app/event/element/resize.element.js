const resizers = document.querySelectorAll(".resizer");
let resizingItem = null;

resizers.forEach((resizer) => resizer.addEventListener("mousedown", handleClickResizer));
document.addEventListener("mouseup", cancelActionsItem);

function cancelActionsItem(e)
{
    if (!resizingItem) return;
    
    resizingItem.closest(".item").classList.remove("resizing");
    resizingItem = null;
    document.removeEventListener("mousemove", handleResizeItem);
}

function handleClickResizer(e)
{
    resizingItem = e.target;
    resizingItem.closest(".item").classList.add("resizing");
    
    updateCursorPosition(e);
    document.addEventListener("mousemove", handleResizeItem);
}

function handleResizeItem(e)
{
    const rect = resizingItem.closest(".item").getBoundingClientRect();
    let newStyle = {};
    
    switch (resizingItem.classList[1])
    {
        case "nw":
            newStyle = {
                width: rect.width + lastCursorPosition.x - e.clientX + "px",
                height: rect.height + lastCursorPosition.y - e.clientY + "px",
                left: rect.left - lastCursorPosition.x + e.clientX + "px",
                top: rect.top - lastCursorPosition.y + e.clientY + "px"
            };
            break;
        case "ne":
            newStyle = {
                width: rect.width - lastCursorPosition.x + e.clientX + "px",
                height: rect.height + lastCursorPosition.y - e.clientY + "px",
                top: rect.top - lastCursorPosition.y + e.clientY + "px"
            };
            break;
        case "se":
            newStyle = {
                width: rect.width - lastCursorPosition.x + e.clientX + "px",
                height: rect.height - lastCursorPosition.y + e.clientY + "px"
            };
            break;
        case "sw":
            newStyle = {
                width: rect.width + lastCursorPosition.x - e.clientX + "px",
                height: rect.height - lastCursorPosition.y + e.clientY + "px",
                left: rect.left - lastCursorPosition.x + e.clientX + "px"
            };
            break;
        default:
    }
    Object.assign(resizingItem.closest(".item").style, newStyle);

    updateCursorPosition(e);
}

function updateCursorPosition(e)
{
    lastCursorPosition = { x: e.clientX, y: e.clientY };
}