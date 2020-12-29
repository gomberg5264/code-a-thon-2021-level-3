import React, { useState } from 'react';
import './App.css';

function App() {

  const [mealCost, setMealCost] = useState(0);

  const handleChange = event => {
    console.log(`Meal cost value changed: ${event.target.value}`);    
    // Update the meal cost property
    setMealCost(event.target.value);
  }

  return (
    <div>
      <h1 id="title">Tip Calculator (React)</h1>
      <div className='costArea'>
        <label for="mealCost">Meal Cost</label>
        <input type="number" id="mealCost" min="0" defaultValue="0" autoFocus onChange={handleChange} />
      </div>
      <table cellSpacing="0">
        <thead>
          <tr>
            <th className='rating'>Rating</th>
            <th className='tip'>Tip</th>
            <th className='amount'>Amount</th>
          </tr>
        </thead>
        <tbody>
          <TipRow rowLabel="Poor" rowPercent="10" mealCost={mealCost} />
          <TipRow rowLabel="OK" rowPercent="15" mealCost={mealCost} />
          <TipRow rowLabel="Good" rowPercent="18" mealCost={mealCost} />
          <TipRow rowLabel="Great" rowPercent="20" mealCost={mealCost} />
          <TipRow rowLabel="Excellent" rowPercent="22" mealCost={mealCost} />
        </tbody>
      </table>
    </div>
  );
}

class TipRow extends React.Component {  
  render() {
    console.log(`Tip Row: ${this.props.rowLabel}, ${this.props.rowPercent}, ${this.props.mealCost}`);
    let tipPercent = parseInt(this.props.rowPercent);
    let tipAmount = (Math.round((this.props.mealCost * tipPercent)) / 100).toFixed(2);

    return (
      <tr>
        <td className='rating'>{this.props.rowLabel}</td>
        <td className='tip'>{this.props.rowPercent}%</td>
        <td className='amount' id="tip10">${tipAmount}</td>
      </tr>
    );
  }
}

export default App;
