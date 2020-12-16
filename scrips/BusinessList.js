import { useBusinesses } from "./BusinessProvider.js";
import { Business } from "./Business.js";

const contentTarget = document.querySelector(".business-list")

export const businessList = () => {
    const businessesArray = useBusinesses();
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    businessesArray.forEach(
        businessObject => {
            contentTarget.innerHTML += Business(businessObject)
        }
    )
}