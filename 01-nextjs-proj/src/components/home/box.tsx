"use client";

interface BoxProp<T> {
  data: T;
}

const Box: React.FC<BoxProp<any>> = function Box({ data }) {
  //test
  //   console.log(`Page - client`);
  //   console.log(`Box`, data);

  return (
    <div className="flex w-full flex-col">
      <div className="w-full p-2">level 2 component</div>
      <div className="w-full p-2">{data}</div>
    </div>
  );
};

export { Box };
