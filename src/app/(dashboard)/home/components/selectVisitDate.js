import momentJs from "@/lib/config/moment";
import moment from "moment";

function generateDate() {
  momentJs();
  const fiveDaysAhead = [];
  for (let i = 1; fiveDaysAhead.length < 5; i++) {
    const dateAndDay = moment().add(i, "days").format("DD dddd");
    const date = dateAndDay.substring(0, 2);
    const day = dateAndDay.substring(3).toLowerCase();
    if (day == "sabtu" || day == "minggu") {
      console.log("test masuk");
      continue;
    }

    fiveDaysAhead.push({ date, day });
  }
  return fiveDaysAhead;
}

export default function SelectVisitDate() {
  return (
    <div className="flex justify-between rounded-md border-2 px-1 py-2 shadow-sm ">
      {generateDate().map(({ date, day }) => (
        <div key={date + day} className="flex-1 cursor-pointer text-center">
          {/* <input hidden type="radio" id={date} name="selectVisitDate" value={date} /> */}
          <label htmlFor={date} className="cursor-pointer">
            <p className="text-sm capitalize">{day}</p>
            <p>{date}</p>
          </label>
        </div>
      ))}
    </div>
  );
}
