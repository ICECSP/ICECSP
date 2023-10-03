import Committee from "@/components/committeePage/Committees";
import {
  technicalProgramCommittee,
  internationalAdvisoryCommittee,
  honoraryChair,
  organizingSecretary,
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
      <Committee data={steeringCommittee} even={false} />
      <Committee data={technicalProgramChair} even={true} />
      <Committee data={internationalAdvisoryCommittee} even={false} onlyData = {true}/>
      <Committee data={nationalAdvisoryCommittee} even={true} onlyData = {true}/>
      <Committee data={technicalProgramCommittee} even={false} onlyData = {true}/>
      <Committee data={localOrganisingCommittee} even={true} onlyData = {true}/>
      <Committee data={publicationCommittee} even={false} onlyData = {true}/>
      <Committee data={websiteUpdationCommittee} even={true} onlyData = {true}/>
      <Committee data={hospitality} even={false} onlyData = {true}/>
      <Committee data={financeChair} even={true} onlyData = {true}/>
      <Committee data={purchase} even={false} onlyData = {true}/>
    </>
  );
}
