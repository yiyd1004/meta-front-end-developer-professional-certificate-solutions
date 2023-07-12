# Lab Instructions: Improve your Bio page with Bootstrap

### Introduction

In this graded assessment, you will revise your biographical page to use Bootstrap.

### Goal

-   Use Bootstrap to build your biographical page.

### Objectives

-   Add a Bootstrap Grid to the page.
-   Set up the grid so that the content will layout correctly on both mobile and desktop.
-   Configure your photo to be responsive.
-   Change the Meta profile link to use a Bootstrap button style.

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

**Step 1:** &nbsp; Open `index.html`

**Step 2:** &nbsp; Add a `div` element to the `body` element.

```HTML
<body>
    <div>
    </div>
</body>
```

**Step 3:** &nbsp; Apply the Bootstrap `container` CSS class to the `div`.

```HTML
<body>
    <div class="container">
    </div>
</body>
```

**Step 4:** &nbsp; Add a `div` element to the `container` element.

```HTML
<div class="container">
    <div>
    </div>
</div>
```

**Step 5:** &nbsp; Apply the Bootstrap `row` CSS class to the `div`.

```HTML
<div class="container">
    <div class="row">
    </div>
</div>
```

**Step 6:** &nbsp; Add two `div` elements to the `row` element.

```HTML
<div class="container">
    <div class="row">
        <div>
        </div>
        <div>
        </div>
    </div>
</div>
```

**Step 7:** &nbsp; On the first div element apply the `id` attribute with the value `bio`.

```HTML
<div class="container">
    <div class="row">
        <div id="bio">
        </div>
        <div>
        </div>
    </div>
</div>
```

**Step 8:** &nbsp; Apply the `id` attribute on the second div element with the value `more`.

```HTML
<div class="container">
    <div class="row">
        <div id="bio">
        </div>
        <div id="more">
        </div>
    </div>
</div>
```

**Step 9:** &nbsp; Apply the correct CSS classes so that each div with be 12 columns wide on mobile and 6 columns wide on desktop.

```HTML
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6">
        </div>
        <div id="more" class="col-12 col-lg-6">
        </div>
    </div>
</div>
```

**Step 10:** &nbsp; Apply the `text-center` CSS class on the bio div element.

```HTML
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6 text-center">
        </div>
        <div id="more" class="col-12 col-lg-6">
        </div>
    </div>
</div>
```

**Step 11:** &nbsp; Add an `h1` heading containing your name as the text inside the bio div element.

```HTML
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6 text-center">
            <h1>Jane</h1>
        </div>
        <div id="more" class="col-12 col-lg-6">
        </div>
    </div>
</div>
```

**Step 12:** &nbsp; Add an `img` element for `photo.jpg` below the `h1` element.

```HTML
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6 text-center">
            <h1>Jane</h1>
            <img src="photo.jpg">
        </div>
        <div id="more" class="col-12 col-lg-6">
        </div>
    </div>
</div>
```

**Step 13:** &nbsp; Apply the `img-fluid` CSS class to the img element.

```HTML
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6 text-center">
            <h1>Jane</h1>
            <img src="photo.jpg" class="img-fluid">
        </div>
        <div id="more" class="col-12 col-lg-6">
        </div>
    </div>
</div>
```

**Step 14:** &nbsp; Add an `h2` heading containing the text Favorite Music Artists inside the more div element.

```HTML
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6 text-center">
            <h1>Jane</h1>
            <img src="photo.jpg" class="img-fluid">
        </div>
        <div id="more" class="col-12 col-lg-6">
            <h2>Favorite Music Artists</h2>
        </div>
    </div>
</div>
```

**Step 15:** &nbsp; Add an <em>unordered</em> list of your favorite music artists below the h2 heading..

```HTML
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6 text-center">
            <h1>Jane</h1>
            <img src="photo.jpg" class="img-fluid">
        </div>
        <div id="more" class="col-12 col-lg-6">
            <h2>Favorite Music Artists</h2>
            <ul>
                <li>Metallica</li>
                <li>Bob Marley</li>
                <li>Madonna</li>
                <li>The Beatles</li>
                <li>Pink Floyd</li>
            </ul>
        </div>
    </div>
</div>
```

**Step 16:** &nbsp; Add another `h2` heading containing the text Favorite Films below the favorite music artists list.

```HTML
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6 text-center">
            <h1>Jane</h1>
            <img src="photo.jpg" class="img-fluid">
        </div>
        <div id="more" class="col-12 col-lg-6">
            <h2>Favorite Music Artists</h2>
            <ul>
                <li>Metallica</li>
                <li>Bob Marley</li>
                <li>Madonna</li>
                <li>The Beatles</li>
                <li>Pink Floyd</li>
            </ul>
            <h2>Favorite Films</h2>
        </div>
    </div>
</div>
```

**Stage 17:** &nbsp; Add an <em>ordered</em> list of your top 5 films after the Favorite Films heading.

