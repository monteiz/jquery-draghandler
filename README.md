# jquery-draghandler
A simple high-performance jQuery plugin that helps you dealing with ```dragenter``` and ```dragleave``` events.

<h3>Usage</h3>

```javascript
$(selector).draghandler({
	onDragEnter: function() {
		// $(this).doSomething();
	},
	onDragLeave: function() {
		// $(this).doSomethingElse();
	}
});
```

<h3>The problem</h3>
The ```dragleave``` event of an element is fired when hovering a child element of that element.

Consider the following DOM structure:

[IMAGE]

You want to handle the ```dragenter``` and the ```dragleave``` events for the element <b>B</b> (child of <b>A</b>).

At first, you would write something like that:

```javascript
$(B).on("dragenter", function() {
		// $(this).doSomething();
});

$(B).on("dragleave", function() {
		// $(this).doSomething();
});
```

Soon you realize that when hovering the element <b>C</b>, the ```dragleave``` event is fired for the element <b>B</b>, which is something you certainly do not want.

<h3>Issues with other solutions</h3>

Until now, one possible solution to this problem was the following CSS workaround:

```css
C * {
  pointer-events: none;
}
```

That is: tells the browser to prevent <b>C</b> to fire any event. The drawback is that you completely lose event control over the <b>C</b> element, which is - again - something you certainly do not want.

<h3>jquery-draghandler: a different approach</h3>
<b>jquery-draghandler</b> uses a different logic.

Consider again the following DOM structure:

[IMAGE]

The logic is simple: when dragging into the element <b>B</b>, jquery-draghandler intercept the ```dragenter``` event for <b>B</b>. So far so good. The difference is when dragging out the element <b>B</b>. Here, jquery-draghandler does not intercept the ```dragleave``` for the element <b>B</b>, but rather the ```dragenter``` for the element <b>A</b>. Just that.

Hence, jquery-draghandler does not effect execution performances because it does not manipulate the DOM in any way. It just faces the problem with a different logic.



