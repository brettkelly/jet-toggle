
// hide all content elements on load except the first
const containerSelector = '.jt-toggle-container';

function hideAllContentElements(parent, showFirst) {
    const activeClass = '.jt-content-active';
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

function getPostIdFromClassList(element) {
    const reg = /jt\-button\-/;
    element.classList.forEach(
        function(v, k, lobj) {
            if(v.match(reg)){
                let parts = v.split('-');
                return parts[parts.length -1];
            }
        }
    );
    // nothing here
    console.log('No Post ID found');
    return false;
}

function onButtonClick(event) {
    // hide all content elements
    let container = event.target.closest(containerSelector);
    if(container) {
        hideAllContentElements(container, false);
         
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

    }
);



