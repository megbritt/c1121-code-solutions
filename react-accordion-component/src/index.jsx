import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const data = [
  {
    id: '1',
    subject: 'Harry Potter',
    details:
      "You don't understand You're a legend, man To us all! Every son and daughter- Safe! From You- Know - Who All because of you! You were small, But I wonder if you can recall... Long story short, This guy, (Whispered) Voldemort Was super cruel... Voldemort ? Shhh!"
  },
  {
    id: '2',
    subject: 'Granger Danger',
    details:
      "With Hermione Granger... What? What the heck is this? Do you expect me to sing about her? Don't care about her It's just a little make-up Draco, wake up! I'm mistaken I feel so queasy But I can't let it show... She'd laugh, poor Weasley Come on Ron... Draco... You gotta let it go You gotta let it go... Here I am, face to face With a situation (I want to sing about her) I never thought I'd ever see (Sing about her) It seems like my eyes have been transfigured"
  },
  {
    id: '3',
    subject: "Goin' Back to Hogwarts",
    details:
    "I'll cast some spells With the flick of my wand Defeat the Dark Arts Yeah, bring it on And do it all With my best friend, Ron 'Cause together we're totally awesome We gotta get back to Hogwarts We gotta get back to school We gotta get ourselves to Hogwarts Where everything is magi-cool Back to witches and wizards and magical beastsTo goblins and ghosts and to magical feasts"
  }
];

ReactDOM.render(<Accordion data={data} />, document.querySelector('#root'));
