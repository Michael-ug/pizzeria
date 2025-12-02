import BootstrapCard from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './Card.css';

function Card({ image, title, text, price }) {
  return (<>
    <div className='card'>   
    <BootstrapCard style={{ width: '18rem' }}>
      <BootstrapCard.Img variant="top" src={image} />
      <BootstrapCard.Body>
        <BootstrapCard.Title>{title}</BootstrapCard.Title>
        <BootstrapCard.Text>Ingredientes <br />{text}</BootstrapCard.Text>
      </BootstrapCard.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='precio'>Precio:${price}</ListGroup.Item>
      </ListGroup>
      <BootstrapCard.Body className='botones'>
        <Button variant="secondary">Ver más⏬</Button>
        <Button variant="primary">Añadir 🛒</Button>
      </BootstrapCard.Body>
    </BootstrapCard>
    </div>
  </>
  );
}

export default Card;