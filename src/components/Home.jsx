const Home = () => {
  return (
    <div className="w-full h-screen bg-gray-200 flex flex-col">
      <div id="box-1" className="w-full ">
        <div className=" bg-white m-3  rounded-md flex flex-col  justify-start ">
          <div className="flex">
            <svg viewBox="0 0 32 32" width="30" height="30" className="m-2">
              <path
                style={{ stroke: "none" }}
                fill="#236969"
                fillRule="evenodd"
                d="M324.60156 168c-.4962 0-.96464.0767-1.39844.21289.46911.84851.78407 1.78931.91211 2.78711h4.66602c-.49082-1.69621-2.10111-3-4.17969-3zM307.39844 168c-2.07857 0-3.68887 1.30379-4.17969 3h4.66602c.12804-.99781.443-1.9386.91211-2.78711C308.36308 168.07669 307.89464 168 307.39844 168zM324.7832 159c-1.64501 0-3 1.35499-3 3 0 1.64501 1.35499 3 3 3 1.64501 0 3-1.35499 3-3 0-1.64501-1.35499-3-3-3zM307.58008 159c-1.64501 0-3 1.35499-3 3 0 1.64501 1.35499 3 3 3 1.64501 0 3-1.35499 3-3 0-1.64501-1.35499-3-3-3zM316 155c-2.19729 0-4 1.80271-4 4 0 2.19729 1.80271 4 4 4 2.19729 0 4-1.80271 4-4 0-2.19729-1.80271-4-4-4zM316 166c-3.07118 0-5.47101 2.18356-5.97461 5h11.94922c-.5036-2.81644-2.90342-5-5.97461-5z"
                className="color000 svgShape color071a52"
                color="#000"
                transform="translate(-300 -148)"
              />
            </svg>
            <p className="text-green-600 pt-2 ">Consultants</p>
          </div>
          <div className="border-green-700 border-b-2 w-32 ml-2 "></div>
        </div>
      </div>
      <div id="box2" className="w-full ">
        <div className=" flex gap-4  bg-white m-3 mt-1 rounded-md">
          <div className=" flex flex-row items-center">
            <p className="text-white bg-[#34a853] m-0 p-3 rounded-l-md">
              Filters
            </p>
            <img src="/right-t.jpg" />
          </div>

          <div className="rounded-full ml-2 m-1 border flex">
            <p className="mt-1 ml-4 mr-5 text-gray-700">Select Range</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              id="down-arrow"
              className="mr-2"
            >
              <path d="M22.782 13.8 17 19.582 11.218 13.8a1 1 0 0 0-1.414 1.414L16.29 21.7a.992.992 0 0 0 .71.292.997.997 0 0 0 .71-.292l6.486-6.486a1 1 0 0 0-1.414-1.414z"></path>
            </svg>
          </div>

          <div className="flex ">
            <div className="flex items-center">
              <input type="checkbox" id="checkbox" className="hidden" />
              <label
                htmlFor="checkbox"
                className="cursor-pointer w-6 h-6 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-200"
              >
                <svg
                  className="w-4 h-4 hidden"
                  viewBox="0 0 24 24"
                  stroke="white"
                  fill="none"
                >
                  <path d="M1 14l6-6L23 22"></path>
                </svg>
              </label>
              <span className="ml-2 text-gray-700 p-2">Summary</span>
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center">
              <input type="checkbox" id="checkbox" className="hidden" />
              <label
                htmlFor="checkbox"
                className="cursor-pointer w-6 h-6 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-200"
              >
                <svg
                  className="w-4 h-4 hidden"
                  viewBox="0 0 24 24"
                  stroke="white"
                  fill="none"
                >
                  <path d="M1 14l6-6L23 22"></path>
                </svg>
              </label>
              <span className="ml-2 text-gray-700 p-2">Branch Wise</span>
            </div>
          </div>
        </div>
      </div>
      <div
        id="box3"
        className="flex gap-2  flex-wrap  justify-between items-center"
      >
        <div className="flex flex-row justify-between m-3 bg-white rounded-sm border-l-[4px] border-orange-200">
          <div className="flex flex-col p-2 pl-5">
            <p className="text-green-700 font-medium">Consultant Count</p>
            <p className="text-gray-700 text-xl font-medium">90 / 900</p>
            <p className="text-gray-500 font-normal">Today/ Period</p>
          </div>
          <div className="flex justify-center pl-7 p-4">
            <div className="w-12 h-12 bg-orange-200 rounded-full flex justify-center items-center ">
              <svg viewBox="0 0 32 32" width={30} height={30} className="m-2">
                <path
                  style={{ stroke: "none" }}
                  fill="#236969"
                  fillRule="evenodd"
                  d="M324.60156 168c-.4962 0-.96464.0767-1.39844.21289.46911.84851.78407 1.78931.91211 2.78711h4.66602c-.49082-1.69621-2.10111-3-4.17969-3zM307.39844 168c-2.07857 0-3.68887 1.30379-4.17969 3h4.66602c.12804-.99781.443-1.9386.91211-2.78711C308.36308 168.07669 307.89464 168 307.39844 168zM324.7832 159c-1.64501 0-3 1.35499-3 3 0 1.64501 1.35499 3 3 3 1.64501 0 3-1.35499 3-3 0-1.64501-1.35499-3-3-3zM307.58008 159c-1.64501 0-3 1.35499-3 3 0 1.64501 1.35499 3 3 3 1.64501 0 3-1.35499 3-3 0-1.64501-1.35499-3-3-3zM316 155c-2.19729 0-4 1.80271-4 4 0 2.19729 1.80271 4 4 4 2.19729 0 4-1.80271 4-4 0-2.19729-1.80271-4-4-4zM316 166c-3.07118 0-5.47101 2.18356-5.97461 5h11.94922c-.5036-2.81644-2.90342-5-5.97461-5z"
                  className="color000 svgShape color071a52"
                  color="#000"
                  transform="translate(-300 -148)"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between m-3 bg-white rounded-sm border-l-[4px] border-blue-200">
          <div className="flex flex-col p-2 pl-5">
            <p className="text-green-700 font-medium">Consultations</p>
            <p className="text-gray-700 text-xl font-medium">11 / 25</p>
            <p className="text-gray-500 font-normal">Today/ Period</p>
          </div>
          <div className="flex justify-center pl-7 p-4">
            <div className="w-12 h-12 bg-blue-200 rounded-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                viewBox="0 0 52 52"
                id="news"
              >
                <g fill="none" stroke="#000">
                  <path d="M7.244 10.268h11.69v11.69H7.244zM23.658 12.762h9.905M23.658 19.463h9.905M7.244 27.333h25.737M7.244 34.146h25.737M7.244 40.958h25.737"></path>
                  <path d="M43.785 46.977H8.215A6.215 6.215 0 0 1 2 40.76V5.023h35.57v35.738"></path>
                  <path d="M50 25.526H37.57v15.235a6.215 6.215 0 0 0 12.43 0V25.526z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between m-3 bg-white rounded-sm border-l-[4px] border-green-300">
          <div className="flex flex-col p-2 pl-5">
            <p className="text-green-700 font-medium">Labs</p>
            <p className="text-gray-700 text-xl font-medium">25 / 560</p>
            <p className="text-gray-500 font-normal">Today/ Period</p>
          </div>
          <div className="flex justify-center pl-7 p-4">
            <div className="w-12 h-12 bg-green-200 rounded-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                id="money"
                width={30}
                height={30}
              >
                <path d="M32,22A10,10,0,1,0,42,32,10.0114,10.0114,0,0,0,32,22Zm0,18a8,8,0,1,1,8-8A8.0092,8.0092,0,0,1,32,40Z"></path>
                <path d="M32,29h2a1,1,0,0,0,0-2H33V26a1,1,0,0,0-2,0v1.1843A2.9926,2.9926,0,0,0,32,33a1,1,0,0,1,0,2H30a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0V36.8157A2.9926,2.9926,0,0,0,32,31a1,1,0,0,1,0-2Z"></path>
                <path d="M58,17H6a1,1,0,0,0-1,1V46a1,1,0,0,0,1,1H58a1,1,0,0,0,1-1V18A1,1,0,0,0,58,17ZM51.08,45H12.92A7.0046,7.0046,0,0,0,7,39.08V24.92A7.0046,7.0046,0,0,0,12.92,19H51.08A7.0045,7.0045,0,0,0,57,24.92V39.08A7.0045,7.0045,0,0,0,51.08,45ZM57,19v3.8994A5.0146,5.0146,0,0,1,53.1006,19ZM7,19h3.8994A5.0146,5.0146,0,0,1,7,22.8994ZM7,45V41.1006A5.0146,5.0146,0,0,1,10.8994,45Zm50,0H53.1006A5.0146,5.0146,0,0,1,57,41.1006Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between m-3 bg-white rounded-sm border-l-[4px] border-purple-400">
          <div className="flex flex-col p-2 pl-5">
            <p className="text-green-700 font-medium">DietPlans</p>
            <p className="text-gray-700 text-xl font-medium">25 / 250</p>
            <p className="text-gray-500 font-normal">Today/ Period</p>
          </div>
          <div className="flex justify-center pl-7 p-4">
            <div className="w-12 h-12 bg-purple-200 rounded-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                id="money"
                width={30}
                height={30}
              >
                <path d="M29.5,8H2.5A2.5,2.5,0,0,0,0,10.5v14A2.5,2.5,0,0,0,2.5,27h27A2.5,2.5,0,0,0,32,24.5v-14A2.5,2.5,0,0,0,29.5,8ZM1,10.5A1.5,1.5,0,0,1,2.5,9H4.483A2.466,2.466,0,0,1,5,10.5,2.5,2.5,0,0,1,2.5,13,2.466,2.466,0,0,1,1,12.483ZM4.483,26H2.5A1.5,1.5,0,0,1,1,24.5V22.517A2.466,2.466,0,0,1,2.5,22,2.5,2.5,0,0,1,5,24.5,2.466,2.466,0,0,1,4.483,26ZM31,24.5A1.5,1.5,0,0,1,29.5,26H27.517A2.466,2.466,0,0,1,27,24.5,2.5,2.5,0,0,1,29.5,22a2.466,2.466,0,0,1,1.5.517Zm0-3.145A3.464,3.464,0,0,0,29.5,21,3.5,3.5,0,0,0,26,24.5a3.464,3.464,0,0,0,.355,1.5H5.645A3.464,3.464,0,0,0,6,24.5,3.5,3.5,0,0,0,2.5,21a3.464,3.464,0,0,0-1.5.355V13.645A3.464,3.464,0,0,0,2.5,14,3.5,3.5,0,0,0,6,10.5,3.464,3.464,0,0,0,5.645,9H26.355A3.464,3.464,0,0,0,26,10.5,3.5,3.5,0,0,0,29.5,14a3.464,3.464,0,0,0,1.5-.355Zm0-8.872A2.466,2.466,0,0,1,29.5,13,2.5,2.5,0,0,1,27,10.5,2.466,2.466,0,0,1,27.517,9H29.5A1.5,1.5,0,0,1,31,10.5ZM15.5,15h1a1,1,0,0,1,1,1,.5.5,0,0,0,1,0,2,2,0,0,0-2-2v-.5a.5.5,0,0,0-1,0V14a2,2,0,0,0,0,4h1a1,1,0,0,1,0,2h-1a1,1,0,0,1-1-1,.5.5,0,0,0-1,0,2,2,0,0,0,2,2v.5a.5.5,0,0,0,1,0V21a2,2,0,0,0,0-4h-1a1,1,0,0,1,0-2Zm.5-4a6.5,6.5,0,1,0,6.5,6.5A6.508,6.508,0,0,0,16,11Zm0,12a5.5,5.5,0,1,1,5.5-5.5A5.506,5.506,0,0,1,16,23Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div id="box4" className="w-full  mr-3">
        <div className="bg-white h-screen ml-3 mr-3">
          <div className="flex items-center justify-between">
            <div className="text-xl text-gray-500 font-semibold m-5 ml-6">
              Consultants
            </div>
            <div className="flex mr-5">
              <div className="w-10 h-10 m-1  border-[2px]  rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  id="arrow-u-up-right"
                  height={30}
                  width={30}
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <polyline
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="8"
                    points="176 136 224 88 176 40"
                  ></polyline>
                  <path
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="8"
                    d="M176,200H88a56,56,0,0,1-56-56v-.00011A55.99988,55.99988,0,0,1,87.99989,88H224"
                  ></path>
                </svg>
              </div>
              <div className="w-12 h-12 rounded-full flex justify-center items-center p-0 m-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="down-arrow"
                  height={40}
                  width={40}
                  className=""
                >
                  <path d="M16.1464844,11.6464844L12.5,15.2930298V7.5C12.5,7.223877,12.276123,7,12,7s-0.5,0.223877-0.5,0.5v7.7930298l-3.6465454-3.6464844c-0.1937256-0.1871338-0.5009155-0.1871338-0.6947021,0c-0.1986084,0.1918335-0.2041016,0.5083618-0.0122681,0.7069702l4.4995728,4.4995728c0.0458984,0.0459595,0.1005859,0.0828247,0.161377,0.1082153C11.8678589,16.9865112,11.9332275,17.0001221,12,17h0.0006104c0.0106201,0,0.0195312-0.0053711,0.0299683-0.0060425c0.0558472-0.003479,0.1112671-0.0115356,0.1621704-0.0328369c0.0610352-0.0255127,0.1159058-0.062561,0.1618652-0.1087646l4.4988403-4.4988403c0.1871948-0.1937866,0.1871948-0.5009766,0-0.6947632C16.6616211,11.460144,16.3450928,11.4546509,16.1464844,11.6464844z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9682617,0.0056152,8.9943848,4.0317383,9,9C21,16.9705811,16.9705811,21,12,21z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="m-5 mt-3 border rounded-sm bg-white">
            <table className="w-full bg-white shadow-md overflow-hidden sm:rounded-md">
              <thead className="border w-full">
                <tr>
                  <th className="px-10 py-4  border">NAME</th>
                  <th className="px-10 py-4 border">PATIENT COUNT</th>
                  <th className="px-10 py-4 border">LABS</th>
                  <th className="px-10 py-4 border">DIET PLANS</th>
                </tr>
              </thead>
              <tbody className=" text-center  ">
                <tr>
                  <td className="px-7 border py-4">John Smith</td>
                  <td className="px-7 py-4 border">12</td>
                  <td className="px-7 border py-4">3</td>
                  <td className="px-7 border py-4">6</td>
                </tr>
                <tr>
                  <td className="px-7 border py-4">Jane Doe</td>
                  <td className="px-7 border py-4">8</td>
                  <td className="px-7 border py-4">2</td>
                  <td className="px-7 border py-4">4</td>
                </tr>
                <tr>
                  <td className="px-7 border py-4">Mark Johnson</td>
                  <td className="px-7 border py-4">6</td>
                  <td className="px-7 border py-4">1</td>
                  <td className="px-7 border py-4">2</td>
                </tr>
                <tr>
                  <td className="px-7 border py-4">Mary Lee</td>
                  <td className="px-7 border py-4">10</td>
                  <td className="px-7 border py-4">4</td>
                  <td className="px-7 border py-4">8</td>
                </tr>
                <tr>
                  <td className="px-7 border py-4">David Chen</td>
                  <td className="px-7 border py-4">14</td>
                  <td className="px-7 border py-4">5</td>
                  <td className="px-7 border py-4">9</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
