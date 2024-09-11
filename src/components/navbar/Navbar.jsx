import "./navbar.css";
/* import logo from "../../assets/buford.webp"; */

export const Navbar = () => {
  let nombre = "valentin";
  const saludar = () => {
    console.log("hola " + nombre);
  };

  return (
    <div>
      {/*       <img src={logo} alt="" /> */}
      <img
        src="https://res.cloudinary.com/dpjbuipgk/image/upload/v1726088793/Natural-chadi-logo_p99fsd.jpg"
        alt=""
      />
      <h1 style={{ color: "steelblue" }}>{nombre}</h1>
      <button onClick={saludar}>Saludar</button>
    </div>
  );
};
