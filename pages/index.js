import {useState} from 'react';


function home() {
return (<div>
  <div><Contador /></div>
  <Caps dado = 'de novo' text = 'texto text'>ola mundo</Caps>xxx
  </div>
)
}
export default home



function Caps(props){
  const textoin = props.children;
  const texto2 = props.dado;
  const texto3 = props.text;
  const textoCap = textoin.toUpperCase();
return (<div>
  <div>{textoCap} - {texto2} - {texto3}</div>
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

