import { useEffect, useState } from "react";

function App() {  
  const [sayac, sayacGuncelle] = useState(0)

    useEffect( () => { console.log("1.efect çalıştı") }, [sayac] )

    useEffect( () => { console.log("2.efect çalıştı") } )
   

  return (
    <>
      Sayaç: {sayac}
    </>
  );
}

export default App;
