# Usage
## spoiler-snippet

Minimal CSS styles required:
```css

/* Spoiler must make sense */
.spoiler-body { display:none; }

/* Second class can be re-defined in script */
.spoiler-body.its-opened { display:block; }

```

HTML markup:
```html
<!-- trigger -->
<div class="spoiler-trigger"
     data-target=".spoiler-body"
     data-custom-self-class="im-opened"
     data-custom-body-class="some-spoiler-opened-downthere">

     Show me some content

</div>

<!-- body -->
<div class="spoiler-body">

    Some content under spoiler

</div>

```

OR:
```html
<!-- trigger -->
<div class="spoiler-trigger"
     data-target=".spoiler-body"
     data-custom-self-class="im-opened"
     data-custom-body-class="some-spoiler-opened-downthere">

     Show me some content
    
    <!-- nested body -->
    <div class="spoiler-body">
        Some content under spoiler
    </div>

</div>

```

Attributes stands for:
- **data-target**: ***Selector*** of the hidden spoiler body
- **data-custom-self-class**: ***Classname***, that would be added to trigger element on spoiler open
- **data-custom-body-class**: ***Class***, that would be added to <body> tag on spoiler open
