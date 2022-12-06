# Cli, Git, HTML, CSS

## CSS Box Model

#### 1. Every element in web design is a rectangular box. CSS determines the size, position, and properties (color, background, border size, etc.) of these boxes.
#
#### 2. Every box is composed of four parts (or areas), defined by their respective edges: the content edge, padding edge, border edge, and margin edge.

<img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/CSS-Box-Model.png"
     style="width: 40%; height: auto" />

#### 3. By default in the CSS box model, the `width` and `height` you assign to an element is applied only to the element's content box. If the element has any border or padding, this is then added to the `width` and `height` to arrive at the size of the box that's rendered on the screen. 

#### 2. Size of the box is calculated like this:

<table><tbody><tr><td><strong>Width of box</strong></td><td>width + padding-left + padding-right + border-left + border-right</td></tr><tr><td><strong>Height of box</strong></td><td>height + padding-top + padding-bottom + border-top + border-bottom</td></tr></tbody></table>

#### When its value is a percentage, it defines the width as a percentage of the containing block's width.

#### 3. The `width` on the right of the table is a CSS property that sets an element's width. By default, it sets the width of the content area, but if `box-sizing` is set to `border-box`, it sets the width of the border area.

#### If padding or borders are undeclared, they are either zero or the browser default value.

#### 4. A block element (such as a `<div>`, `<p>`, or `<ul>`, to name a few) will, by default expand to fit the width of its containing, or parent, element (minus any margins it has or padding its parent has).

<img src="https://www.impressivewebs.com/images/block-element-noneed.jpg"
     style="width: 25%; height: auto" />

https://www.impressivewebs.com/width-100-percent-css/#:~:text=It%20seems%20like%20this%20should,and%20your%20problem%20is%20solved.


#### 5. When you give an element a width of 100% in CSS, you’re basically saying “Make this element’s content area exactly equal to the explicit width of its parent — but only if its parent has an explicit width.” So, if you have a parent container that’s 400px wide, a child element given a width of 100% will also be 400px wide, and will still be subject to margins, paddings, and borders — on top of the 100% width setting. The image below attempts to illustrate this:

#### 6. Inline Elements
An inline element has, but may not be limited to, the following characteristics:

- Flows along with text content, thus
- Will not clear previous content to drop to the next line - like block elements
- Is subject to white-space settings in CSS
- Will ignore top and bottom margin settings, but will apply - left and right margins, and any padding
- Will ignore the width and height properties
- If floated left or right, will automatically become a - block-level element, subject to all block characteristics
- Is subject to the vertical-align property

The easiest way to picture an inline element is to think of it as a box that acts like text. What happens, for example, to text that’s not separated by other elements? It flows one letter after the other. If you put an inline element next to text, it will flow next to that text just like another piece of text.

Examples of Inline Elements:
`<a>`, `<span>`, `<b>`, `<em>`, `<i>`, `<cite>`, `<mark>`, and `<code>`.

https://www.impressivewebs.com/difference-block-inline-css/

#### 7. Flexbox

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox

he CSS Flexible Box Layout Model, or "flexbox", is one of the specification in CSS3. It provides for the arrangement of elements on a page such that the elements behave predictably when the page layout must accommodate different screen sizes and different display devices. For many applications, the flexible box model provides an improvement over the block model in that it does not use floats, nor do the flex container's margins collapse with the margins of its contents.

When working with flexbox you need to think in terms of two axes — the main axis and the cross axis. The main axis is defined by the flex-direction property, and the cross axis runs perpendicular to it.

### The main axis
The main axis is defined by flex-direction, which has four possible values:

- row
- row-reverse
- column
- column-reverse

### The cross axis
The cross axis runs perpendicular to the main axis, therefore if your flex-direction (main axis) is set to row or row-reverse the cross axis runs down the columns.

If your main axis is column or column-reverse then the cross axis runs along the rows.

### Start and end lines
If the flex-direction is row and I am working in English, then the start edge of the main axis will be on the left, the end edge on the right.

### The flex container
An area of a document laid out using flexbox is called a flex container. To create a flex container, we set the value of the area's container's display property to flex or inline-flex. As soon as we do this the direct children of that container become flex items. 

- Items display in a row (the flex-direction - property's default is row).
- The items start from the start edge of the - main axis.
- The items do not stretch on the main - dimension, but can shrink.
- The items will stretch to fill the size of the cross axis.
- The flex-basis property is set to auto.
- The flex-wrap property is set to nowrap.

### 