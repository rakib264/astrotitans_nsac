// import { useState } from "react";
// // import { Switch, Route, useLocation } from 'react-router-dom';
// import { AnimatePresence } from "framer-motion";
// import Provider from "../Provider/Provider";
// import Wrapper from "../Wrapper/Wrapper";
// import Navbar from "../Navbar/Navbar";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import KeyVisual from "../KeyVisual/KeyVisual";
// import ClientOnly from "@/components/Client.jsx/Clientonly";
// import { Canvas } from "@react-three/fiber";
// import { Stars, OrbitControls } from "@react-three/drei";
// // import { Box } from "drei";

// const App = () => {
//   const pathname = usePathname();
//   const [activePlanet, setActivePlanet] = useState("/");

//   return (
//     <ClientOnly>
//       <Provider>
//         <Navbar
//           pathName={pathname}
//           onHover={setActivePlanet}
//           activePlanet={activePlanet}
//         />
//         <AnimatePresence>
//           {/* <a key="any" href="/">
//             <KeyVisual activePlanet={activePlanet} />
//           </a> */}
//           <KeyVisual activePlanet={activePlanet} />
//         </AnimatePresence>
//       </Provider>
//     </ClientOnly>
//   );
// };

// export default App;

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import KeyVisual from "../KeyVisual/KeyVisual";
import FinalWrapper from "../Wrapper/FinalWrapper";
import Navbar from "../Navbar/Navbar";

const App = () => {
  const pathname = usePathname();
  const [activePlanet, setActivePlanet] = useState("/");

  return (
    <FinalWrapper>
      <Navbar
        pathName={pathname}
        onHover={setActivePlanet}
        activePlanet={activePlanet}
      />
      <AnimatePresence>
        <KeyVisual activePlanet={activePlanet} />
      </AnimatePresence>
    </FinalWrapper>
  );
};

export default App;
