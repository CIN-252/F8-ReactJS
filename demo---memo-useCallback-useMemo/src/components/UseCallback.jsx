import React, { memo } from "react";

function UseCallback({ onIncrease }) {
  console.log("Re-render");
  return (
    <>
      <div>
        <p>Tình huống sử dụng chung 1 hàm</p>
        <p>Khi dùng memo nhưng vẫn bị re-render</p>
        <p>
          <strong>Dùng useCallback</strong>
        </p>
        <button onClick={onIncrease}>Click me 2</button>
      </div>
    </>
  );
}

export default memo(UseCallback);
