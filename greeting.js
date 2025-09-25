import React from'react';
import UserGreeting from'./UserGreeting';
import UserInfo from'./UserInfo';
import'./App.css';
function App(){
const user={
name:'Ali',
age:20
};
return(
<div className="app-container">
<div className="card">
<h2>Sharing Data using Props</h2>
<UserGreeting name={user.name}/>
<UserInfo name={user.name} age={user.age}/>
</div>
</div>
);
}
export default App;

import React from 'react';
function UserGreeting({name}){
return<h3 className="greeting">Hello,{name}</h3>;
}
export default UserGreeting;

import React from 'react';
function UserInfo({name,age}){
return(
<p className="info">
User<string>{name}</strong>is<strong>{age}</strong>years old.
</p>
);
}
export default UserInfo;

body{
margin:0;
padding:0;
font-family:'segoe UI',sans-serif;
background:linear-gradient(135deg,#74ebd5,#acb6e5);
height:100vh;
}
.app-container{
display:flex;
justify-content:center;
align-items:center;
height:100%;
}
.card{
background-color:#ffffffcc;
padding:30px40px;
border-radius:15px;
box-shadom:08px rgba(0,0,0,0.15);
text-align:center;
}
.greeting{
color:#2c3e50;
margin-bottom:10px;
}
.info{
font-size:18px;
color:#34495e;
}