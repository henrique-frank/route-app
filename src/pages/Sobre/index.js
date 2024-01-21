import { Link } from 'react-router-dom'

function Sobre() {
    return (
      <div className="Sobre">
        <h1>Sobre a empresa</h1>
        <span>Essa página é sobre a empresa</span> <br/><br/>
        <Link to="/">Home</Link> <br/><br/>
        <Link to="/contato">Contato</Link> <br/><br/>
      </div>
    );
  }
  
  export default Sobre;
  
  