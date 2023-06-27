// import {Button,Row, Col, Container, Form,Card} from 'react-bootstrap';
import React, { useEffect, useRef } from "react";
import Navigation from '../src/pages/Navbar';
import '../style.css';

function PhoneForm() {
  const inputRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;
    input.addEventListener("input", phoneNumberFormat);

    return () => {
      input.removeEventListener("input", phoneNumberFormat);
    };
  }, []);

  const phoneNumberFormat = () => {
    const input = inputRef.current;
    const value = input.value;
    const caretPosition = input.selectionStart;

    let formatted = "";
    let digits = value.replace(/\D/g, "");

    // Here we check condtions 
    if (digits.length < 4) {
      formatted = "" + digits;
    } else if (digits.length < 7) {
      formatted =
        "(" +
        digits.substring(0, 3) +
        ") " +
        digits.substring(3);
    } else {
      formatted =
        "(" +
        digits.substring(0, 3) +
        ") " +
        digits.substring(3, 6) +
        "-" +
        digits.substring(6, 10);
    }
    input.value = formatted;
    // We adjusted caret positon base on the added and remved characters
    let caretOffset = formatted.length - value.length;
    let newCaretPosition = caretPosition + caretOffset;
    // Here we are seted caret position back to the adjusted position
    input.setSelectionRange(newCaretPosition, newCaretPosition);
  };

  return (
     <>
      <Navigation />
      <div className="container">
        <div className='inputParent'>
          <div className="div">
              <h2>React</h2>
            <input
              type="text"
              id="phone"
              onInput={phoneNumberFormat}
              ref={inputRef}
              placeholder="Phone Number..."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PhoneForm;
