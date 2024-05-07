import entuple from "@/public/images/contributors/ENTUPLE.png";
import cas from "@/public/images/contributors/IEEE_CAS.jpg";
import psRaj from "@/public/images/contributors/IEEE_PS_RAJ.webp";
import khalsa from "@/public/images/contributors/KHALSA.webp";
import silicom from "@/public/images/contributors/SILICOM_LOGO.jpg";


export const contributorsImg = [
    {
      type: "CONTRIBUTORS",
      member: [
        {
            id:"1",
          photo: psRaj,
          alt:"IEEE photonics",
        },
        {
            id:"2",
            photo: cas,
            alt:"IEEE CAS",
          },
  
          {
            id:"3",
            photo: entuple,
            alt:"ENTUPLE",
          },
  
          {
            id:"4",
            photo: khalsa,
            alt:"KHALSA College"
          },
          {
            id:"5",
            photo: silicom,
            alt:"Silicom Electronics"
          },
      ],
    },
  ];