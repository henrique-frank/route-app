import { Link } from 'react-router-dom'

function Contato() {
    return (
      <div className="Contato">
        <h1>Pagina Contato</h1>
        <Link to="/">Home</Link> <br/><br/>
        <Link to="/sobre">Sobre</Link> <br/><br/>
      </div>
    );
  }
  
  export default Contato;
  