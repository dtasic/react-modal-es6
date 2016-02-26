# react-modal.js #

ReactJS Modal component (ES6 class)

### What is this repository? ###

* ReactJS component
* v.1.0

### How do I get set up? ###

* add react-modal.js to React as component

### Usage ###

* param openbtn={bool} - set if component will show button for opening modal. If set to false (or absent) modal will open automatically.
* param opentext={bool} - text for open button
* param content={variable or other component} - content for modal

* passing content to modal:
```
var democontent = <div id='content'>some demo HTML</div>;
<Modal
  openbtn={true}
  opentext="open modal 1"
  content={democontent}
/>

```

* you need to position content with CSS inside modal.

### Demo ###

http://codepen.io/dtasic/pen/zvJvRj

### Who do I talk to? ###

* dtasic@gmail.com
