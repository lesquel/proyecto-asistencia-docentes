import { useManageComponentInput } from "./use-manage-componentInput.utils.js";
import { useManageComponent } from "./use-manage.utils.js";
export const generateInput = (
  { className, attributes, expression, value, insertIn },
  { labelText }
) => {
  const field = new useManageComponent({
    className: "field",
    element: "div",
    inner: "",
  })

  const input = new useManageComponentInput({
    className,
    attributes,
    expression,
    value,
  });
  const labelElement = new useManageComponent({
    className: "label",
    element: "label",
    inner: labelText,
    attributes: {
      for: input.component.id,
    },
  });
  field.addInner(labelElement.component);
  field.addInner(input.component);
  field.insertIn(insertIn, "beforebegin");
  return input;
};
