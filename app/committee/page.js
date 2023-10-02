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
} from "@/components/committeePage/data";
export default function Committees() {
  return (
    <>
      <Committee data={honoraryChair} even={true} />
      <Committee data={conferenceGeneralChair} even={false} />
      <Committee data={conferenceChair} even={true} />
      <Committee data={organizingSecretary} even={false} />
      <Committee data={technicalProgramChair} even={true} />
      <Committee data={steeringCommittee} even={false} />
      <Committee data={publicationCommittee} even={true} />
      <Committee data={websiteUpdationCommittee} even={true} />
      <Committee data={hospitality} even={false} />
      <Committee data={financeChair} even={true} />
      <Committee data={purchase} even={false} />
      <Committee data={technicalProgramCommittee} even={true} />
      <Committee data={internationalAdvisoryCommittee} even={false} />
    </>
  );
}
