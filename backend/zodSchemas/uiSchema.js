const z = require('zod')

const uiSchema = z.object({
    heading:z.string(),
    description:z.string(),
    image:z.string()
})

module.exports = uiSchema