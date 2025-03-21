function NotificationContainer({ children }) {
  const xml = (
    <div className="flex flex-col pl-[6.2rem] pr-[1.6rem] mx-[2.8rem] bg-[#FFF] rounded-[1.5rem] min-h-[89.4rem] mb-[4.7rem] max-md:px-[2rem]">
      {children}
    </div>
  );
  return xml;
}

export default NotificationContainer;
