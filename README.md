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

## How to use this thing

Your layout will have two corresponding listing grids: buttons and content. Apply the `.jt-toggle-container` class to the section or column that houses them both.

In the button Listing, set the CSS classes to dynamic using the Post ID. Using the "before" area, assign:

`.jt-button .jt-button-`

Assuming your post ID is 123, the end result is that your button will have these classes:

`jt-button .jt-button-123`

Do exactly the same thing in your content Listing. Set CSS classes to dynamic with Post ID and the "before" field to:

`.jt-content .jt-content-`

Resulting in your content container having these classes:

`jt-content .jt-content-123`

### Cool thing

The event handling that controls the visibility of each content area will be limited to the section in question. Slick.
