import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        characters:[]
    };

    render() {
       
       const characters = this.state.characters;

        return(
            <div className="container">
            <h1>React Tutorial - Customer Information</h1>
            <P>React Features - Simple Component, Class Component, Props, State, Working with Form Data and Pulling
               data in from an API </P>
                <Table 
                characterData={characters}
                removeCharacter={this.removeCharacter}
                />
                <h3>Add New Record</h3>
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        );

    }

    removeCharacter = index => {

        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }
///... " ES6 Spread Operator"
    handleSubmit = character => {
        this.setState({
            characters: [...this.state.characters, character]
        });
    }
}

export default App;