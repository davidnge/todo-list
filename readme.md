# A to-do list made in html, css & js

Here's the [Demo](http://codepen.io/davidnge/pen/xVEabV)

This to-do list was created with the following spec:

- To be able to create, delete/check off & edit a task on the list
- All the to do items can be re-arranged as desired
- There is a counter for which the number of tasks you have on the list

## Key learnings

1. On my numerous attemps to google for ways manipulate the [DOM](https://en.wikipedia.org/wiki/Document_Object_Model) with plain javascript, all the times there are much simpler way to do the same thing using Jquery. 

For example:

There is a js method which allows you to set attributes to the html elements, i.e `element.setAttribute(attribute, value)`. If I want to set multiple attributes at once I would need to have multiple lines of the same code, quite repetitive as you can see, and of course the better way is to create a function for it. 

i.e

```
function setAttributes (element, attributes) {
    for (var key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}
setAttributes(element, {'attr1':'val1', 'attr2': 'val2'});
```

While with JQuery, there is a simplified method `.attr`

```
$( "#greatphoto" ).attr({
  attr1: "val1",
  attr2: "val2"
});
```

There are many more such occasions, but the good thing about learning it the hard way is that you get to learn the actual DOM api javascript is using to manipulate your webpages.


2. You can basically manipulate every aspect of the webpage through getting input from the user's interaction, i.e if you press a key or click on something, or updating a list in this case. Not surprising of course, but in this project I have explored a few implementation of the `addEventListener` and in particular `MutationObserver` (to observe if an element is updated), that would really come in handy for future projects.

3. Building on top of what others have done, and learn from them. The point to doing this mini project was to really understand how plain javascript can be used manipulate the web page, and there are many good folks out there who have invented a lot of good wheels that I could use. In this specific case, I was reading quite a few articles written on drag and drop elements, and to build how I want it to be would be fairly complex for me. Fortunately I found [sortable](https://github.com/RubaXa/Sortable), which is a library built using plain js, and uses the same DOM api to create those drag and drop interactions. Reading and using their code alone was super beneficial to understanding the how elegant drag and drop can be made.

In case you missed the demo, [here](Here's the [Demo](http://codepen.io/davidnge/pen/xVEabV) it is again.