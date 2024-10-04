import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const checkPalindrome = () => {
    const cleanedInput = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedInput = cleanedInput.split('').reverse().join('');
    setIsPalindrome(cleanedInput === reversedInput);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Verificador de Palíndromos</h1>
        <input type="text" value={input} onChange={handleChange} placeholder="Introduce texto o números" />
        <button onClick={checkPalindrome}>Verificar</button>
        {isPalindrome !== null && (
          <p>{isPalindrome ? 'Es un palíndromo' : 'No es un palíndromo'}</p>
        )}
      </header>
    </div>
  );
}

export default App;
