/**2_expressionJSX**/
 function userName(user) {
    return user.firstName + ' ' + user.lastName;
}

 //object
 const user = {
    firstName: 'Rafa',
    lastName: 'Benitez'
};

 //jsx
 const element = (
     <div>
         <h1>
             Hello, {userName(user)}!
         </h1>
     </div>
 );

 ReactDOM.render(
     element,
     document.getElementById('root')
 );


