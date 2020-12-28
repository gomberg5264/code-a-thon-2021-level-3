import './App.css';

// https://flaviocopes.com/how-to-format-number-as-currency-javascript/
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

function App() {
  return (
    <div>
      <h1 id="title">Tip Calculator (React)</h1>
      <div className='costArea'>
        <label for="mealCost">Meal Cost</label>
        <input type="number" id="mealCost" min="0" value="" autofocus />
      </div>
      <table cellSpacing="0">
        <tr>
          <th className='rating'>Rating</th>
          <th className='tip'>Tip</th>
          <th className='amount'>Amount</th>
        </tr>
        <tr>
          <td className='rating'>Poor</td>
          <td className='tip'>10%</td>
          <td className='amount' id="tip10">$0.00</td>
        </tr>
        <tr>
          <td className='rating'>OK</td>
          <td className='tip'>15%</td>
          <td className='amount' id="tip15">$0.00</td>
        </tr>
        <tr>
          <td className='rating'>Good</td>
          <td className='tip'>18%</td>
          <td className='amount' id="tip18">$0.00</td>
        </tr>
        <tr>
          <td className='rating'>Great</td>
          <td className='tip'>20%</td>
          <td className='amount' id="tip20">$0.00</td>
        </tr>
        <tr>
          <td className='rating'>Excellent</td>
          <td className='tip'>22%</td>
          <td className='amount' id="tip22">$0.00</td>
        </tr>
      </table>
    </div>
  );
  
  function updateTipAmounts() {
    // grab the meal cost from the page
    let mealCost = document.getElementById("mealCost").value;
    // Populate the table with tip amounts
    document.getElementById('tip10').innerHTML = formatter.format(mealCost * 0.10);
    document.getElementById('tip15').innerHTML = formatter.format(mealCost * 0.15);
    document.getElementById('tip18').innerHTML = formatter.format(mealCost * 0.18);
    document.getElementById('tip20').innerHTML = formatter.format(mealCost * 0.20);
    document.getElementById('tip22').innerHTML = formatter.format(mealCost * 0.22);
  }

}

export default App;
