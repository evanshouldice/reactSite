import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? 
        <>
          <input 
            type='text' 
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
          }}
        />
          <div className="flex flex-wrap justify-center">
          <Employee 
            name="Evan" 
            role="Intern" 
            img="https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?cs=srgb&dl=pexels-laura-stanley-1751542.jpg&fm=jpg"
          />
          <Employee 
            name="Evan" 
            role="Intern" 
            img="https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?cs=srgb&dl=pexels-laura-stanley-1751542.jpg&fm=jpg"
          />
          <Employee 
            name="Evan" 
            role="Intern" 
            img="https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?cs=srgb&dl=pexels-laura-stanley-1751542.jpg&fm=jpg"
          />
          <Employee 
            name="Evan" 
            role="Intern" 
            img="https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?cs=srgb&dl=pexels-laura-stanley-1751542.jpg&fm=jpg"
          />
          <Employee 
            name="Evan" 
            role="Intern" 
            img="https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?cs=srgb&dl=pexels-laura-stanley-1751542.jpg&fm=jpg"
          />
          <Employee 
            name="Evan" 
            role="Intern" 
            img="https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?cs=srgb&dl=pexels-laura-stanley-1751542.jpg&fm=jpg"
          />
          <Employee 
            name="Evan" 
            role="Intern" 
            img="https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?cs=srgb&dl=pexels-laura-stanley-1751542.jpg&fm=jpg"
          />
          <Employee 
            name="Evan" 
            role="Intern" 
            img="https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?cs=srgb&dl=pexels-laura-stanley-1751542.jpg&fm=jpg"
          />
          <Employee 
            name="Evan" 
            role="Intern" 
            img="https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?cs=srgb&dl=pexels-laura-stanley-1751542.jpg&fm=jpg"
          />
          </div>
        </>
      :
        <p>You cannot see the employees</p>
      }
    </div>
  );
}

export default App;
