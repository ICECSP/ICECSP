import {
  indianFee,
  internationalFee,
} from "@/components/registrationFeePage/data";
import RegistrationFee from "@/components/registrationFeePage/RegistrationFee";

export default function RegistrationFees() {
  return (
    <>
      <div className="container mx-auto mt-5">
        <h1 className="text-primary90 text-4xl text-center font-bold my-8">
          Registration Fees
        </h1>
        <h2 className="text-primary-70 text-2xl text-center font-semibold my-4">
          Indian Authors
        </h2>

        <RegistrationFee data={indianFee} />
        <h2 className="text-primary-70 text-2xl text-center font-semibold my-4">
          Foreign Authors
        </h2>
        <RegistrationFee data={internationalFee} />
      </div>
    </>
  );
}
