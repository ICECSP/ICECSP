
import { contacts } from "./data";

export default function ContactInfo() {
    return (
        <div className="container mx-auto mt-8">
          <h1 className="text-3xl font-bold mb-4">Contact Information</h1>
    
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
      <div className="bg-white shadow-md rounded p-6 mb-8">
        <h2 className="text-xl font-bold mb-2">{contact.name}</h2>
        <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <p>Tel / Mo: {contact.phone}</p>
        <p>Address: {contact.address}</p>
      </div>
    );
  };