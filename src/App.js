import React from 'react';
import './App.css';
import QRCode from "react-qr-code";

function App() {

  const [inputValue, setInputValue] = React.useState('')

  return (
    <div className="App">
      <h1>React QR code</h1>

      <div style={{ alignItems: 'center' }}>
        <div>
          <input 
            type='text' 
            placeholder='Enter link for QR code'
            onChange={(e) => setInputValue(e.target.value)}
            style={{ width: 270, height: 30, paddingLeft: 10 }}
          />
        </div>

        <div style={{ marginTop: 30 }}>
          <QRCode 
            value={inputValue}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
