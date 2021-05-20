import React from 'react';
import reviews from './reviews';
import rating from './rating';
import sentiment from './sentiment';
import visitor from './num_visitors';
//wireframe basics: menu to the left, top row holding 3 items (reviews, average rating, sentiment analysis), bottom one having total website visitors
function App() {
  function side () {
    return(
    <div id="sidebar">
      <h1>Dashboard</h1>
      <h1>Widget</h1>
      <h1>Reviews</h1>
      <h1>Customers</h1>
      <h1>Online analysis</h1>
      <h1>Settings</h1>
    </div>)
  }
  const sidebar = side();
  const visit = visitor();
  const sent= sentiment();
  const rate = rating();
  const review = reviews();
  const dashboard = [sidebar, visit, sent, rate, review];
  return ( dashboard );
}

export default App;
