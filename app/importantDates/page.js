import TimeLine from "@/components/importantDatesPage/Timeline";
import {
  firstDates,
  secondDates,
  registrationDates,
} from "@/components/importantDatesPage/data";
export default function ImportantDates() {
  return (
    <>
      <div className="container mx-auto mt-10">
        <TimeLine data={firstDates} title="First Round of Paper Submission"/>
        <TimeLine data={secondDates} title="Second Round of Paper Submission (with extended Dates)" />
        <TimeLine data={registrationDates} title="Registration for the Conference" />
      </div>
    </>
  );
}