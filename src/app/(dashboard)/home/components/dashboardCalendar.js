import momentJs from "@/config/moment";
import moment from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function DashboardCalendar() {
  momentJs();
  const value = moment().format();
  console.log(value);
  return <Calendar defaultValue={value} />;
}
