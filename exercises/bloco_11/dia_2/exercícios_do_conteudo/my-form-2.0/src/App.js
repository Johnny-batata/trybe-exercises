import React from 'react';
import Inputs from '/home/leleo/unix_tests/trybe-exercises/exercises/bloco_11/dia_2/exercícios_do_conteudo/my-form-2.0/src/inputs.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.handleToUpperCase = this.handleToUpperCase.bind(this);
    this.removeSpecialcaracteres = this.removeSpecialcaracteres.bind(this);
    this.handleEmail= this.handleEmail.bind(this);
    this.cityNumber=this.cityNumber.bind(this)

    this.state = {
      name: '',
      endereço:'',
      cidade:'',
    }
}    

handleToUpperCase = (( event) => {  
  // return event.target.value.toUpperCase()
  return this.setState(() => ({
      name: event.target.value.toUpperCase()
    }))
  })

removeSpecialcaracteres = ((address) => address.replace(/[^\w\s]/gi, ''))

handleEmail = ((event) => {
  return this.setState(()=> ({
    endereço: this.removeSpecialcaracteres(event.target.value)
  }))
})

cityNumber = ((event) => {
  return event.target.value.match((/^\d/) ? '' : event.target.value)
})

  render(){
  return (
    <Inputs 
    handleToUpperCase={this.handleToUpperCase} 
    handleEmail={this.handleEmail}
    cityNumber={this.cityNumber} />

  );
}
}

export default App;
