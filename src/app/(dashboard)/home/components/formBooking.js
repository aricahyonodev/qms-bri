import InputText from "@/components/InputText";
import SelectVisitDate from "./selectVisitDate";
import SelectService from "./selectService";

export default function FormBooking() {
  return (
    <form action="" className="flex-col space-y-6 ">
      <SelectVisitDate />
      <InputText
        labelTitle={"Bank Tujuan"}
        id={"bankTujuan"}
        placeholder={"KCP TANDES"}
      />
      <SelectService labelTitle={"Keperluan Layanan"} id={"selectService"} />
      <div className="pt-4">
        <button className="w-full rounded-md bg-primary-light-navy p-2 text-center font-medium text-white">
          Booking Antrian
        </button>
      </div>
    </form>
  );
}
