import React, {useState} from 'react'


export default function Textform(props) {

  const handleUpClick = () => {
    // console.log("Upper case was click: " + Text)
    let newText = Text.toUpperCase();
    setText(newText)
    props.showalert("Converted to uppercase", "success")
  }
  
  const handleLoClick = () => {
    // console.log("Upper case was click: " + Text)
    let newText = Text.toLowerCase();
    setText(newText)
    props.showalert("Converted to lowercase", "success")
  }
  
  const handleClearClick = () => {
    // console.log("Upper case was click: " + Text)
    let newText = '';
    setText(newText)
    props.showalert("Text Cleared", "success")
  }

  function countSentences(text) {
    // Use regular expressions to split the text into sentences
    var sentences = text.split(/[.!?]/);
    
    // Remove empty strings from the resulting array
    sentences = sentences.filter(function(sentence) {
      return sentence.trim() !== '';
    });
    
    // Return the number of sentences
    return sentences.length;
  }

  const handleOnChange = (event) => {
    // console.log("On Change: ")
    setText(event.target.value)
  }
  const [Text, setText] = useState('');
  // text = 'new text' //wrong way to change the state
  // setText('new text') //correct way to change the state
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? "white" :'#383549'} }>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? "grey" :'white',
        color: props.mode === 'dark' ? "white" :'#383549'}} 
        id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert To Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert To Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
    </div>
    <div className='container my-3' style={{color: props.mode === 'dark' ? "white" :'#383549'}}>
    <h2>Your Text Summary</h2>
    <p>{(Text.split(" ").length )} words and {Text.length} characters</p>
    <p>{0.008 *( (Text.split(" ").length)  ) } Minutes read</p>
    <p>{countSentences(Text)} Number of Sentence</p>
    <h3>Preview</h3>
    <p>{Text.length>0 ? Text : "Enter Your Text To Preview It."}</p>
    </div>
    </>
  )
}