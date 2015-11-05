# react-modal.js #

ReactJS Modal component (wtitten in ES6 classes)

### What is this repository? ###

* ReactJS component
* v.1.0

### How do I get set up? ###

* add react-modal.js to React as component

### Usage ###

* param openbtn={bool} - set if component will show button for opening modal. If set to false (or absent) modal will open automatically.
* param opentext={bool} - text for open button
* param content={variavle or other component} - content for modal

* passing variable as content:
```
var democontent = <div id='content'>some demo HTML</div>;
<Modal
  openbtn={true}
  opentext="open modal 1"
  content={democontent}
/>

```

* passing other react component as content:
```
<Modal
  openbtn={true}
  opentext="open modal 2"
  content=<TestContent someprop='(test prop value)'/>
/>

```

* you need to position content with CSS inside modal.

### Demo ###

http://codepen.io/dtasic/pen/zvJvRj

### Who do I talk to? ###

* dtasic@gmail.com
