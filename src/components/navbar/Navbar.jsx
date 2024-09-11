import "./navbar.css";

export const Navbar = () => {
  let nombre = "valentin";
  const saludar = () => {
    console.log("hola " + nombre);
  };

  return (
    <div>
      <h1 style={{ color: "steelblue" }}>{nombre}</h1>
      <button onClick={saludar}>Saludar</button>
    </div>
  );
};
