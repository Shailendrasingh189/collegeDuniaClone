const TopPlacesCard = ({place}) => {
   return (
    <div>
      <div className="pr-4">
        <a
          href="#"
          className="container min-w-16 px-1 h-24 md:h-36 border p-2 flex flex-col rounded-md no-underline bg-white color-[#ff7900]"
        >
          <div className="block w-14 h-14 md:w-20 md:h-20 mx-auto mb-2">
            <img
              className="w-full h-full block overflow-hidden mx-auto align-middle border-none"
              src={place?.image}
              alt="mumbai icon"
            />
          </div>
          <p className="font-medium mb-0 text-base text-gray-900 text-center mt-0">
            {place?.name}
          </p>
        </a>
      </div>
    </div>
  );
};

export default TopPlacesCard;
