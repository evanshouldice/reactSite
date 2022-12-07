import '../index.css';
import Employee from '../components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
import Header from '../components/Header';

function Employees() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: "Evan", 
        role: "Developer", 
        img: "https://images.pexels.com/photos/1751542/pexels-photo-1751542.jpeg?cs=srgb&dl=pexels-laura-stanley-1751542.jpg&fm=jpg"
      },
      {
        id: 2,
        name: "Bob", 
        role: "Manager", 
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 3,
        name: "Andrea", 
        role: "Developer", 
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 4,
        name: "Justin", 
        role: "UI Designer", 
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 5,
        name: "Annie", 
        role: "Front-end Developer", 
        img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 6,
        name: "Hannah", 
        role: "Project Manager", 
        img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ]
  );

  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee) => {
      if(id == employee.id){
        return{...employee, name: newName, role: newRole};
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img){
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img
    }
    setEmployees([...employees, newEmployee])
  }

  const showEmployees = true;
  return (
    <div className="">
      {showEmployees ? 
        <>
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              const editEmployee =  (
                <EditEmployee 
                      id={employee.id}
                      name={employee.name} 
                      role={employee.role} 
                      updateEmployee={updateEmployee}
                  />
              );
              return (
                <Employee 
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
              
            })}
          </div>
          <AddEmployee newEmployee={newEmployee}/>
        </>
      :
        <p>You cannot see the employees</p>
      }
    </div>
  );
}

export default Employees;
