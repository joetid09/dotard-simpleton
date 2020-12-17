import { useBusinesses } from "./BusinessProvider.js";
import { Business } from "./Business.js"
import { businessList } from "./BusinessList.js";

const contentTarget = document.querySelector(".businessList--manufacturing")

export const manufacturingBusinesses = () => {
    const businesses = useBusinesses();
    const manuBusinesses = businesses.filter(business => {
        if (business.companyIndustry == "Manufacturing") {
            return true;
        }
    })

    manuBusinesses.forEach(businessObject => {
        contentTarget.innerHTML += Business(businessObject)
    })
}