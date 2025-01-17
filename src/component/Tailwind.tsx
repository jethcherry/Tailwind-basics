function Tailwind() {
  return (
    <div>
      {/* <div className=" container bg-red-500 w-40 h-40 ">
        This is a div element
      </div> */}
      <div className="bg-yellow-500 w-auto flex flex-row flex-wrap">
        <div className="h-10 w-80 bg-red-500">1</div>
        <div className="h-10 w-80 bg-blue-500">2</div>
        <div className="h-10 w-80 bg-green-500">3</div>
      </div>
    </div>
  );
}

export default Tailwind;
