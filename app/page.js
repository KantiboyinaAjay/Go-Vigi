import PriceList from "./components/PriceList";
import Features from "./components/Features";
import Bulk from "./components/Bulk";

export default function Home() {
  return (
    <main className="font-sans bg-white text-black">
      <Bulk />
      <PriceList />
      <Features />
    </main>
  );
}
