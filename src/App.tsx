import { Link } from "react-router-dom";
import "./styles/index.css";
import homeImage from "./assets/home.png";
function App() {
  console.log("homeImage:", homeImage);
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 py-12">
            <h1 className="text-7xl font-medium leading-tight primary-gradient text-center">
              The central hub for trading & liquidity marketplace on{" "}
              <span className="text-white">🐻</span>
              Berachain.
            </h1>

            <h2 className="text-lg font-normal leading-relaxed text-center text-white max-w-4xl mx-auto">
              Moniswap is a next-generation AMM that combines the best of Curve,
              Convex and Uniswap, designed to serve as the liquidity hub for the
              Berachain. Moniswap's flywheel allows protocols to build deep
              liquidity in a capital-efficient manner by directing $MONI
              emissions to their pools.
            </h2>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center w-full">
            <div className="max-w-7xl bg-primary-gr/20 p-4">
              <div className="grid grid-cols-2 bg-blue-300/10  rounded-lg gap-x-24">
                <div className="text-center p-4 rounded-lg px-12 py-8">
                  <p className="text-2xl font-medium primary-gradient">
                    $22.7M
                  </p>
                  <p className="text-sm text-white"> Total Value Unlocked </p>
                </div>

                <div className="text-center p-4 rounded-lg px-12 py-8">
                  <p className="text-2xl font-medium primary-gradient ">
                    $337.8M
                  </p>
                  <p className="text-sm text-white"> Total Trading Volume </p>
                </div>

                <div className="text-center p-4 rounded-lg px-12 py-8">
                  <p className="text-2xl font-medium primary-gradient">
                    $685.4K
                  </p>
                  <p className="text-sm text-white"> Trading Fees </p>
                </div>

                <div className="text-center p-4 rounded-lg px-12 py-8">
                  <p className="text-2xl font-medium primary-gradient">21730</p>
                  <p className="text-sm text-white"> Active Users </p>
                </div>
              </div>
            </div>
          </div>

          {/* How it works */}
          <div className="w-full justify-center text-center text-2xl my-12 lg:mb-12 lg:mt-24">
            <h2 className="primary-gradient"> How it works </h2>
          </div>

          <div className="flex items-center justify-center w-full">
            <div className="max-w-4xl p-4">
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                <div className="text-left p-4 bg-blue-300/10 rounded-lg px-8">
                  <p className="text-2xl font-medium primary-gradient my-2">
                    Trades
                  </p>
                  <p className="text-md text-white w-4/5">
                    Swap tokens with minimal slippage and pay some of the lowest
                    fees to MONI lockers.
                  </p>
                </div>
                <div className="text-left p-4 bg-blue-300/10 rounded-lg px-8">
                  <p className="text-2xl font-medium primary-gradient my-2">
                    Liquidity Providers
                  </p>
                  <p className="text-md text-white w-4/5">
                    Deposit the tokens used for trading on Moniswap and receive
                    MONI emissions as rewards.
                  </p>
                </div>
                <div className="text-left p-4 bg-blue-300/10 rounded-lg px-8">
                  <p className="text-2xl font-medium primary-gradient my-2">
                    VeMONI Voters
                  </p>
                  <p className="text-md text-white w-full">
                    Vote on which pools will earn MONI emissions and receive all
                    incentives and fees. Any MONI holder can lock their tokens
                    to convert to veMONI.
                  </p>
                </div>
                <div className="text-left p-4 bg-blue-300/10 rounded-lg px-8">
                  <p className="text-2xl font-medium primary-gradient my-2">
                    Protocols
                  </p>
                  <p className="text-md text-white w-full">
                    Incentivize veMONI voters to attract votes and MONI
                    emissions to their pools, enabling them to build liquidity
                    cost-effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Join the Community */}
          <div className="w-full justify-center text-center text-2xl my-12 lg:mb-12 lg:mt-24">
            <h2 className="primary-gradient"> Join the community </h2>
          </div>

          <div className="w-full justify-center text-center">
            <div className="">
              <Link to={`https://discord.com`}>
                <button className="text-white rounded-md bg-orange-500 px-6 py-3 ">
                  Join Discord
                </button>
              </Link>
            </div>
          </div>

          {/* Image section */}
          <div className="py-12">
            <div className="w-full max-w-7xl mx-auto">
              <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden">
                <div className="absolute inset-0 p-[1px] rounded-3xl bg-gradient-to-br from-orange-500 to-amber-300">
                  <div className="absolute inset-[1px] rounded-[calc(1.5rem-1px)] overflow-hidden">
                    <img
                      src={homeImage}
                      alt="Home"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
