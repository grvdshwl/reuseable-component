import React from "react";
import { ContainerContext } from "../../Context/Context";
import { useContext } from "react";

// const DisplayComponent = () => {
//   return (
//     <ContainerContext.Consumer>
//       {(value) => (
//         <div>
//           <h1>Name : {value.name}</h1>
//           <h2> Age: {value.age}</h2>
//         </div>
//       )}
//     </ContainerContext.Consumer>
//   );
// };

const DisplayComponent = () => {
  const context = useContext(ContainerContext);

  return (
    <div>
      <div>
        <h1>Name : {context.name}</h1>
        <h2> Age: {context.age}</h2>
      </div>
    </div>
  );
};

export default DisplayComponent;
