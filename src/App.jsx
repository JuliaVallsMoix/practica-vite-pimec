

import './App.css';
import PackingList from './PackingList';
import Tarjeta from './tarjeta';

const transactions = [{
  id: 1,
  concept: 'Initial balance',
  value: 2000
}, {
  id: 2, 
  concept: 'Delicious Iranian launch',
  value: -28
}];


// Let's create a component to display a list of bank deposits and withdraws.

function TransactionsPanel({ movements, type }) {
  console.log(movements);

   /**
   * If the value of variable 'type' is 'deposit', you should filter movements array to keep only the transactions that have a positive value 
   * 
   * If the value of variable 'type' is 'withdraw', you should filter movements array to keep only the transactions that have a negative value
   */
   
   let filteredMovements = movements;

   /* Possible solution:
   
   if (type === 'deposit') {
    filteredMovements = movements.filter(m => m.value > 0);
   } else if (type === 'withdraw') {
    filteredMovements = movements.filter(m => m.value < 0);
   }
 */

   filteredMovements = movements.filter(function (m) {
    if (type == "all") {
      return true;
    }

    if (type == "deposit" && m.value > 0) {
      return true;
    }

    if (type == "withdraw" && m.value < 0) {
      return true;
    }
  });

   {/* movements is an array of objects. We transform each object into a <p> tag. Its content it's the transacion concept and value */}
   {/* React need an unique id for each element rendered from a list. */}
   {/* We'll use a ternary operator to evaluate m.value. If m.value is greater than 0, backgroundColor should be set to green. Otherwise, it should be set to red.*/}
  
  
  let jsxMovements = filteredMovements.map(m => <p key={m.id} style={{ backgroundColor: m.value < 0 ? 'red' : 'green' }}> {m.concept} {m.value} </p> )

  return <div>
    {jsxMovements}
  </div>
}

function App() {

  const titulo = "React";

  // encima del return tenemos PURO código JavaScript

  return (
    <div>
      <h1 style={{ fontSize: '96px', color: 'green' }}>{`Vamos a estudiar: ${titulo}`}</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet maxime est, quasi rem impedit in consequuntur numquam eligendi esse ipsum distinctio dolores tempora nemo! Ad sed et aliquid error ipsam.</p>

      <Tarjeta titulo="Gato" descripcion="Miau!!"/>
      <Tarjeta titulo="Perro" descripcion="Guau!!"/>
      <PackingList/>
      <TransactionsPanel movements={transactions} type={'withdraw'}/>

    </div>
  )
}

export default App;
