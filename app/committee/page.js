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
      <Committee data={honoraryChair} even={true} />
      <Committee data={conferenceGeneralChair} even={false} />
      <Committee data={conferenceChair} even={true} />
      <Committee data={organizingSecretary} even={false} />
      <Committee data={steeringCommittee} even={true} />
      <Committee data={internationalAdvisoryCommittee} even={false} />
      <Committee data={nationalAdvisoryCommittee} even={true} />
      <Committee data={technicalProgramChair} even={false} />
      <Committee data={technicalProgramCommittee} even={true} />
      <Committee data={localOrganisingCommittee} even={false} />
      <Committee data={publicationCommittee} even={true} />
      <Committee data={websiteUpdationCommittee} even={false} />
      <Committee data={hospitality} even={true} />
      <Committee data={financeChair} even={false} />
      <Committee data={purchase} even={true} />
    </>
  );
}
