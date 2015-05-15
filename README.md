# Waffles by Example

Waffles is a mixed fluid and fixed grid system. It is based on a 12-column layout.  

## Getting Started

  Include the waffles grid via a link targ
  ```html
  <link rel="stylesheet" href="">
  ```

  And set a class of `waffles` on the `body` element

  ```html
  <body class="waffles">
    <!-- ... -->
  </body>
  ```

  Technically, this can be whatever the highest-level DOM element that applies
  to your waffles spacing, but `body` is most common.

## Thinking in Waffles

  **Everything is subdivided horizontally by 12 in waffles.**
  
  "But hey, a grid has horizontal division too, buddy!"

  Yes, but there's no concept of a "row" in waffles like there is in, ahem, other...
  grid systems. The content itself defines its own height in this grid.

  (vertical spacing is covered later)

## Laying Out a Page

  Here are some examples of common layouts and how one might achieve them using waffles.

### Three Column Layout

### Sidebar

### Lander Style

## More Subdivision

  Since widths are specified via percentages, you can continue to subdivide your
  elements arbitrarily deep.

### Arbitrary Division

### Even More Division

## Wrapping

  It's easy to tile elements with waffles. As you add elements in a "row"

## Marginal Issues

  Use the `w-alpha` and `w-omega`

## Vertical Spacing

  Elements in waffles are primarily concerned with pushing themselves down away
  from the content above it.

  Use the `w-v`*x* class, where x is 1-12. This creates `margin-top` of a certain
  amount to push


## Fixed Size
  
  There is a fixed grid that follows a similar 12-column grid but does not rely
  on percentages. This functionality is best used when making components where
  buttons and other elements need to stay the same size. Think combobox buttons
  and whatnot.

  To do this, add the `w-fix` class and 
  ```html
  <div class="w-fix w-1">
   smallest
  </div>

  <div class="w-fix w-2">

  </div>

  <div class="w-fix w-3">

  </div>
  ```

## Automatic Sizing

## Resets

  Let's take a deeper look at the `waffles` class 
