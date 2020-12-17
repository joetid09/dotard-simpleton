import { useBusinesses } from "./BusinessProvider.js"
import { Agent } from "./Agent.js"

const contentTarget = document.querySelector(".agents")
const detailTarget = document.querySelector("age.details")

export const agentList = () => {
    const agentBusinesses = useBusinesses();
    const agents = agentBusinesses.map(agent => {
        return { agentName: agent.purchasingAgent, phone: agent.phoneWork, company: agent.companyName }
    });

    agents.forEach(agent => {
        contentTarget.innerHTML += Agent(agent)
    })



}