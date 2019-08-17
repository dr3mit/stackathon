import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
const getData = async () => {
  const armies = await axios.get('/armies');
  const units = await axios.get('/units');
  const forces = await axios.get('/forces');
  return { armies, units, forces };
};
const Main = () => {
  return <div>hello</div>;
  //   const data = getData();
  //   return (
  //     <body>
  //       hello
  //       <div>
  //         <ul>
  //           {data.armies.map(army => (
  //             <li>{army}</li>
  //           ))}
  //         </ul>
  //       </div>
  //       <div>
  //         <ul>
  //           {data.units.map(unit => (
  //             <li>{unit}</li>
  //           ))}
  //         </ul>
  //       </div>
  //       <div>
  //         <ul>
  //           {data.forces.map(force => (
  //             <li>{force}</li>
  //           ))}
  //         </ul>
  //       </div>
  //     </body>
  // );
};

// get the app from the DOM
const app = document.getElementById('app');
// render on app using ReactDOM
ReactDOM.render(<Main />, app, () => {
  console.log('DOM Rendered');
});
