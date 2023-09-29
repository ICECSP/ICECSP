import Committee from "@/components/committeePage/Committees";
import {
  internationalAdvisoryCommittee,
  technicalProgramCommittee,
  nationalAdvisoryCommittee,
  localOrganisingCommittee,
  honoraryChair,
  generalChair,
  organizingChair,
  organizingSecretary,
  technicalProgramChair,
  publicationChair,
  financeChair,
} from "@/components/committeePage/data";
export default function Committees() {
  return (
    <>
      <Committee data={honoraryChair} even={true} />
      <Committee data={generalChair} even={false} />
      <Committee data={organizingChair} even={true} />
      <Committee data={organizingSecretary} even={false} />
      <Committee data={technicalProgramChair} even={true} />
      <Committee data={publicationChair} even={false} />
      <Committee data={financeChair} even={true} />
      <Committee data={technicalProgramCommittee} even={false} />
      <Committee data={internationalAdvisoryCommittee} even={true} />
      <Committee data={nationalAdvisoryCommittee} even={false} />
      <Committee data={localOrganisingCommittee} even={true} />
    </>
  );
}
