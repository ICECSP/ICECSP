"use client";
import { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    'Applicant Name': '',
    'Paper ID': '',
    AttendeeType: '',
    PaperTrack: '',
    AuthorType: '',
    RegistrationCategory: '',
    PresentationMode: '',
    IeeMembershipNumber: '',
    PaymentReceipt: null,
    PaymentMode: '',
    FeeAmountPaid: '',
    TransactionNumber: '',
    TransactionDate: '',
  });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      PaymentReceipt: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Submitting..');
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
        if (key === 'PaymentReceipt' && value) {
            formDataToSend.append(key, value, value.name);
          } else {
            formDataToSend.append(key, value);
          }
    });
    console.log("FormData to send:");
    for (let [key, value] of formDataToSend.entries()) {
      console.log(key + ':', value);
    }

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyUijTcVDrLtxWtgrSlRbC9ao8jgfseBULHv5o69pnzfg1x_t_itdklZn4yTiMjnAFU/exec', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setMessage('Data submitted successfully!');
        setIsSubmitting(false);
        // setFormData({
        //   'Applicant Name': '',
        //   'Paper ID': '',
        //   AttendeeType: '',
        //   PaperTrack: '',
        //   AuthorType: '',
        //   RegistrationCategory: '',
        //   PresentationMode: '',
        //   IeeMembershipNumber: '',
        //   PaymentReceipt: null,
        //   PaymentMode: '',
        //   FeeAmountPaid: '',
        //   TransactionNumber: '',
        //   TransactionDate: '',
        // });

        setTimeout(() => {
          setMessage('');
        }, 2600);
      } else {
        throw new Error('Failed to submit the form.');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred while submitting the form.');
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
      />
          <div className="px-6 py-3 bg-primary90 text-center leading-4 font-medium rounded-t-sm">
  <h1 className="text-white text-4xl uppercase">Registration for ICECSP 2024</h1>
</div>

      <form id="form" className="container pl-4 bg-primary05 p-5 rounded-b-sm" onSubmit={handleSubmit}>
      <div className="mb-4">
            <label className="block text-gray-700 text-lg font-bold mb-2">Name of the Applicant (in Capital Letters)</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Applicant Name"
              name="Applicant Name"
              value={formData['Applicant Name']}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-bold mb-2">Paper ID</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Paper ID"
              name="Paper ID"
              value={formData['Paper ID']}
              onChange={handleChange}
            />
          </div>

          <div className="field mb-4">
            <label className="block text-gray-700 text-lg font-bold mb-2">To be Attended as</label>
            <div className="control">
    <div className="select">
            <select
              className="appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              name="AttendeeType"
              value={formData.AttendeeType}
              onChange={handleChange}
              required
            >
              <option value="">Select Attendee Type</option>
              <option value="Presenter">Presenter</option>
              <option value="Guest/Accompanying Person">Guest/Accompanying Person</option>
            </select>
          </div>
          </div>
          </div>

          <div className="field mb-4">
  <label className="block text-gray-700 text-lg font-bold mb-2">Paper Track</label>
  <div className="control">
    <div className="select">
      <select
        className="appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        name="PaperTrack"
        value={formData.PaperTrack}
        onChange={handleChange}
        required
      >
        <option value="">Select Paper Track</option>
        <option value="Micro Electronic Circuit and Systems">Micro Electronic Circuit and Systems</option>
        <option value="Communication System and Networks">Communication System and Networks</option>
        <option value="Signal Processing and Applications">Signal Processing and Applications</option>
        <option value="VLSI Technology and Embedded Systems">VLSI Technology and Embedded Systems</option>
      </select>
    </div>
  </div>
</div>

    <div className="field mb-4">
  <label className="block text-gray-700 text-lg font-bold mb-2">Type of Authors</label>
  <div className="control">
    <div className="select">
      <select
      className='appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
        name="AuthorType"
        value={formData.AuthorType}
        onChange={handleChange}
        required
      >
        <option value="">Select Type</option>
        <option value="Indian Author">Indian Author</option>
        <option value="Foreign Author">Foreign Author</option>
      </select>
    </div>
  </div>
</div>
<div className="field">
  <label className="block text-gray-700 text-lg font-bold mb-2">Category of Registration</label>
  <div className="control">
    <div className="select">
      <select
        name="RegistrationCategory"
        value={formData.RegistrationCategory}
        onChange={handleChange}
        required
      >
        <option value="">Select Registration Category</option>
        <option value="Academician/Researcher (Non-IEEE Member)">Academician/Researcher (Non-IEEE Member)</option>
        <option value="Academician/Researcher (IEEE Members)">Academician/Researcher (IEEE Members)</option>
        <option value="Students (Non-IEEE Member)">Students (Non-IEEE Member)</option>
        <option value="Students (IEEE Members)">Students (IEEE Members)</option>
        <option value="Delegates (Non-Authors/Additional Authors) (IEEE Members)">Delegates (Non-Authors/Additional Authors) (IEEE Members)</option>
        <option value="Delegates (Non-Authors/Additional Authors) (Non-IEEE Members)">Delegates (Non-Authors/Additional Authors) (Non-IEEE Members)</option>
      </select>
    </div>
  </div>
</div>

<div className="field">
  <label className="block text-gray-700 text-lg font-bold mb-2">Mode of Presentation/Presence</label>
  <div className="control">
    <div className="select">
      <select
        name="PresentationMode"
        value={formData.PresentationMode}
        onChange={handleChange}
        required
      >
        <option value="">Select Mode of Presentation/Presence</option>
        <option value="Online">Online</option>
        <option value="Offline/Physical">Offline/Physical</option>
      </select>
    </div>
  </div>
</div>
<div className="field">
  <label className="block text-gray-700 text-lg font-bold mb-2">IEEE Membership Number</label>
  <div className="control">
    <input
      className="input"
      type="text"
      placeholder="Enter IEEE Membership Number"
      name="IeeMembershipNumber"
      value={formData.IeeMembershipNumber}
      onChange={handleChange}
    />
  </div>
</div>
<div className="field">
  <label className="block text-gray-700 text-lg font-bold mb-2">Fee Payment Details</label>
  <div className="control">
    <input
      className="input"
      type="file"
      accept=".jpeg, .jpg, .pdf"
      name="PaymentReceipt"
      onChange={handleFileUpload}
      required
    />
  </div>
  <p className="text-md">Please upload the Fee Payment receipt (JPEG/PDF, max size 1MB)</p>
    <p className="text-md">Bank Details to for Fee Transaction/ RTGS/ NEFT to deposit the requisite registration fee, as per the registration fee mentioned:</p>
    <p><span className="font-bold">Account Name:    </span>ICECSP 2024 NIT DELHI</p>
    <p><span className="font-bold">Bank: </span>ICICI Bank</p>
    <p><span className="font-bold">Address: </span>PLOT NO FA 7 ZONE P1 GT, KARNAL ROAD, NEW DELHI, DELHI - INDIA - 110036</p>
    <p><span className="font-bold">A/C Number: </span>092901001889</p>
    <p><span className="font-bold">MICR: </span>110229103</p>
    <p><span className="font-bold">IFSC: </span>ICIC0000929</p>
</div>
<div className="field">
  <label className="block text-gray-700 text-lg font-bold mb-2">Mode of Payment</label>
  <div className="control">
    <div className="select">
      <select
        name="PaymentMode"
        value={formData.PaymentMode}
        onChange={handleChange}
        required
      >
        <option value="">Select Mode of Payment</option>
        <option value="UPI ID">UPI ID</option>
        <option value="IMPS/RTGS/NEFT">IMPS/RTGS/NEFT</option>
      </select>
    </div>
  </div>
</div>
<div className="field">
  <label className="block text-gray-700 text-lg font-bold mb-2">Amount of Fee Paid</label>
  <div className="control">
    <input
      className="input"
      type="text"
      placeholder="Enter the amount paid"
      name="FeeAmountPaid"
      value={formData.FeeAmountPaid}
      onChange={handleChange}
      required
    />
  </div>
  <p className="text-md">Please enter the amount paid as per the Registration Fee Details provided</p>
</div>
<div className="field">
  <label className="block text-gray-700 text-lg font-bold mb-2">Transaction Number/Transaction ID</label>
  <div className="control">
    <input
      className="input"
      type="text"
      placeholder="Enter UTR Number/Reference Number"
      name="TransactionNumber"
      value={formData.TransactionNumber}
      onChange={handleChange}
      required
    />
  </div>
  <p className="text-md">Please mention the UTR Number/Reference Number of the transaction against the conference registration fee submission</p>
</div>
 <div className="field">
      <label className="block text-gray-700 text-lg font-bold mb-2">Transaction Date</label>
      <div className="control">
        <input
          className="input"
          type="date"
          placeholder="Select Transaction Date"
          name="TransactionDate"
          value={formData.TransactionDate}
          onChange={handleChange}
          required
        />
      </div>
      <p className="text-md">Please select the transaction date with the format (DD/MM/YYYY)</p>
    </div>

    <div className="flex items-center justify-between">
            <button
              className="bg-primary90 hover:bg-primary70 text-white text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </div>
      </form>
      <div
        id="message"
        style={{
          display: message ? 'block' : 'none',
          margin: '20px',
          fontWeight: 'bold',
          color: message.includes('error') ? 'red' : 'green',
          padding: '8px',
          backgroundColor: 'beige',
          borderRadius: '4px',
          borderColor: 'aquamarine',
        }}
      >
        {message}
      </div>
    </div>
  );
}
