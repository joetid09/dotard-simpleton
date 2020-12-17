import { useBusinesses, businessSearchResult } from "./BusinessProvider.js";
import { Business } from "./Business.js";

const contentTarget = document.querySelector(".business-list")
const searchResultsTarget = document.querySelector(".companySearchResults")
const businessesArray = useBusinesses();

export const businessList = () => {

    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    businessesArray.forEach(
        businessObject => {
            contentTarget.innerHTML += Business(businessObject)
        }
    )
}
const searchResultTarget = document.querySelector("#companySearch").addEventListener("keypress", keyPressEvent => {
    if (keyPressEvent.charCode === 13) {
        const foundBusinessObject = businessSearchResult(keyPressEvent.target.value)
        searchResultsTarget.innerHTML = Business(foundBusinessObject)
    }
})

