import Navbar from "@/components/Navbar";
import DisplayCounter from "@/components/counter/DisplayCounter";
import CounterProvider from "@/components/counter/CounterProvider";
import CounterActions from "@/components/counter/CounterActions";

const Counter = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white ">
      <div className="container mx-auto ">
        <Navbar />
        <div className="bg-[#111827] md:px-40 md:py-24 px-3 py-1">
          <CounterProvider>
            <DisplayCounter />
            <CounterActions />
          </CounterProvider>
        </div>
      </div>
    </div>
  );
};

export default Counter;
