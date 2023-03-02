import React from 'react';

function Form() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="Author" />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
