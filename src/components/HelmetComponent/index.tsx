import React from "react";
import { Helmet } from "react-helmet-async";

interface Props {
  title: string;
}

function HelmetComponent(props: Props) {
  const { title } = props;

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CMS | {title}</title>
        <link rel="canonical" href="#" />
      </Helmet>
    </div>
  );
}

export default HelmetComponent;
