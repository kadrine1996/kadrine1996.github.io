# kadrinelee.github.io

## Overview

# 
For my final project, I was tasked to create a website where I had to sell a product of my choosing. I decided to sell my actual photography, giving each photo a card and an image shortcut e.g.:

```
   
    name: 'Going Nowhere',
    category: 'Abandoned Series',
    imageUrl: 'images/item-1.jpg',
    description:
      'Fascinated by Windsor being a border city, imaged is a photograph of a common transport area.',
    price: 20
  
  ```

  >I used JavaScript to categorize items in a menu, so each time the user clicks on a category those specific photos populate:

  ```
   getCategory: function(category) {
    var categoryArray = [];
    var categoryList = this.getArrays();

    for (var i = 0; i < categoryList.length; i++) {
      if (categoryList[i].category === category) {
        categoryArray.push(categoryList[i]);
      }
    }
    return categoryArray;
  }
};

Available in my script.js file
```
#
## CSS
## The design layout

I used CSS to design the layout of my website,  including use of `flexbox` layout. `Flex box` played a significant role in designing a responsive website, since it creates a responsive layout to be arranged depending on the screen size.

For example, using flexbox this is the design layout to fit my laptop screen


![website layout on laptop](image/website_desktop(1).jpg)
<br/>

![website layout on laptop](image/website_desktop(2).jpg)

<br/>

> The website layout on my iPhone 11:

![website layout on laptop](image/mobile(1).PNG)

![website layout on laptop](image/mobile(2).PNG)

>Peruse my style.css to see styling I used to achieve my website design.

For links to imported libraries:

- https://fonts.google.com for different fonts throughout my website

- https://fontawesome.com/ for my social media icons

- https://colorhunt.co/ for use of colour codes 

# 
# HTML Form Validation

I included two types of client-side validation forms on my website. The first form is newsletter using the POST method:

```
<form action="https://formspree.io/f/<ID>" method="POST">
```
> I used https://formspree.io/ to receive subscription emails, a notification is automatially sent to my inbox

In my HTML I included regex to validate user-email input before it reaches a server:

```
[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$
```

When an email with the innocrect pattern is inputted, this pops up:

![News Letter](image/newsletter(1).jpg)
<br>
<br/>
The contact form in the https://kadrinelee.github.io/contact.html/ has the same type of validation, including use of JavaScript to dynamically reveal a box if the user picks a specific radio option.


>This form was styled using CSS Bootstrap, available at https://getbootstrap.com/


![contact form](image/contact_us(2).jpg)

#

# Summary

My website was built using `HTML`, `CSS`, and `JavaScript`. For further explanation please view my posted files to see how I achieved my website design and functionality! This was the first website I ever created, more to come!
