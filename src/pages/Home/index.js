import { Link } from 'react-router-dom'

function Home() {
    return (
      <div className="Home">
        <h1>Pagina Home</h1>
        <Link to="/sobre">Sobre</Link> <br/><br/>
        <Link to="/contato">Contato</Link> <br/><br/>
      
        <hr/>

        <Link to="/produto/123">Acessar Produto 123</Link>

      </div>

      
    );
  }
  
  export default Home;
  