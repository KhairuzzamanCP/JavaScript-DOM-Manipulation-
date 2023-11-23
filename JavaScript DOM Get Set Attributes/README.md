<!-- JavaScript DOM Get Set Attributes -->

# **getattribute and setand get className and innertext**

# getattribute

**Example**

`html
<img id="img" src="images is coming soon" alt="" />
`
`

```javaScript
var img = document.getElementById("img");
console.log(img.getAttribute("src"));
```

### Output: images is coming soon

```html
<img id="img" src="images is coming soon" />
```

```javaScript
console.log(img.getAttribute("alt"));
```

### Output: img not showing

# setattribute

**Example**

```html
<img id="img" src="images is coming soon" />
```

```javaScript
img.setAttribute("alt", "img not  showing");
```

## ![Output](/images/img.png)

# classList

```javaScript
img.classList.add("testclass");
console.log(img);

```

### Output:

```html
<img
  id="img"
  src="images is coming soon"
  alt="img is  showing"
  class="testclass"
/>
```

---

# innerText

```html
<p id="hero">My names is Taj</p>
```

```javaScript
var hero = document.getElementById("hero");
console.log(hero.innerText);
```

### Output: My names is Taj

---

# innerHTML

```html
<div id="parent">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>
```

```javaScript
var parent = document.getElementById("parent").innerHTML;
console.log(parent);
```

### Output:

      <div class="child"></div>
      <div class="child"></div>
      <div class="child"></div>


---
