import './App.css';
import { useState } from 'react';

// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };
// const isLoggedIn=1;

// const products = [
//   { title: 'Cabbage', isFruit: false, id: 1 },
//   { title: 'Garlic', isFruit: false, id: 2 },
//   { title: 'Apple', isFruit: true, id: 3 },
// ];

// function MyButton() {
//   return (
//     <button>I'm a button count</button>
//   );
// }

// function MyButtonCount() {
//   const [count, setCount] = useState(0);
//   function handleClick() {
//     setCount(count + 1)
//   }
//   return (
//     <div>
//       <p>counting this button</p>
//       <button onClick={handleClick}>Count the click</button>
//       {count !==0 && <p>{count}</p>}
//     </div>
//   );
// }

// function MyButton1() {
//   function handleClick() {
//     alert('You clicked me!');
//   }
//   return (
//     <button onClick={handleClick}>I'm the button1</button>
//   );
// }

// function AboutPage() {
//   return (
//     <div>
//       <h1>About</h1>
//       <p>Hello there.<br />How do you do?</p>
//     </div>
//   );
// }

function someButton({something,setSomething}){
  return(
    <button onClick={setSomething}>Clicked {something} times.</button>
  )
}
function App() {
 // console.log(user.name)

  const [setSomething, something] = useState(0);

  function handleSomething() {
    setSomething(something+1);
  }

  // const listItems = products.map(p => 
  //   <li key={p.id} style={{color: p.isFruit ? 'magenta' : 'darkgreen'}}>
  //     {p.title}
  //   </li>);
  // console.log(products)
  return (
    <div>
      {/* <h1>Welcome to my app</h1>
      <MyButton1 />
      <AboutPage />
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      <br />
        {isLoggedIn? (<MyButton/>) : (<MyButton1/>)}

        <br></br>
      <ol>{listItems}</ol>
      <MyButtonCount /> */}

      <h1> Count update together</h1>
      <someButton something={something} setSomething={setSomething}/>
      <someButton something={something} setSomething={setSomething}/>

      </div>
    );
}

export default App;
