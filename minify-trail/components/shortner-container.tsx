import React from "react";
import ShortnerForm from "./shortner-form";
import UrlList from "./url-list";

type Props = {};

const ShortnerContainer = (props: Props) => {
  return (
    <div>
      <ShortnerForm />
      <UrlList />
    </div>
  );
};

export default ShortnerContainer;
