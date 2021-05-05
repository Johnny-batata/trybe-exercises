import React, { Component} from 'react';

class Inputs extends Component {
  
  
  render() {
    const { handleToUpperCase, handleEmail, cityNumber } = this.props;
    
    return(
      <form>
        <fieldset>
          <label>
            Nome: 
             <input name="name" type="text" maxLength={40} required={true} onChange={handleToUpperCase} />
          </label>
          <label>
            E-mail: 
             <input name="e-mail" type="text" maxLength={50} required={true} />
          </label>
          <label>
            CPF: 
             <input name="CPF" type="text" maxLength={11} required={true} />
          </label>
          <label>
            Endereço: 
             <input name="Endereço" type="text" maxLength={200} required={true} onChange={handleEmail} />
          </label>
          <label>
            Cidade: 
             <input name="Cidade" type="text" maxLength={40} required={true} onBlur={cityNumber} />
          </label>
          <label>
            Estado: 
             <input name="Estado" type="combo" />
          </label>
        </fieldset>
       </form>
    )
  }
}
export default Inputs
