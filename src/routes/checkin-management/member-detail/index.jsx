import React from "react";
import { useParams } from "react-router-dom";

function MemberDetail() {
  const params = useParams();

  return <section>Member {params.id}</section>;
}

export default React.memo(MemberDetail);
