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
      <TimeLine
          data={firstDates}
          title="First Round of Paper Submission"
          borderClassNameTop="rounded-t-xl"
          borderClassNameBottom="none"
        />
        <TimeLine
          data={secondDates}
          title="Second Round of Paper Submission (with extended Dates)"
          borderClassName="none"
          borderClassNameBottom="none"
        />
        <TimeLine
          data={registrationDates}
          title="Registration for the Conference"
          borderClassNameTop="none"
          borderClassNameBottom="rounded-b-xl"
        />
      </div>
    </>
  );
}