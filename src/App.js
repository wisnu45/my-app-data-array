import logo from './logo.svg';
import './App.css';

// // array untuk menyimpan data
// const phoneData = [
//     { name: "iPhone X", price: 10000000, discount: 50 },
//     { name: "Oppo Find X", price: 14000000, discount: 30 },
//     { name: "Redmi Note X", price: 5000000, discount: 42 },
//     { name: "Vivo XYZ", price: 10000000, discount: 0 },
//   ];
  

// // membuat komponen dengan props name, price, dan discount
// function Product({ name, price, discount = 0 }) {
//     return (
//         <div>
//             <h2>{name}</h2>
//             {discount > 0 && <p><s>Rp {price}</s> ({discount}%)</p>}
//             <p>
//                 <b>Rp {parseInt(price) - parseInt(price) * (parseInt(discount) / 100)}</b>
//             </p>
//             <hr/>
//         </div>
//     );
// }

// // // menggunakan component di dalam App()
// // function App() {
// //     return (
// //         <div>
// //             <Product name="iPhone X" price="10000000" discount="50" />
// //             <Product name="Oppo Find X" price="140000000" discount="30" />
// //             <Product name="Redmi Note X" price="12000000" discount="42" />
// //         </div>
// //     );
// // }

// // menggunakan component di dalam App()
// function App() {
//     return (
//       <div>
//         {phoneData.map((phone, id) => (
//           <Product
//             key={id}
//             name={phone.name}
//             price={phone.price}
//             discount={phone.discount}>
//             </Product>
//         ))}
//       </div>
//     );
//   }

//   function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//       return <UserGreeting />;
//     }
//     return <GuestGreeting />;
//   }  
//   export default App;


// LATIHAN

// Nested Elements in JSX
// import React, { Component } from 'react';  
// class App extends Component{  
//    render(){  
//       return(  
//          <div>
//              <h1>Hallo Nested</h1>  
//              <h2>Belajar Element </h2>  
//              <p>Nested Element Pada JSX</p>  
//          </div>                     
//       );  
//    }  
// }  
// export default App;  

// JSX Attributes
import React, { Component } from 'react';  
class App extends Component{  
   render(){  
      return(  
         <div>  
             <h1 className="hello">abacgd</h1>  
           <h2>Belajar Attributes</h2>  
             <p data-demoAttribute = "demo">JSX Attributes.</p>  
         </div>  
      );  
   }  
}  
export default App;  