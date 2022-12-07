import React, { memo } from "react";

function Memo() {
  console.log("re-render children component!");
  return (
    <>
      <p>
        Components Memo không liên quan đến sự thay đổi State của Components cha{" "}
        <strong>=== Dùng Memo ===</strong>
      </p>
    </>
  );
}

export default memo(Memo);
