import React from "react";

const papers = [
  {
    id: 458,
    track: 'Signal Processing and Applications',
    title: 'Attention-enabled Convolutional Autoencoder with Optimal Threshold to Detect Image Anomaly for Industrial Quality Assurance',
    authors: 'Rashmiranjan Nayak, Pritha Dutta, Umesh Chandra Pati',
    affiliation: 'National Institute of Technology, Rourkela',
  },
  {
    id: 168,
    track: 'Communication Systems and Networks',
    title: 'Spectrum Assignment in 5G and Beyond Ultra-Dense Networks Utilizing Deep Neural Network Framework',
    authors: 'Saksham Katwal, Nidhi Sharma, Sh. Krishan Kumar Rathod',
    affiliation: 'National Institute of Technology, Hamirpur',
  },
  {
    id: 25,
    track: 'VLSI Technology and Embedded Systems',
    title: 'Performance Analysis of GaSb/InAs Heterojunction TFET for Gas Sensing Applications',
    authors: 'Narender Singh Shekhawat, Madhulika Verma, Dr. Sachin Agrawal',
    affiliation: 'National Institute of Technology, Delhi',
  },
  {
    id: 495,
    track: 'Microelectronic Circuits and Systems',
    title: 'Fault Diagnosis in Advanced Analog Building Blocks Using Ensemble Stacking Technique',
    authors: 'Mansi Singhal, Gufran Ahmad',
    affiliation: 'Dayalbagh Educational Institute (Deemed University), Agra',
  },
];

const BestPaper = () => {
  return (
    <div className="max-w-7xl mx-auto mt-4">
      <h2 className="px-6 py-4 bg-primary90 text-xl leading-4 font-medium text-white uppercase tracking-wider text-center rounded-t-md">
        Best Paper Award
      </h2>
      <div className="overflow-x-auto rounded-b-md">
        <table className="min-w-full border border-black bg-primary90">
          <thead>
            <tr className="border-b border-black">
              <th className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider border-r border-black">
                Paper ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider border-r border-black">
                Track Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider border-r border-black">
                Title of the Paper
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider border-r border-black">
                Authors
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">
                Affiliation
              </th>
            </tr>
          </thead>
          <tbody>
            {papers.map((paper, index) => (
              <tr key={paper.id} className={`bg-primary05 border-b border-black`}>
                <td className="px-4 py-2 whitespace-no-wrap border-r border-black text-gray-800">
                  {paper.id}
                </td>
                <td className="px-4 py-2 whitespace-no-wrap border-r border-black text-gray-800">
                  {paper.track}
                </td>
                <td className="px-4 py-2 whitespace-no-wrap border-r border-black text-gray-800">
                  {paper.title}
                </td>
                <td className="px-4 py-2 whitespace-no-wrap border-r border-black text-gray-800">
                  {paper.authors}
                </td>
                <td className="px-4 py-2 whitespace-no-wrap text-gray-800">
                  {paper.affiliation}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BestPaper;
