import Image from "next/image";
import SchedulePage from "./schedule/page";
import TripDetailsModal from "@/components/modal/TripDetail";

export default function Home() {
  return (
    <div>
      {/* <SchedulePage /> */}
      <TripDetailsModal />
    </div>
  );
}
