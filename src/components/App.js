import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
   const [init, setInit] = useState(false);
   const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

   useEffect(() => {
      authService.onAuthStateChanged( (user) => {
         if (user) {
            setIsLoggedIn(user);
         }else{
            setIsLoggedIn(false);
         }
         setInit(true);
      });
   }, []);
   //setInterval(() => console.log(authService.currentUser), 2000);
   return (
      <>
      <AppRouter isLoggedIn={isLoggedIn}/>
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
      </>
   );
}

export default App;
