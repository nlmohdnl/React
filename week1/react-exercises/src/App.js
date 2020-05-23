import React from 'react';
import HobbyList from './HobbyList';
import Guarantee from './Guarantee';
import deliveryImg from './f-delivery.png';
import coinImg from './coin.png';
import chatImg from './chat.png';
import Counter from './Counter';


function App() {
  return (
    <div >
      <HobbyList />
      <div >       
        <Guarantee 
        img={deliveryImg} 
        title="Free Shipping when your order is above 35 $"
        description="we will deliver your goods in 24 hour"
        />
          <Guarantee 
        img={coinImg} 
        title="100% Money Back"
        description="You can return your product within 14 days"
        />
          <Guarantee 
        img={chatImg} 
        title="Online Support 24/7"
        description="You can call our free customer service number anytime"
        />
      </div>
      <Counter />
    </div>
  );
}

export default App;

