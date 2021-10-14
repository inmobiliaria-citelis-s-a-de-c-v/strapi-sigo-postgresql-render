'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');


module.exports = {
  async create(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.form.create(data, { files });
    } else {
      entity = await strapi.services.form.create(ctx.request.body);
    }
    entity = sanitizeEntity(entity, { model: strapi.models.form });


      // send an email by using the email plugin
      await strapi.plugins['email'].services.email.send({
        to: 'concierge@sigosobreruedas.com',
        from: 'concierge@sigosobreruedas.com',
        subject: 'Nuevo cliente esta interesado en vender su auto',
        text: `
          Cliente: ${entity.name}
          Email: ${entity.email}
          Teléfono: ${entity.phone}
          Marca: ${entity.brand}
          Modelo: ${entity.model}
          Año: ${entity.year}
          Version: ${entity.version}
          Kms: ${entity.kms}
        `,
      });
    return entity;
  },
};
