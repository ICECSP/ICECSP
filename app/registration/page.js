import {
  indianFee,
  internationalFee,
} from "@/components/registrationFeePage/data";
import RegistrationFee from "@/components/registrationFeePage/RegistrationFee";

export default function Registration() {
  return (
    <>
      <div className="dark:bg-gray-100  p-6 rounded-sm pl-20">
        <strong className="text-primary90 text-4xl">
          Click here for registration:
        </strong>
        <a
          href="https://forms.gle/smtYAjf3oTLRJqat6"
          target="_blank"
          className="text-primary90 text-4xl underline p-2"
        >
          Registration Form
        </a>

        <p className="mt-4 text-primary90 text-xl">
          Every candidate must have to upload the duly signed registration form
          at the last step of online registration.
          <a
            href="/docs/REGISTRATION_FORM.pdf"
            className="text-primary90 underline p-2"
            download
          >
            Template
          </a>
        </p>

        <p className="mt-4 text-primary90 text-xl">
          Bank Details to for Fee Transaction/RTGS/NEFT to deposit the requisite
          registration fee, as per the registration fee mentioned:
        </p>

        <ul className="mt-2 text-primary90 text-lg list-disc pl-8">
          <li>
            <strong>Account Name:</strong> ICECSP 2024 NIT DELHI
          </li>
          <li>
            <strong>Bank:</strong> ICICI Bank
          </li>
          <li>
            <strong>Address:</strong> PLOT NO FA 7 ZONE P1 GT, KARNAL ROAD, NEW
            DELHI DELHI - INDIA - 110036
          </li>
          <li>
            <strong>A/C Number:</strong> 092901001889
          </li>
          <li>
            <strong>MICR:</strong> 110229103
          </li>
          <li>
            <strong>IFSC:</strong> ICIC0000929
          </li>
          <li>
           <strong>SWIFT code:</strong> ICICINBBNR
          </li>
        </ul>
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
        <h1 className="mx-5 p-10 text-center font-semibold text-xl">
          *Note: Additional page charges (INR Rs. 500/ per extra pages are
          required for submitting paper of more than 6 pages)
        </h1>
      </div>
    </>
  );
}
