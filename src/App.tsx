import "./styles/index.css";

function App() {
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
          <div className="max-w-4xl bg-red-300/20 border border-red-400">
            <div className="grid">
              <div>
                <p> $22.7M </p>
                <p> Total Unlocked </p>
              </div>

              <div>
                <p> $22.7M </p>
                <p>Total Trading Volume</p>
              </div>

              <div>
                <p> $22.7M </p>
                <p> Trading Fees</p>
              </div>

              <div>
                <p> $22.7M </p>
                <p> Active Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
