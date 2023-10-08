import { useState } from "react";
import Provider from "../Provider/Provider";
import Navbar from "../Navbar/Navbar";
import { usePathname } from "next/navigation";
import ClientOnly from "@/components/Client.jsx/Clientonly";

const FinalWrapper = ({ children }) => {
  const pathname = usePathname();
  const [activePlanet, setActivePlanet] = useState("/");

  const wrapperStyles = {
    background: `url('/assets/images/bg-stars6.png')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  return (
    <ClientOnly>
      <Provider>
        <div style={wrapperStyles}>{children}</div>
      </Provider>
    </ClientOnly>
  );
};

export default FinalWrapper;

// import { useState } from "react";
// import { AnimatePresence } from "framer-motion";
// import { usePathname } from "next/navigation";
// import KeyVisual from "../KeyVisual/KeyVisual";
// import FinalWrapper from "../Wrapper/FinalWrapper";

// const App = () => {
//   const pathname = usePathname();
//   const [activePlanet, setActivePlanet] = useState("/");

//   return (
//     <FinalWrapper>
//       <AnimatePresence>
//         <KeyVisual activePlanet={activePlanet} />
//       </AnimatePresence>
//     </FinalWrapper>
//   );
// };

// export default App;
