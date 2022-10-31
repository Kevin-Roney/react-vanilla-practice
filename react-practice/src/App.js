import './App.css';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  });
  function handleClick() {
    alert(`Hello ${formData.firstName} ${formData.lastName}`);
  }
  return (
    <div className='App'>
      <form onSubmit={handleClick}>
        <input
          onChange={(e) =>
            setFormData({
              firstName: e.target.value,
              lastName: formData.lastName,
            })
          }
        ></input>
        <input
          onChange={(e) =>
            setFormData({
              firstName: formData.firstName,
              lastName: e.target.value,
            })
          }
        ></input>
        <button>Greet Me</button>
      </form>
    </div>
  );
}

export default App;
