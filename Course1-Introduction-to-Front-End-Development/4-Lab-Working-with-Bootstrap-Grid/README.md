# Lab Instructions: Working with Bootstrap grid

### Introduction

In this exercise, you will practice building a webpage using the Bootstrap Grid.

### Goal

-   Create a two-column food menu for Little Lemon.

### Objectives

-   Set up the Bootstrap container.
-   Display the Little Lemon logo in the top center of the webpage using Bootstrap.
-   Display the food menu in two columns using Bootstrap Grid.

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

**Step 2:** &nbsp; Add a div element inside the body element. This div will be the Bootstrap container.

**Step 3:** &nbsp; Add the class attribute to this element with the value container.

```HTML
<body>
    <div class="container">
    </div>
</body>
```

**Step 4:** &nbsp; Add three div elements to the Bootstrap container element. Each of these div elements will be a Bootstrap row. Add the class attribute to this element with the value row.

```HTML
<body>
    <div class="container">
        <div class="row">
        </div>
        <div class="row">
        </div>
        <div class="row">
        </div>
    </div>
</body>
```

**Step 5:** &nbsp; The first row will contain the Little Lemon logo. Add a div element to the first row.

**Step 6:** &nbsp; Add the class attribute to this element with the value col-12. This will take up 12 column spaces.

```HTML
<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
            </div>
        </div>
        <div class="row">
        </div>
        <div class="row">
        </div>
    </div>
</body>
```

**Step 7:** &nbsp; Add another div element to the col-12 element.

**Step 8:** &nbsp; Add the class attribute to this element with the value text-center. This will allow you to center the logo.

```HTML
<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                </div>
            </div>
        </div>
        <div class="row">
        </div>
        <div class="row">
        </div>
    </div>
</body>
```

**Step 9:** &nbsp; Add an image element in the text-center element with the img-fluid class applied to it.

```HTML
<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <img src="logo.png" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="row">
        </div>
        <div class="row">
        </div>
    </div>
</body>
```

**Step 10:** &nbsp; In the second row, add another div element with the class col-12.

```HTML
<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <img src="logo.png" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
            </div>
        </div>
        <div class="row">
        </div>
    </div>
</body>
```

**Step 11:** &nbsp; Add a div element to the column and apply the class text-center.

```HTML
<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <img src="logo.png" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                </div>
            </div>
        </div>
        <div class="row">
        </div>
    </div>
</body>
```

**Step 12:** &nbsp; Inside the element, add an h1 element with the text Our Menu.

```HTML
<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <img src="logo.png" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <h1>Our Menu</h1>
                </div>
            </div>
        </div>
        <div class="row">
        </div>
    </div>
</body>
```

**Step 13:** &nbsp; Add two div elements in the final row.

**Step 14:** &nbsp; Add a class attribute to each element with the value col-12 col-lg-6.

```HTML
<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <img src="logo.png" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <h1>Our Menu</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-lg-6">
            </div>
            <div class="col-12 col-lg-6">
            </div>
        </div>
    </div>
</body>
```

**Step 15:** &nbsp; Add the following elements in the first col-12 col-lg-6 element:

-   An h2 element containing the text Falafel.
-   A paragraph element containing the text Chickpea, herbs, spices.
-   An h2 element containing the text Fried Calamari.
-   A paragraph element containing the text Squid, buttermilk.

**Step 16:** &nbsp; Add the following elements In the second col-12 col-lg-6 element:

-   An h2 element containing the text Pasta Salad.
-   A paragraph element containing the text Lettuce, vegetables, mozzarella.
-   An h2 element containing the text Greek Salad.
-   A paragraph element containing the text Cucumbers, onion, feta cheese.

```HTML
<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <img src="logo.png" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <h1>Our Menu</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-lg-6">
                <h2>Falafel</h2>
                <p>Chickpea, herbs, spices.</p>
                <h2>Fried Calamari</h2>
                <p>Squid, buttermilk.</p>
            </div>
            <div class="col-12 col-lg-6">
                <h2>Pasta Salad</h2>
                <p>Lettuce, vegetables, mozzarella.</p>
                <h2>Greek Salad</h2>
                <p>Cucumbers, onion, feta cheese.</p>
            </div>
        </div>
    </div>
</body>
```
