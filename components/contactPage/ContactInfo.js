import Image from "next/image";
import { contacts } from "./data";

export default function ContactInfo() {
    return (
        <div className="w-2/5 mx-auto mt-8">
    
          {contacts.map((contact, index) => (
            <ContactCard
              key={index}
              contact = {contact}
            />
          ))}
        </div>
      )
}

function ContactCard({ contact }){
    return (
      <div className="bg-primary05 shadow-sm hover:shadow-md transition-shadow rounded p-5 ring-1 ring-primary20 mb-8 flex items-center justify-center">
        <div className="flex justify-center items-center mx-4 my-6 w-36 h-36 rounded-full">
          <div className="w-36 h-36 rounded-full overflow-hidden ring-1 ring-primary80 ring-offset-2 ring-offset-white">
          <Image src = {contact.image} alt = {contact.name} />
          </div>
        </div>
        <div>

        <h2 className="text-xl text-primary90 font-bold mb-2">{contact.name}</h2>
        <p className="text-gray-600 hover:text-gray-900"><span className="text-gray-900 pr-3 font-semibold tracking-wide text-justify">Email:</span><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <p className="text-gray-600"><span className="text-gray-900 pr-3 font-semibold tracking-wide text-justify">Tel/ Mobile:</span>{contact.phone}</p>
        <p className="text-gray-600"><span className="text-gray-900 pr-3 font-semibold tracking-wide text-justify">Address:</span>{contact.address}</p>
        </div>
      </div>
    );
  };