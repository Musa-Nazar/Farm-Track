const Entries = (enter) => {
  return (
    <>
      <div className="flex flex-col">
        <label>{enter.title}</label>
        <input
          type="text"
          className="border-2 border-gray-300 h-[50px] text-[15px] font-medium pl-[20px] pt-[10px]"
          placeholder={enter.holder}
        />
      </div>
    </>
  );
};

export default Entries;