```HTML
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6 text-center">
            <h1>Jane</h1>
            <img src="photo.jpg" class="img-fluid">
        </div>
        <div id="more" class="col-12 col-lg-6">
            <h2>Favorite Music Artists</h2>
            <ul>
                <li>Metallica</li>
                <li>Bob Marley</li>
                <li>Madonna</li>
                <li>The Beatles</li>
                <li>Pink Floyd</li>
            </ul>
            <h2>Favorite Films</h2>
            <ol>
                <li>Pulp Fiction</li>
                <li>The Godfather</li>
                <li>The Lord of the Rings</li>
                <li>Iron Man</li>
                <li>Inception</li>
            </ol>
        </div>
    </div>
</div>
```

**Stage 18:** &nbsp; Add an anchor tag after the <em>ordered</em> list.

```HTML
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6 text-center">
            <h1>Jane</h1>
            <img src="photo.jpg" class="img-fluid">
        </div>
        <div id="more" class="col-12 col-lg-6">
            <h2>Favorite Music Artists</h2>
            <ul>
                <li>Metallica</li>
                <li>Bob Marley</li>
                <li>Madonna</li>
                <li>The Beatles</li>
                <li>Pink Floyd</li>
            </ul>
            <h2>Favorite Films</h2>
            <ol>
                <li>Pulp Fiction</li>
                <li>The Godfather</li>
                <li>The Lord of the Rings</li>
                <li>Iron Man</li>
                <li>Inception</li>
            </ol>
            <a></a>
        </div>
    </div>
</div>
```

**Stage 18:** &nbsp; Link to your Meta profile in the anchor tag.

```HTML
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6 text-center">
            <h1>Jane</h1>
            <img src="photo.jpg" class="img-fluid">
        </div>
        <div id="more" class="col-12 col-lg-6">
            <h2>Favorite Music Artists</h2>
            <ul>
                <li>Metallica</li>
                <li>Bob Marley</li>
                <li>Madonna</li>
                <li>The Beatles</li>
                <li>Pink Floyd</li>
            </ul>
            <h2>Favorite Films</h2>
            <ol>
                <li>Pulp Fiction</li>
                <li>The Godfather</li>
                <li>The Lord of the Rings</li>
                <li>Iron Man</li>
                <li>Inception</li>
            </ol>
            <a href="https://www.meta.com/user/12"></a>
        </div>
    </div>
</div>
```

**Stage 20:** &nbsp; Set the anchor text to display My Meta Profile.

```HTML
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6 text-center">
            <h1>Jane</h1>
            <img src="photo.jpg" class="img-fluid">
        </div>
        <div id="more" class="col-12 col-lg-6">
            <h2>Favorite Music Artists</h2>
            <ul>
                <li>Metallica</li>
                <li>Bob Marley</li>
                <li>Madonna</li>
                <li>The Beatles</li>
                <li>Pink Floyd</li>
            </ul>
            <h2>Favorite Films</h2>
            <ol>
                <li>Pulp Fiction</li>
                <li>The Godfather</li>
                <li>The Lord of the Rings</li>
                <li>Iron Man</li>
                <li>Inception</li>
            </ol>
            <a href="https://www.meta.com/user/123">My Meta Profile</a>
        </div>
    </div>
</div>
```

**Stage 21:** &nbsp; Apply the button Bootstrap component CSS class to the anchor tag.

```HTML
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6 text-center">
            <h1>Jane</h1>
            <img src="photo.jpg" class="img-fluid">
        </div>
        <div id="more" class="col-12 col-lg-6">
            <h2>Favorite Music Artists</h2>
            <ul>
                <li>Metallica</li>
                <li>Bob Marley</li>
                <li>Madonna</li>
                <li>The Beatles</li>
                <li>Pink Floyd</li>
            </ul>
            <h2>Favorite Films</h2>
            <ol>
                <li>Pulp Fiction</li>
                <li>The Godfather</li>
                <li>The Lord of the Rings</li>
                <li>Iron Man</li>
                <li>Inception</li>
            </ol>
            <a href="https://www.meta.com/user/123" class="btn">My Meta Profile</a>
        </div>
    </div>
</div>
```

**Stage 22:** &nbsp; Apply the primary modifier to the button component.

```HTML
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6 text-center">
            <h1>Jane</h1>
            <img src="photo.jpg" class="img-fluid">
        </div>
        <div id="more" class="col-12 col-lg-6">
            <h2>Favorite Music Artists</h2>
            <ul>
                <li>Metallica</li>
                <li>Bob Marley</li>
                <li>Madonna</li>
                <li>The Beatles</li>
                <li>Pink Floyd</li>
            </ul>
            <h2>Favorite Films</h2>
            <ol>
                <li>Pulp Fiction</li>
                <li>The Godfather</li>
                <li>The Lord of the Rings</li>
                <li>Iron Man</li>
                <li>Inception</li>
            </ol>
            <a href="https://www.meta.com/user/123" class="btn btn-primary">My Meta Profile</a>
        </div>
    </div>
</div>
```
