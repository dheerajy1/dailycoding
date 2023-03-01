Today #Day135 of #365DaysOfCode, I am Building Portfolio Website Using HTML CSS & JavaScript.

# Social Icon

```xml
 <nav style="--count: 4;">
        <ul>
           <li style="--index: 1;">
              <a href="#" target="_blank" rel="noreferrer noopener">
                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
      Socials</span>
              </a>
            </li>
        </ul>
    </nav>
```

ul

```css
ul {
    padding: 0;
    display: inline-grid;
    grid-auto-flow: column;
    list-style-type: none;
    grid-template-columns: auto repeat(3, calc((var(--active, 0) * 130px) + 10px));
    transition: grid-template-columns 0.35s var(--ease-elastic-1);
}
```

a tag

```css
a {
    background: hsl(0 0% 60% / 0.18);
    display: inline-block;
    padding: var(--size-2) var(--size-4);
    border-radius: var(--radius-5);
    margin: 0;
    color: var(--gray-0);
    font-size: var(--font-size-1);
    font-weight: var(--font-weight-0);
    backdrop-filter: blur(40px);
    transition: color 0.2s, background 0.2s;
 }
```

svg element,

```css
svg {
    height: 24px;
    aspect-ratio: 1;
    fill: currentColor;
 }
```

span element,

```css
span {
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-template-columns: 16px 1fr;
  gap: 0.25rem;
}
```

li tag,

```css
li {
  display: grid;
  justify-content: end;
  z-index: calc(var(--count) - var(--index));
}
```

# twitter icon

```xml
<li style="--index: 2;">
<a href="https://twitter.com/jh3yy" target="_blank" rel="noreferrer noopener">
  <span>
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
    Twitter
  </span>
</a>
</li>
```

# Conclusion

I finished analyzing the code and made an effort to comprehend the CSS section. I also copied the necessary CSS variables instead of importing from a URL as the author did.

# Code

1. code
    
    ![Alt text](1.%20day135%20code.png)
    
    preview
    
    ![Alt text](2.%20day135%20preview.png)
    

# Source: grid-template-links [\[Link\]](https://codepen.io/jh3y/pen/MWBmmxb)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)