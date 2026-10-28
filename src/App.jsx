import './syle.css';
import HeaderContainer from './components/HeaderContainer';
function App() {





  return (
    <>
 <HeaderContainer/>
<formContainer/>
<listContainer/>



  <h1><section id="formContainer">
    <h1>
      Student Directory
    </h1>
    <small>
      Show list of Student
    </small>
  </section>
  

  <section id="formContainer">
    <form id="studentform">

      <div className="input-field">
        <label htmlFor="name">Student Name</label>
        <input type="text" name="name" id="name" placeholder="Enter student name"/>
      </div>

      <div className="input-field">
        <label htmlFor="program">Program</label>
        <input type="text" name="program" id="program" ></input>
      </div>

      <div>
        <button type="submit"> Add Student </button>
      </div>

    </form>
  </section>
  
  <section id="listContainer">
    
  </section>

   </h1>
    </>
  )
}

export default App
