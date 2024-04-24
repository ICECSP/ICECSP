import {
  firstDates,
  secondDates,
  registrationDates,
} from "@/components/importantDatesPage/data";
import Timeline from "@/components/importantDatesPage/Timeline";

export default function RegistrationFees() {
  return (
    <>
      <div className="container mx-auto mt-5">
        <Timeline data={firstDates} title="First Round of Paper Submission" className="border rounded-md"/>
        <Timeline data={secondDates} title="Second Round of Paper Submission (with extended Dates)" />
        <Timeline data={registrationDates} title="Registration for the Conference" />
      </div>
    </>
  );
}
