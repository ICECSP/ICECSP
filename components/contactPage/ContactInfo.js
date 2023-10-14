import Image from "next/image";
import { contacts } from "./data";

export default function ContactInfo() {
  return (
    <div className="sm:max-w-xl max-w-xs mx-auto">
      {contacts.map((contact, index) => (
        <ContactCard
          key={index}
          contact={contact}
        />
      ))}
    </div>
  )
}

function ContactCard({ contact }) {
  return (
    <div className="bg-primary05 shadow-sm hover:shadow-md transition-shadow rounded p-5 ring-1 ring-primary20 mb-6 sm:mb-8 flex flex-col sm:flex-row items-center justify-center">
      <div className="flex justify-center items-center mx-4 my-2 sm:my-6 w-36 h-36 rounded-full">
        <div className="w-36 h-36 rounded-xl overflow-hidden">
          <Image src={contact.image} alt={contact.name} />
        </div>
      </div>
      <div className="text-gray-600 text-sm">
        <h2 className="text-xl text-center sm:text-left text-primaryDark font-bold my-2 sm:mt-0 mb-2">{contact.name}</h2>
        <p className="hover:text-gray-900"><span className="text-gray-900 pr-3 font-semibold tracking-wide text-justify">Email:</span><a className="underline underline-offset-2 text-primary80" href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <p><span className="text-gray-900 pr-3 font-semibold tracking-wide text-justify">Tel/ Mobile:</span>{contact.phone}</p>
        <p><span className="text-gray-900 pr-3 font-semibold tracking-wide text-justify">Address:</span>{contact.address}</p>
      </div>
    </div>
  );
};