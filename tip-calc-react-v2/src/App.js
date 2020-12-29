import React from 'react';
import './App.css';

const handleChange = event => {
  // Update the meal cost property
  
}


function App() {
  return (
    <div>
      <h1 id="title">Tip Calculator (React)</h1>
      <MealCostBlock />
      <table cellSpacing="0">
        <thead>
          <tr>
            <th className='rating'>Rating</th>
            <th className='tip'>Tip</th>
            <th className='amount'>Amount</th>
          </tr>
        </thead>
        <tbody>
          <TipRow rowLabel="Poor" rowPercent="10" />
          <TipRow rowLabel="OK" rowPercent="15" />
          <TipRow rowLabel="Good" rowPercent="18" />
          <TipRow rowLabel="Great" rowPercent="20" />
          <TipRow rowLabel="Excellent" rowPercent="22" />
        </tbody>
      </table>
    </div>
  );
}

class MealCostBlock extends React.Component {
  render() {
    return (
      <div className='costArea'>
        <label for="mealCost">Meal Cost</label>
        <input type="number" id="mealCost" min="0" defaultValue="0" autoFocus onChange={handleChange} />
      </div>
    );
  }
}

class TipRow extends React.Component {
  render() {
    return (
      <tr>
        <td className='rating'>{this.props.rowLabel}</td>
        <td className='tip'>{this.props.rowPercent}%</td>
        <td className='amount' id="tip10">$0.00</td>
      </tr>
    );
  }
}

export default App;
