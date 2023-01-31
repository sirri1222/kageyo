import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import DetailNav from "../components/detail/DetailNav";
import List from "../components/detail/List";
import Layout from "../components/layout/Layout";

const Detail = () => {
  let { cate } = useParams();
  return (
    <Layout>
      <div>
        <DetailNav />
        <div>
          {/* 한식, 일식 등의 글자가 전달 된다. */}
          <List cate={cate} />
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
