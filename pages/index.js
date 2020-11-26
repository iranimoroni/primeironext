import {useState} from 'react';


function home() {
return (<div>
  <div><Contador /></div>
  <Caps>ola mundo - </Caps>xxx
  </div>
)
}
export default home



function Caps(props){
  const textoin = props.children;
  const textoCap = textoin.toUpperCase();
return (<div>
  <div>{textoCap}</div>
  </div>
)
}

function Contador(props){
  const [contador,setContador] = useState(1);
  function somaContador(){
    setContador(contador + 1);
  }
  return (
    <div>
    <button onClick={somaContador}>valendo - {contador}</button>
    </div>
  )
}

