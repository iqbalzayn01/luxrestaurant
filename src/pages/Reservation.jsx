import { Header } from "../components/Header";
import { ReserveForm } from "../components/Form";
import { Footer } from "../components/Footer";

export default function Reservation() {
  return (
    <>
      <Header className="mb-20" />
      <ReserveForm className="mb-32" />
      <Footer />
    </>
  );
}
