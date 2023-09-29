import Committee from "@/components/committeePage/Committees"
import {cheifPatron, internationalAdvisoryCommittee, technicalProgramCommittee ,nationalAdvisoryCommittee, localOrganisingCommittee} from '@/components/committeePage/data'
export default function Committees() {
    return (
        <> 
            <Committee data = {cheifPatron} even={true}/>
            <Committee data={technicalProgramCommittee} even={false}/>
            <Committee data = {internationalAdvisoryCommittee} even={true}/>
            <Committee data = {nationalAdvisoryCommittee} even={false}/>
            <Committee data = {localOrganisingCommittee} even={true}/>
           
        </>
    )
}
