Today #Day110 of #365DaysOfCode, I am Building Portfolio Website Using HTML CSS & JavaScript.

# Media Queries

## For small devices

### CSS

Styling container class and nav menu class,

```css
.container {
  margin-left: var(--mb-1);
  margin-right: var(--mb-1);
}
.nav__menu {
  padding: 2rem 0.25rem 4rem;
}
```

styling nav list class and home content class,

```css
.nav__list {
  column-gap: 0;
}
.home_content {
  grid-template-columns: 0.25fr 3fr;
}
```

Styling skills title and qualification data,

```css
.skills__title {
  font-size: var(--normal-font-size);
}
.qualification__data {
  gap: 0.5rem;
}
```

styling services section,

```css
.services__container {
  grid-template-columns: max-content;
  justify-content: center;
}
.services__content {
  padding-right: 3.5rem;
}
.services__modal {
  padding: 0.5rem;
}
```

decreasing project image size,

```css
.project__img {
  width: 200px;
}
```

## For medium devices

In JS add breakpoints as param in Portfolios swiper,

```javascript
 breakpoints:{
    568:{
      slidesPerView: 2,
    }
```

For viewport,

```css
@media screen and (min-width: 768px) {
}
```

styling container and body,

```css
.container {
  margin-left: auto;
  margin-right: auto;
}
body {
  margin: 0;
}
```

styling classes like section, subtitle, header, main, footer container,

```css
.section {
  padding: 6rem 0 2rem;
}
.section__subtitle {
  margin-bottom: 4rem;
}
.header {
  top: 0;
  bottom: initial;
}
.header,
.main,
.footer__container {
  padding: 0 1rem;
}
```

styling nav classes,

```css
.nav {
  height: calc(var(--hearder-height)+ 1.5rem);
  column-gap: 1rem;
}
.nav__icon,
.nav__close,
.nav__toggle {
  display: none;
}
.nav__list {
  display: flex;
  column-gap: 2rem;
}
.nav__menu {
  margin-left: auto;
}
```

styling home section,

```css
.change-theme {
  margin: 0;
}
.home__container {
  row-gap: 5rem;
}
.home__content {
  padding-top: 5.5rem;
  column-gap: 2rem;
}
.home__blob {
  width: 270px;
}
.home__scroll {
  display: block;
}
.home__scroll-button {
  margin-left: 3rem;
}
```

styling about section,

```css
.about__container {
  column-gap: 5rem;
}
.about__img {
  width: 350px;
}
.about__description {
  text-align: initial;
}
.about__info {
  justify-content: space-between;
}
.about__buttons {
  justify-content: initial;
}
```

styling qualification section,

```css
.qualification__tabs {
  justify-content: center;
}
.qualification__button {
  margin: 0 var(--mb-1);
}
.qualification__sections {
  grid-template-columns: 0.5fr;
}
```

styling services section,

```css
.services__icon {
  font-size: 2rem;
}
.services__content {
  padding: 6rem 0 2rem 2.5rem;
}
.services__modal-content {
  width: 450px;
}
```

styling project section,

```css
.portfolio__img {
  width: 320px;
}
.portfolio__content {
  align-items: center;
}
.project {
  text-align: initial;
}
.project__bg {
  background: none;
}
.project__container {
  background-color: var(--first-color-second);
  border-radius: 1rem;
  padding: 3rem 2.5rem 3rem;
  grid-template-columns: 1fr max-content;
  column-gap: 3rem;
}
.project__data {
  padding-top: 0.8rem;
}
```

styling footer section,

```css
.footer__container {
  grid-template-columns: repeat(3, 1fr);
}
.footer__bg {
  padding: 3rem 0 3.5rem;
}
.foooter__links {
  flex-direction: row;
  column-gap: 2rem;
}
.footer__socials {
  justify-self: flex-end;
}
.footer__copy {
  margin-top: 4.5rem;
}
```

## For large devices

In JS,

```javascript
 breakpoints:{
    568:{
      slidesPerView: 2,
    },
    1024:{
      slidesPerView: 1,
    }
  }
```

Media Query,

```css
@media screen and(min-width: 1024px) {
}
```

styling,

```css
.header,
.main,
.footer__container {
  padding: 0;
}
.home__blob {
  width: 320px;
}
.home__social {
  transform: translateX(-6rem);
}
.services__container {
  grid-template-columns: repeat(3, 238px);
}
.portfolio__content {
  column-gap: 5rem;
}
.swiper-portfolio-icon {
  font-size: 3.5rem;
}
.swiper-button-prev {
  left: -3.5rem;
}
.swiper-button-next {
  right: -3.5rem;
}
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: -4.5rem;
}
.contact__fotm {
  width: 460px;
}
.contact__inputs {
  grid-template-columns: repeat(2, 1fr);
}
```

# Conclusion

I completed adding media queries and my portfolio is Fully Responsive.

That brings the completion of my portfolio project, Learned a lot like adding dark mode and scroll to a section.

# Code

1. code

   ![Alt text](1.%20day110%20code.png)

   preview

   ![Alt text](2.%20day110%20preview.png)

# Source: **Bedimcode** [\[Link\]](https://www.youtube.com/watch?v=27JtRAI3QO8&t=81s)

# Author: Dheeraj.y

# Connect with me:

- [My Twitter](https://twitter.com/yssdheeraj)
- [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
- [My GitHub](https://github.com/dheerajy1)
- [My Hashnode](https://dheerajy1.hashnode.dev/)
