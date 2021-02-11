## A simple vanilla JS thingie for making toggle-able elements using JetEnging Listings.

### This will be of use to almost nobody.

Three components: a button or clickable element, a corresponding content area, and a container that holds the whole thing.

Clicking a button will hide all content areas and show the related content area.

All of these elements will be scoped to a single `section` element.

All buttons are classed with `jt-button` and content areas with `jt-content`, as well as `jt-button-[post id]` and `jt-content-[post id]`.


The containing listing grid element will have the `jt-toggle-container` class.

### CSS

Rule to hide all elements by default and unhide the first in each section. This will govern behavior on page load.

* `jt-content`  -- hidden
* `jt-content-active` -- visible


