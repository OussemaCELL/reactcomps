import logo from './logo.svg';
import './App.css';
import Address from './Components/Profile/Address'
import ProfilePhoto from './Components/Profile/ProfilPhoto'
import FullName from './Components/Profile/FullName';

const style = { color : "red" , paddingBottom : '2cm' , marginLeft : '5cm', marginRight : '5cm' ,backgroundColor:'black' , borderRadius: '15px'}

function App() {
  return (
    <body style={{backgroundColor:'gray', padding:'0.63cm'}}>
      <div className="App" style={style}>
      <p>Full name : <FullName /></p>
      <p> Location : <Address /></p>
      <p> <ProfilePhoto /> </p>  
    </div>
    </body>
  );
}

export default App;

