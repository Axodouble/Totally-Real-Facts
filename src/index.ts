import { serve } from "bun";

serve({
    port: 3002,
    async fetch(request) {
        return new Response(await realFacts());
    }
})

async function realFacts(){
    const facts = await Bun.file("./src/facts.md").text();
    const factsArray = facts.split("\n");
    const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];
    return randomFact;
}