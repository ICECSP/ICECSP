import Link from "next/link";
export default function CallForPapers() {
  return (
    <>
      <h1 className="mx-5 my-10 text-left font-semibold text-xl">
        The theme of the conference is “Microelectronics/ VLSI, Electronic
        Circuits, Analog & Digital/ Optical Communication and Signal
        Processing”. However, ICECSP 2024 solicits original papers contributions
        in all of the related areas.
      </h1>

      <h1 className="mx-5 my-10 text-left font-semibold text-xl">
        The conference has been sub divided into following tracks:
      </h1>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Track Number
              </th>
              <th scope="col" class="px-6 py-3">
                Nomenclature
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Track 1
              </th>
              <td class="px-6 py-4">Microelectronic Circuits and Systems</td>
            </tr>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Track 2
              </th>
              <td class="px-6 py-4">Communication Systems &amp; Networks</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Track 3
              </th>
              <td class="px-6 py-4">Signal Processing and Applications</td>
            </tr>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Track 4
              </th>
              <td class="px-6 py-4">VLSI Technology and Embedded Systems</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mx-5 my-10 text-left font-md text-xl">
        ICECSP 2024 invites full-length original research articles from
        professionals from academic institutes, industries, R&amp;D
        organizations, students, and research scholars from India and across the
        world. Original research contributions and review articles not exceeding
        eight pages in double-column format shall be submitted. The papers
        should contribute original research ideas, results, their analysis, new
        findings, etc. The paper should not have been published in any journals
        or conference proceedings and should not be under review in any of
        journal/conference. All the submitted manuscripts will be sent for peer
        review and the corresponding author will be notified about the outcome
        of the review process as acceptance/revision/rejection of the paper.
      </h2>

      <h1 className="mx-5 mt-5 mb-2 text-left font-bold text-xl">
        Author Instructions:
      </h1>
      <ul className="mx-5 text-left mt-2 ">
        <li>Manuscript Templates for ICECSP -2024.</li>
        <li>
          MS Word and pdf templates for ICECSP – 2024 conference papers
          (US-letter or A4 page size) are provided at:
          <a href="http://www.ieee.org/conferences_events/conferences/publishing/templates.html">
            {" "}
            http://www.ieee.org/conferences_events/conferences/publishing/templates.html
          </a>
        </li>
      </ul>

      <h1 className="mx-5 mt-5 mb-2 text-left font-bold text-xl">
        Paper Guidelines:
      </h1>
      <p className="mx-5">
        The paper should be written in English with a maximum paper length of
        eight printed pages including figures.
      </p>
      <p className="mx-5">
        Soft copy of the full length manuscripts (in .doc/docx and .pdf) shall
        be submitted to icecsp2024@nitdelhi.ac.in
      </p>
    </>
  );
}
