function comment({ name, date, text }) {
  return (
    <div className="flex flex-col w-28 max-h-max justify-center items-start m-2 shadow-lg">
      <div className="flex flex-row gap-3 justify-start items-center m-1">
        <h1> {name}</h1>
        <h1> {date}</h1>
      </div>
      <div className="flex flex-row mx-2 justify-start items-center">
        <h1> {text}</h1>
      </div>
    </div>
  );
}

export default comment;
