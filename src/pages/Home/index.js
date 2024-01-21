import { Link } from 'react-router-dom'

function Home() {
    return (
      <div className="Home">
        <h1>Pagina Home</h1>
        <Link to="/sobre">Sobre</Link> <br/><br/>
        <Link to="/contato">Contato</Link> <br/><br/>
      </div>
    );
  }
  
  export default Home;
  