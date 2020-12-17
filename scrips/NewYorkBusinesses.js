import { useBusinesses } from "./BusinessProvider.js"
import { Business } from "./Business.js"

const contentTarget = document.querySelector(".businessList--newYork")

export const newYorkBusinessList = () => {
    const businessList = useBusinesses();
    const newYorkBusinesses = businessList.filter(business => {
        if (business.addressStateCode == "NY") {
            return true;
        }
    })

    newYorkBusinesses.forEach(business => {
        contentTarget.innerHTML += Business(business)
    })

}