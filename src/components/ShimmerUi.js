const ShimmerUi = () => {
  return (
    <div className="container flex flex-wrap">
      
      {Array(15)
        .fill("")
        .map((e , index) => (
          <div key={index} className="h-[300px] w-[200px] bg-gray-200 m-5"></div>
        ))}
        
    </div>
  );
};

export default ShimmerUi;
