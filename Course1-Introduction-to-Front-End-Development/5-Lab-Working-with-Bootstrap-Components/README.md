# Lab Instructions: Working with Bootstrap Components

### Introduction

In this exercise, you will practice adding Bootstrap components to a webpage.

### Goal

-   Update the Little Lemon website to use Bootstrap Components.

### Objectives

-   Add a Badge component to the page to notify customers of the new falafel dish.
-   Add an Alert component to the page to notify customers that the restaurant will be closed on New Year's Day.
-   Add a Button component to the page with the text Order Online.

### Add Bootstrap to your HTML

```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>Little Lemon</title>
        <link href="bootstrap.min.css" rel="stylesheet" />
    </head>
    <body>
        <script src="bootstrap.bundle.min.js"></script>
    </body>
</html>
```

### Instructions

**Step 1:** &nbsp; Open index.html

**Step 2:** &nbsp; Add another div element below the Our Menu text-center div element.

**Step 3:** &nbsp; Add a `class` attribute to the element with the value <`alert alert-info`.

**Step 4:** &nbsp; Add a `role` attribute to the element with the value `alert`.

**Step 5:** &nbsp; Add the message Our restaurant will be closed on New Year's Day, inside the div element.

```HTML
<div class="row">
    <div class="col-12">
        <div class="text-center">
            <h1>Our Menu</h1>
        </div>
        <div class="alert alert-info" role="alert">
            Our resturaunt will be closed on New Year's Day
        </div>
    </div>
</div>
```

**Step 6:** &nbsp; Add a `span` element inside the Falafel h2 element, before the closing h2 tag.

**Step 7:** &nbsp; Add a `class` attribute to the span element, with the value `badge bg-secondary`.

```HTML
<h2>Falafel <span class="badge bg-secondary">New</span></h2>
```

**Step 8:** &nbsp; Add another `div` element after the last row element.

**Step 9:** &nbsp; Add a `class` attribute with the value `row` to the div element.

**Step 10:** &nbsp; Add a `div` element inside the row div element.

**Step 11:** &nbsp; Add a `class` attribute with the value `col-12` to the div element.

**Step 12:** &nbsp; Add another `div` element inside the col-12 div element.

**Step 13:** &nbsp; Add a `class` attribute with the value `text-center` to the div element.

**Step 14:** &nbsp; Add a `button` element inside the text-center div element.

**Step 15:** &nbsp; Add a `type` attribute with the value `button`.

**Step 16:** &nbsp; Add a `class` attribute with the value `btn btn-primary`.

**Stage 17:** &nbsp; Add the text `Order Online` inside the button element.

```HTML
<div class="row">
    <div class="col-12">
        <div class="text-center">
            <button type="button" class="btn btn-primary">Order Online</button>
        </div>
    </div>
</div>
```
