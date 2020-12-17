export const Agent = (agent) => {
    return `
<h2>${agent.agentName.nameFirst} ${agent.agentName.nameLast}</h2>
<p>Phone: ${agent.phone}</p>
<p>Company: ${agent.company}</p>
`
}