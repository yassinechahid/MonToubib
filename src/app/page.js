import Actualites from "../components/Actualites";
import HeroSwiper from "../components/HeroSwiper";
import Introduction from "../components/Introduction";
import Platforme from "../components/Platforme";
import ServicesFonction from "../components/ServicesFonction";

export default function Home() {
  return (
    <main className="flex flex-col bg-light-background items-center pt-2 pb-28 overflow-x-hidden">
     <HeroSwiper/>
     <Introduction/>
      <ServicesFonction/>
      <Platforme/>
      <Actualites/>
    </main>
  );
}
