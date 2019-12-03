import React, { useContext } from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import CollectionContext from "../../contexts/collections/collections";
import "./collection.styles.scss";

const CollectionPage = ({ match }) => {
  const shopDataContext = useContext(CollectionContext);
  const collection = shopDataContext[match.params.collectionId];
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
/** Una manera de utilizar context Api */
// const CollectionPage = ({ match }) => {
//   //const shopDataContext = useContext(CollectionContext);
//   // const { title, items } = collection;
//   return (
//     <CollectionContext.Consumer>
//       {collections => {
//         const collection = collections[match.params.collectionId];
//         const { title, items } = collection;
//         return (
//           <div className="collection-page">
//             <h2 className="title">{title}</h2>
//             <div className="items">
//               {items.map(item => (
//                 <CollectionItem key={item.id} item={item} />
//               ))}
//             </div>
//           </div>
//         );
//       }}
//     </CollectionContext.Consumer>
//   );
// };

export default CollectionPage;
