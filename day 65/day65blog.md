Today #Day65 of #100DaysOfCode, I added social links using HTML, and CSS to my project.

# HTML

Created div's and gave class names to pick and add styles in CSS.

```xml
<div class="container-gradient">
<div class="container-socials">
<div class="linkedin">
<a href="http://www.linkedin.com/in/dheerajy1/" target="_blank">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="linkedin-icon">
<path
d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
</svg></a>
</div>
```

and then I added the SVG code of each social icon.

In the end, I wrapped the social icons in the HTML element and gave my social links.

# CSS

Let's style to the socials icons,

Create a container with width and height so that the social icons will be placed evenly in this container,

```css
.container-socials {
  background-color: #ffffff;
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 25em;
  height: 5em;
}
```

Now pick the clash of the LinkedIn icon and give it a height and width so that of your choice

```css
.linkedin-icon,
.github-icon,
.twitter-icon,
.hashnode-icon {
  height: 2.6em;
  width: 2.6em;
}
```

Let's translate in the white direction when you hover it

```css
.linkedin-icon:hover,
.github-icon:hover,
.hashnode-icon:hover {
  transform: translateY(-10px);
}
```

## Finally,

Completed styling the social media links

# Conclusion

I completed adding the social links to my backup calculator project using HTML and CSS.

# My Code

1.  Code and preview

    ![Alt text](1.%20day65%20code%20and%20preview.png)

# **Author: Dheeraj.y**

# Connect with me:

- [**My Twitter**](https://twitter.com/yssdheeraj)
- [**My LinkedIn**](https://www.linkedin.com/in/dheerajy1/)
- [**My GitHub**](https://github.com/dheerajy1)
- [**My Hashnode**](https://dheerajy1.hashnode.dev/)
