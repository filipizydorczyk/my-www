This is repo with my website that is currently in development stage. It is going to look like this:

![](./mockups/main.png)
![](./mockups/portfolio.png)

# Build

-   `npm install` - install dependencies
-   `npm run build` - builds static html files
-   `npm run serve` - starts local server with last website build

# Code conduct

## Typescript

1. Each segment should be covered with `section` tag with `id`

```html
<section id="id"></section>
```

2. In code use camel case

## Styles

1. Use BEM naming convention for calss attribute
2. In scss files keep given order: rules, css classes, html tags, media selectors

```scss
&__example {
    color: $white;

    &--black {
        color: $black;
    }

    & img {
        width: 100%;
    }

    @media (max-width: $text-breakpoint) {
        font-size: $font-size-200;
    }
}
```

3. Join maped element with new lines

```js
`<div class="stepped-list__container">
    ${elements.map((element) => `<div></div>`).join("\n")}
</div>`;
```

# Resources

Slider that is used in this project is [siema slider](https://github.com/pawelgrzybek/siema).
Logos were searched on [seek logo](https://seeklogo.com/), [wikimedia](https://commons.wikimedia.org) or on companies websites.
