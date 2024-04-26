import downArrowSVG from "../assets/down-arrow.svg";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex flex-wrap justify-between items-center">
        <div className="text-2xl font-bold">AS</div>
        <div>
          <div className="flex gap-2">
            <div className="flex  rounded-3xl bg-gray-100">
              <div className="bg-gray-300 flex rounded-l-3xl p-3">
                <p className="text-black">Patients</p>
                <img src={downArrowSVG} width={25} alt="arrow" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className=" bg-gray-100 placeholder:text-gray-600 p-2 rounded  focus:outline-none text-gray-600"
              />
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 m-3 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
            <button className="bg-green-500 p-2 rounded-3xl">
              <span className="text-xl">+</span> Add New
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className=" bg-gray-400 rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              id="bell"
            >
              <g color="#000">
                <path
                  fill="#2b4255"
                  d="M15.5 1026.362c-.823 0-1.5.678-1.5 1.5 0 .823.677 1.5 1.5 1.5.822 0 1.5-.677 1.5-1.5 0-.822-.678-1.5-1.5-1.5zm0 1c.282 0 .5.218.5.5 0 .282-.218.5-.5.5a.493.493 0 0 1-.5-.5c0-.282.218-.5.5-.5z"
                  overflow="visible"
                  transform="translate(0 -1020.362)"
                />
                <path
                  fill="#f05542"
                  d="M13.197 1043.889c-.126.3-.197.629-.197.972 0 1.375 1.125 2.5 2.5 2.5s2.5-1.125 2.5-2.5c0-.343-.07-.673-.197-.972l-.92.39c.076.18.117.374.117.582 0 .835-.666 1.5-1.5 1.5s-1.5-.665-1.5-1.5c0-.208.041-.403.117-.582l-.92-.39z"
                  overflow="visible"
                  transform="translate(0 -1020.362)"
                />
                <path
                  fill="#2b4255"
                  d="M15.5 1028.361a6.497 6.497 0 0 0-6.5 6.5v6c0 .282-.218.5-.5.5v1c.823 0 1.5-.677 1.5-1.5v-6c0-3.055 2.444-5.5 5.5-5.5s5.5 2.445 5.5 5.5v6c0 .823.677 1.5 1.5 1.5v-1a.493.493 0 0 1-.5-.5v-6c0-3.592-2.908-6.5-6.5-6.5z"
                  overflow="visible"
                  transform="translate(0 -1020.362)"
                />
                <path
                  fill="#2b4255"
                  d="M8.5 1041.361c-.822 0-1.5.678-1.5 1.5 0 .823.678 1.5 1.5 1.5h14c.822 0 1.5-.677 1.5-1.5 0-.822-.678-1.5-1.5-1.5h-14zm0 1h14c.286 0 .5.215.5.5 0 .286-.214.5-.5.5h-14a.488.488 0 0 1-.5-.5c0-.285.214-.5.5-.5z"
                  overflow="visible"
                  transform="translate(0 -1020.362)"
                />
              </g>
            </svg>
          </div>
          <div className="rounded-full">
            <img src="/me.png" width={40} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

{
  //  <svg
  // xmlns="http://www.w3.org/2000/svg"
  // className="h-6 w-6"
  // fill="none"
  // viewBox="0 0 24 24"
  // stroke="currentColor"
  // >
  // <path
  //   strokeLinecap="round"
  //   strokeLinejoin="round"
  //   strokeWidth={2}
  //   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  // />
  // </svg>
}

{
  /* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg> */
}
