export const Business = businessObject => {
    return `
    <section class="business">
        <h2 class="business-name">${businessObject.companyName}</h2>
        <div class="business-address">    
        <p>${businessObject.addressFullStreet}</p>
        <p>${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}
    </p >
        </div >
    </section >
    `
}