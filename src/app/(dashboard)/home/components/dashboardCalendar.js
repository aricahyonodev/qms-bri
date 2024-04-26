import momentJs from "@/lib/momentJs/config";
import moment from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function DashboardCalendar() {
  momentJs();
  const value = moment().format("DD/MMMM/YYYY");
  return <Calendar value={value} />;
}
