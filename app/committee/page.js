import Committee from "@/components/committeePage/Committees";
import {
  technicalProgramCommittee,
  internationalAdvisoryCommittee,
  honoraryChair,
  organizingSecretary,
  oversightCommittee,
  technicalProgramChair,
  financeChair,
  conferenceGeneralChair,
  conferenceChair,
  steeringCommittee,
  publicationCommittee,
  websiteUpdationCommittee,
  hospitality,
  purchase,
  nationalAdvisoryCommittee,
  localOrganisingCommittee,
} from "@/components/committeePage/data";
export default function Committees() {
  return (
    <>
      <Committee data={honoraryChair} even={false} />
      <Committee data={conferenceGeneralChair} even={true} />
      <Committee data={conferenceChair} even={false} />
      <Committee data={organizingSecretary} even={true} />
      <Committee data={oversightCommittee} even={false} />
      <Committee data={steeringCommittee} even={true} />
      <Committee data={technicalProgramChair} even={false} />
      <Committee data={internationalAdvisoryCommittee} even={true} onlyData = {true}/>
      <Committee data={nationalAdvisoryCommittee} even={false} onlyData = {true}/>
      <Committee data={technicalProgramCommittee} even={true} onlyData = {true}/>
      <Committee data={localOrganisingCommittee} even={false} onlyData = {true}/>
      <Committee data={publicationCommittee} even={true} onlyData = {true}/>
      <Committee data={websiteUpdationCommittee} even={false} onlyData = {true}/>
      <Committee data={hospitality} even={true} onlyData = {true}/>
      <Committee data={financeChair} even={false} onlyData = {true}/>
      <Committee data={purchase} even={true} onlyData = {true}/>
    </>
  );
}
