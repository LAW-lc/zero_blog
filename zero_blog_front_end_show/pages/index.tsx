import { ReactElement } from "react";

import Layout from "@/pages/layouts";

export default function Page() {
  return (
    <div>
      page
    </div>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
