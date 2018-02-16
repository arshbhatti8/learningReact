import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';
import './style/Person.css';


class App extends Component {
  state = {
    persons: [
        { id:'qwerty1',name:'Sanjot',age:20},
        { id:'qwerqwe2',name:'Harry',age:21},
        { id:'qweqy3',name:'Avdeep',age:22}

        ],
      showPersons:"false"

  };

  nameChangedHandler = (event,id) => {

      const personIndex=this.state.persons.findIndex(p=> {
         return p.id === id;
      });

      const person={
          ...this.state.persons[personIndex]
      };

      person.name= event.target.value;

      const persons={...this.state.persons};
      persons[personIndex]=person;

      this.setState( {persons:persons} );
  };

  togglePersonsHandler = () =>
  {
      const doesShow=this.state.showPersons;
      this.setState({showPersons :! doesShow});
  };
  deletePersonHandler =(personIndex) =>
  {
    const persons= this.state.persons.slice();
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  };
  render() {
    const style= {
        backgroundColor:"green",
        font:"inherit",
        border:"1px solid blue",
        padding: "8px",
        cursor:"pointer",

      };

    let persons=null;

    if (this.state.showPersons){
        persons= (
            <div>
                {
                    this.state.persons.map((person,index) => {
                    return <Person
                        click={ () => this.deletePersonHandler(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={(event) => this.nameChangedHandler(event, person.id)} />
                })}
            </div>
        );
        style.backgroundColor='red';

        
    }
    let classes=[];
    if(this.state.persons.length<=2){
        classes.push('red'); //classes equals red
    }
      if(this.state.persons.length<=1) {
          classes.push('bold'); //classes equals red and bold
      }



          return (
        <div className="App">
            <h1>This is the main app Component</h1>
            <p className={classes.join(' ')}>This will change with the state</p>
            <button
                style={style}
                onClick={this.togglePersonsHandler}>Toggle NameList</button>
            {persons}


        </div>

    );
  }
}

export default App;
