
import React, { useEffect, useRef } from "react";

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
    <div className="container" style={{'marginTop' : '20px'}}>
      <label htmlFor="phone">Phone Number:</label>
      <input
        type="text"
        id="phone"
        onInput={phoneNumberFormat}
        ref={inputRef}
      />
      <div>
         <label htmlFor="phone">(123) 456-7890</label>   
      </div>
    </div>
  );
}

export default PhoneForm;
