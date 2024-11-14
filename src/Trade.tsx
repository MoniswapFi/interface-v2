import { ArrowDownIcon } from "@heroicons/react/16/solid";
import "./styles/index.css";

function Trade() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="my-12 w-full max-w-xl border border-amber-700 rounded-xl bg-amber-700/20">
          {/* Swap + Settings */}
          <div className="p-4 w-full flex justify-between">
            <div className="text-white font-normal text-lg">
              <h1> Swap </h1>
            </div>
            <div className="text-white font-normal text-lg">
              <h1> Gear </h1>
            </div>
          </div>

          {/* Functional Swap Mechanism */}
          <div className="px-6 rounded-lg bg-amber-700/20">
            <div className="flex pt-3 justify-between text-white">
              <div>Available: -BERA</div>
              <div>You're swapping</div>
            </div>

            {/* Your Paying dropdown */}
            <div className="w-full gap-2 flex rounded-md  ">
              <div className="w-1/3 bg-amber-700/40 px-4 py-2 flex justify-between">
                <div>🐻</div>
                <div className="text-white font-semibold text-center w-full">
                  BERA
                </div>
                <div className="text-white w-fit justify-center align-middle">
                  <ArrowDownIcon width={64} height={24} className="w-fit" />
                </div>
              </div>

              <div className="w-2/3 bg-amber-700/40 px-4 py-2">INPUT</div>
            </div>
            {/* Down arrow icon */}

            {/* To Receive dropdown */}
          </div>

          {/* Transact button */}
          <div> </div>

          {/* Transact Details */}
          <div> </div>
        </div>
      </div>
    </>
  );
}

export default Trade;
