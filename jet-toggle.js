
const containerSelector = '.jt-toggle-container';
const buttonSelector = '.jt-button';
const activeClass = '.jt-content-active';
const buttonClassPattern = /jt\-button\-/;

/*
 * parent = the containing element to work within
 * showFirst = boolean; true to not hid the first child, false to hide them all
 */
function hideAllContentElements(parent, showFirst) {
    let selector = ':scope .jt-content';
    if(showFirst) {
        selector += ':not(:first-child)';
    }
    parent.querySelectorAll(selector).forEach(
        function(item){
            item.classList.remove(activeClass);
        }
    );
}
/*
 * element = the element whose classList property we're checking
 * expects to find .jt-button-[number], which is the post id.
 * return that id if found, false if not.
 */
function getPostIdFromClassList(element) {
    element.classList.forEach(
        function(v, k, lobj) {
            if(v.match(buttonClassPattern)){
                let parts = v.split('-');
                return parts[parts.length -1];
            }
        }
    );
    // nothing here
    console.log('No Post ID found');
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
        let pid = getPostIdFromClassList(event.target);
        if(pid) {
            let selector = ':scope .jt-content-'+pid;
            container.querySelector(selector).classList.add(activeClass);
        }
    } else {
        console.log('onButtonClick container not found');
    }
}

document.addEventListener('DOMContentLoaded', 
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
                element.addEventListener('click',onButtonClick);
            }
        );

    }
);

