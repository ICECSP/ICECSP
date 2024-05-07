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
        <Timeline
          data={firstDates}
          title="First Round of Paper Submission"
          borderClassNameTop="rounded-t-xl"
          borderClassNameBottom="none"
        />
        <Timeline
          data={secondDates}
          title="Second Round of Paper Submission (with extended Dates)"
          borderClassName="none"
          borderClassNameBottom="none"
        />
        <Timeline
          data={registrationDates}
          title="Registration for the Conference"
          borderClassNameTop="none"
          borderClassNameBottom="rounded-b-xl"
        />
      </div>
    </>
  );
}
