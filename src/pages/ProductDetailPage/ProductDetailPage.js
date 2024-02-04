// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import api from "../../api/items.api.js/api";
// import Page from "../../Page/Page";

// function ProductDetailPage({ goods }) {
//   const { itemId } = useParams();
//   const [item, setItem] = useState(null);

//   useEffect(() => {
//     api.goods.getGood(itemId).then((item) => setItem(item));
//   }, [itemId]);

//   return (
//     <Page>
//       <section>
//         <img src="" />
//       </section>
//     </Page>
//   );
// }

// export default ProductDetailPage;
