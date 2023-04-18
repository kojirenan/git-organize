import './Card.css';

const Card = ({ name, image, office}) => {
    return(
        <div className="card">
            <img src={image} alt={name}/>
            <div className="info">
                <h4>{name}</h4>
                <p>{office}</p>
            </div>
        </div>
    )
};

export default Card;