# Aniro

Animate your page effortlessly.

## What's this?

Animations are always something we shelve off. Aniro is here to help –
you'll only need to scatter some attributes here and your page will be
animated right away.

## Installation

Insert this into your `head`:
```HTML
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/uyouthe/aniro/aniro.min.css">
```
...and this at the end of your `<body>`:
```HTML
<script src="https://cdn.jsdelivr.net/gh/uyouthe/aniro/aniro.min.js"></script>
<script>aniro()</script>
```

## Usage

1. Add the `data-aniro_root` to the element you want the magic to happen inside.
2. Add the `data-aniro` to all the elements you want to be animated.

## Configuration

You can pass the configuration object to the `aniro()` initialization function:
```JS
aniro({
  // the position of the virtual line that triggers the animation, in pixels relative to the viewport top.
  // defaults to document.documentElement.clientHeight / 2
  line: 300,

  // a padding of the animated elements' "hitbox", in pixels
  // defaults to 30
  gap: 30,

  // disable the whole animation when the bottom is reached. Recommended for better performance
  // defaults to false
  disableWhenBottomReached: false
})
```

### Delays

You may add `data-aniro_delay` attribute to delay the animation. The value is milliseconds:

```HTML
<div data-aniro_delay="300"> ... </div>
```

## Naming

It's "animation" plus "yamero" – "stop it" in Japanese. The word is heavily associated with anime culture.

## Author
[Miloslav Voloskov](https://miloslav.website)  
The idea by [nice-naming team](https://github.com/nice-naming)
Gifs are from [30000fps](https://30000fps.com/) 
