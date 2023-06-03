const Card = (datos) => {
  return (
    <div>
      <h3>La fruta que elegiste es:</h3>
      <button>{datos.fruta}</button>
    </div>
  );
};

export default Card;
