# react-modal.js #

ReactJS Modal component (wtitten in ES6 classes)

### What is this repository? ###

* ReactJS component
* v.1.0

### How do I get set up? ###

* add react-modal.js to React as component

### Usage ###

* passing variable as content:
```
var democontent = <div id='content'>some demo text as content for modal 1, passed as variable containing HTML</div>;
React.render(<Modal openbtn={true} opentext="open modal 1" content={democontent} />, document.getElementById('modal'));

```

* passing other react component as content:
```
React.render(<Modal openbtn={true} opentext="open modal 2" content=<TestContent someprop='(test prop value)'/> />, document.getElementById('modal'));

```

* you need to position content with CSS inside modal.

### Demo ###

soon

### Who do I talk to? ###

* dtasic@gmail.com
