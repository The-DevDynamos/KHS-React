import ProcessIcon1 from "../assets/images/repair_process/request-service.png";
import ProcessIcon2 from "../assets/images/repair_process/serviceDispatch.png";
import ProcessIcon3 from "../assets/images/repair_process/repairs.png";
import ProcessIcon4 from "../assets/images/repair_process/folloUp.png";
import ProcessIcon5 from "../assets/images/repair_process/warranty.png";


export const collapsableItems = [
    {
        key : 1,
        title : "What is a Home Warranty", //title of the collapsable menu
        Itemdescriptions : [
            "A home warranty is a valuable service contract that offers peace of mind to homeowners by protecting their homes and budgets from unexpected repair costs. Unlike homeowner's insurance, which typically covers damage from natural disasters or theft, a home warranty covers the cost of repairing or replacing major household systems and appliances due to normal wear and tear. With a home warranty, homeowners can rest easy knowing that they are prepared for any unexpected breakdowns or failures, and that help is just a phone call away.",
        ], //Information under the collapsable item to be presented as a list or divs or p
    },

    {
        key : 2,
        title : "What does KHW cover?", //title of the collapsable menu
        Itemdescriptions : [
            ["Kitchen"],//covered
            ["Umbrella", "Mbiggy G"]//uncovered. Items not covered by KHW
        ], //Information under the collapsable item to be presented as a list or divs or p
    },
];




export const repairProcess = [
    {
        key : 1,
        title : "Request Service",
        icon : ProcessIcon1,
        decsription: "If a covered system or appliance in your home experiences a breakdown, you would submit a service request to your home warranty company. This can often be done online or by phone.",
    },

    {
        key : 2,
        title : "Service Dispatch",
        icon : ProcessIcon2,
        decsription : "Once your service request is received, your home warranty company will dispatch a licensed and insured technician to your home. The technician will contact you to schedule a convenient service appointment.",
    },

    {
        key : 3,
        title : "Diagnosis and Repairs",
        icon : ProcessIcon3,
        decsription : "The technician will diagnose the issue with your covered system or appliance and perform the necessary repairs or replacements. If the repairs are covered under your home warranty plan, you will typically only be responsible for a service fee or deductible.",
    },

    {
        key : 4,
        title : "Follow Up",
        icon : ProcessIcon4,
        decsription : "Kenya home warranty company will follow up with you after the repairs are complete to ensure that you are satisfied with the service provided.",
    },

    {
        key : 5,
        title : "Continued Coverage",
        icon : ProcessIcon5,
        decsription : "Your home warranty plan will continue to provide coverage for the repaired or replaced system or appliance as long as you maintain your coverage and adhere to any specific terms and conditions outlined in your plan.",
    },
];



export  const footerContent = [
    {
        key : 1,
        title : "Contact Us",
        items : ["Email", "contact@khw.net" ,"Phone", "(+254)- (7292)-(91558)",  "location", "Nairobi Kenya"],
    },

    {
        key : 2,
        title : "Social Media links",
        items : [ "Facebook", "Twitter", "Instagram",],
    },

    {
        key : 3,
        title : "",
        items : ["About Us", "FAQs", "Contact Support", "Careers"],
    }
];