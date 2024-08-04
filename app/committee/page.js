import Committee from "@/components/committeePage/Committees";
import {
  technicalProgramCommittee,
  internationalAdvisoryCommittee,
  honoraryChair,
  chiefPatron,
  organizingSecretary,
  oversightCommittee,
  technicalProgramChair,
  financeChair,
  conferenceGeneralChair,
  conferenceChair,
  steeringCommittee,
  publicationCommittee,
  conferenceCommittee,
  websiteUpdationCommittee,
  hospitality,
  managementCommittee,
  purchase,
  nationalAdvisoryCommittee,
  localOrganisingCommittee,
} from "@/components/committeePage/data";
export default function Committees() {
  return (
    <>
      <Committee data={chiefPatron} even={true} />
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
          <Committee data={honoraryChair} even={false} />
        </div>
        <div className="w-full md:w-1/2">
          <Committee data={conferenceGeneralChair} even={false} />
        </div>
      </div>
      <Committee data={conferenceChair} even={true} />
      <Committee data={organizingSecretary} even={false} />
      <Committee data={oversightCommittee} even={true} />
      <Committee data={steeringCommittee} even={false} />
      <Committee data={technicalProgramChair} even={true} />
      <Committee data={internationalAdvisoryCommittee} even={false} onlyData = {true}/>
      <Committee data={nationalAdvisoryCommittee} even={true} onlyData = {true}/>
      <Committee data={technicalProgramCommittee} even={false} onlyData = {true}/>
      <Committee data={localOrganisingCommittee} even={true} onlyData = {true}/>
      <Committee data={conferenceCommittee} even={false} onlyData = {true}/>
      <Committee data={purchase} even={true} onlyData = {true}/>
      <Committee data={managementCommittee} even={false} onlyData = {true}/>
      <Committee data={hospitality} even={true} onlyData = {true}/>
      <Committee data={publicationCommittee} even={false} onlyData = {true}/>
    </>
  );
}
