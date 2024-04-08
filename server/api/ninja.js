export default defineEventHandler(async (event) => {

    const { name } = getQuery(event);
    const { age, prenom } = await readBody(event);

    return {
        message: `Bonjour ${name} ${prenom} et tu as ${age} ans`
    }
})