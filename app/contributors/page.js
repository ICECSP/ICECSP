import Contributors from "@/components/contributors/Contributors";
import { contributorsImg } from "@/components/contributors/data";

export default function ContributorsPage() {
  return (
    <>
      <Contributors data={contributorsImg} even={true} />
    </>
  );
}

