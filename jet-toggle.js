
const containerSelector = ".jt-toggle-container";
const buttonSelector = ".jt-button";
const activeClass = "jt-content-active";
const buttonClassPattern = /^jt-button-[0-9]+$/;

/*
 * parent = toggle container
 * sets the active class on the first child matching the selector
 */
function activateFirstContentElement(parent) {
    let selector = ":scope .jt-content";
    parent.querySelector(selector).classList.add(activeClass);
}
/*
 * parent = the containing element to work within
 * showFirst = boolean; true to not hid the first child, false to hide them all
 */
function hideAllContentElements(parent, showFirst) {
    let selector = ":scope .jt-content";
    parent.querySelectorAll(selector).forEach(
        function(item){
            item.classList.remove(activeClass);
        }
    );
    if(showFirst) {
        activateFirstContentElement(parent);
    }
}

/*
 * element = the element whose classList property we're checking
 * expects to find .jt-button-[number], which is the post id.
 * return that id if found, false if not.
 */
function getPostIdFromClassList(element) {
    let retid = null;
    element.classList.forEach(name => {
        if(buttonClassPattern.test(name)){
            let parts = name.split("-");
            //return parts[parts.length -1];
            retid = parts[parts.length -1];
        }
    });
    if(retid){
        return retid;
    }
    return false;
}

/*
 * event handler for element clicks
 */
function onButtonClick(event) {
    // hide all content elements
    let container = event.target.closest(containerSelector);
    if(container) {
        hideAllContentElements(container, false);
        let pid = getPostIdFromClassList(event.target.closest(buttonSelector));
        if(pid) {
            let selector = ":scope .jt-content-"+pid;
            container.querySelector(selector).classList.add(activeClass);
        }
    }
}

document.addEventListener("DOMContentLoaded", 
    function(event) {
        // select all toggle containers
        let containers = document.querySelectorAll(containerSelector);
        containers.forEach(
            function(element) {
                hideAllContentElements(element, true); 
            }
        );
        
        // add click listener to all buttons
        let buttons = document.querySelectorAll(buttonSelector);
        buttons.forEach(
            function(element) {
                element.addEventListener("click",onButtonClick);
            }
        );

    }
);

