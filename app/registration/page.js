import {
  indianFee,
  internationalFee,
} from "@/components/registrationFeePage/data";
import RegistrationFee from "@/components/registrationFeePage/RegistrationFee";
import RegistrationForm from "@/components/registrationFeePage/RegistrationForm";

export default function Registration() {
  return (
    <>
      <div className="mt-6 bg-primary05 p-6 rounded-sm pl-20">
      <strong className="text-primary90 text-4xl p-4">Click here for registration:</strong>
        <a
          href="https://forms.gle/smtYAjf3oTLRJqat6"
          target="_blank"
          class="text-primary90 text-4xl hover:underline hover:text-primary-dark "
        >Registration Form
        </a>
      </div>
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
        <h1 className="mx-5 p-10 text-center font-semibold text-xl text-white">
          *Note: Additional page charges (INR Rs. 500/ per extra pages are
          required for submitting paper of more than 6 pages)
        </h1>
      </div>
    </>
  );
}