import React, { useEffect, useState } from "react";
import Page from "../../Page/Page";
import api from "../../api/items.api.js/api";
import GoodsList from "../../components/GoodsList";

function HomePage() {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    api.goods.getAllGoods().then((data) => {
      setGoods(data);
    });
  }, []);

  return (
    <Page>
      <GoodsList goods={goods}></GoodsList>
    </Page>
  );
}

export default HomePage;
