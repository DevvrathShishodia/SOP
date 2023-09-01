import React, { useState } from 'react'
import "./App.css"
import FormPage from './FormPage/FormPage';
import ThankyouPage from './ThankyouPage/ThankyouPage';
function App() {
  const [confirmed, setConfirmed] = useState(true);
  
  return (
<>
{confirmed?<FormPage setConfirmed={()=>setConfirmed(false)}/>:<ThankyouPage setConfirmed={()=>setConfirmed(true)} />}
</>
  );
}

export default App
