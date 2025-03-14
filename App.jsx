import React from 'react';
import Student from './component/Student';
import Render from './component/Render';
import Render2 from './component/Render2';
import userImage from "./component/imgh/image.png"
import Header from './component/Header';
import Footer from './component/Footer';


function App() {
  return (
    <div className='lot'>
      <div className='lop1'>
        <div className='inps'>
         <div className='input'>
         <input type="text" placeholder='users search'/>
         <i class='bx bx-search-alt-2'></i>
         </div>
        </div>
      <Student onle="online" name='Jonibek' imgSrc={userImage}></Student>
      <Student onle="oxirgi marta:2:00" name='Jamshid'imgSrc={userImage}></Student>
      <Student onle="oxirgi marta:22:00" name='Jasur'imgSrc={userImage}></Student>
      <Student onle="oxirgi marta:12:00" name='Bexruz'imgSrc={userImage}></Student>
      <Student onle="oxirgi marta:13:00" name='Daler'imgSrc={userImage}></Student>
      <Student onle="oxirgi marta:13:20" name='Mahmud'imgSrc={userImage}></Student>
      <Student onle="oxirgi marta:12:00" name='Mahmud'imgSrc={userImage}></Student>
      <Student onle="oxirgi marta:13:30" name='Mahmud'imgSrc={userImage}></Student>
      <Student onle="oxirgi marta:12:00" name='Mahmud'imgSrc={userImage}></Student>
      <Student onle="oxirgi marta:12:40" name='Mahmud'imgSrc={userImage}></Student>
      <Student onle="oxirgi marta:12:00" name='Mahmud'imgSrc={userImage}></Student>
      <Student onle="oxirgi marta:14:50" name='Mahmud'imgSrc={userImage}></Student>
      <Student onle="oxirgi marta:13:20" name='Mahmud'imgSrc={userImage}></Student>

      </div>
      <div className='lop2'>
        <Header Header='Jonibek' online="online"></Header>
      <div className="lou">
      <Render>Asalomu alaykum 👋</Render>
      <Render2>Asalomu alaykum 👋</Render2>
      <Render>nima xizmat</Render>
      <Render2>menga yordam kerak edi</Render2>
      <Render>siz menga batafsil ayting</Render>
      <Render2>menga web sayt qilib bering</Render2>
      <Render>Qancha bujetiz bor</Render>
      <Render2>1000$</Render2>    
      </div>
      <Footer></Footer>
      </div>
    </div>
    
  );
}

export default App;
