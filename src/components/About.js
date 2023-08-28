import React from 'react';

export default function About (props) {
    return <div className= 'container m-5' style={{color: props.mode === 'light'?"black":"white"}}>
        <h2>About Us</h2>
        <p> <strong>TextUtils</strong> is a ReactJs website built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting, and saving, but TextUtils offers much more than simple text drafting and formatting. TextUtils can convert your text to any case in just one simple click of a button. It can extract links and numbers safely from a labyrinth of random text or sophisticated documentation. You can even remove whitespaces from your scripted documents, and wear up your earphones to listen to it, instead of straining your eyes! It does a detailed analyzing of your text, and provides an output of words, and characters, along with reading time as well. The best part of TextUtils is that it is an open source project, as a result, dozens of new features are in the upcoming, which definitely makes it a cut above the rest.
    The most eminent features of the website are as follows : <br/>
    * Analyse Your Text <br/>
    * Free to Use <br/>
    * Browser Compatible <br/>
    </p>

    </div>
  
}

