import Calendar from "react-calendar";
import FormBooking from "./components/formBooking";
import DashboardCalendar from "./components/dashboardCalendar";

function CardTicketHistory() {
  return (
    <div className="bottom-1 basis-full rounded-lg border bg-white px-3 pb-7 pt-2 shadow-md">
      <header className="mb-2 flex items-center justify-between text-sm font-medium">
        <p>01 juni 2023</p>
        <p className="rounded-md bg-green-600 px-2 py-1 text-white">active</p>
      </header>
      <main className="flex">
        <p className="mr-4 border-r-2 px-4 text-4xl font-bold">16</p>
        <div>
          <p className="font-semibold">KCP TANDES</p>
          <p className="text-sm">Transaksi (Dilayani oleh Teller)</p>
        </div>
      </main>
    </div>
  );
}

export default function Home() {

  return (
    <div>
      <h1 className="text-4xl font-medium">Halo, Ari </h1>
      <p className="font-light text-primary-davy-grey">
        Selamat Datang di Pendaftaran Antrian Online
      </p>

      {/* Ticket History */}
      <div className="mt-6 flex justify-between font-light">
        <p>Tiket Anda </p>
        <p>Lihat semua</p>
      </div>
      {/* Card Ticket History */}
      <div className="mt-1 flex space-x-4">
        <CardTicketHistory />
        <CardTicketHistory />
        <CardTicketHistory />
      </div>

      {/* Form Booking Ticket */}
      <div className="mb-12 mt-6 flex space-x-10">
        <div className="border-1 basis-2/5 rounded-md border px-6 pb-12 pt-6 shadow-md">
          <h1 className="mb-6 text-3xl font-semibold">
            Booking <br /> Tiket Antrian
          </h1>
          <FormBooking />
        </div>
        <div>
          <DashboardCalendar />
        </div>
      </div>
    </div>
  );
}
