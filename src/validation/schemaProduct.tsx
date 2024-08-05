import Joi from "joi";

const schemaProduct = Joi.object({
  title: Joi.string().required().min(3),
  images: Joi.string().required().min(3),
  price: Joi.number().required().min(1),
  description: Joi.string().required().min(1),
});
export default schemaProduct;
