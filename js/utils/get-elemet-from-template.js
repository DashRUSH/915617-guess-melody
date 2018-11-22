const getElementFromTemplate = (template) => {
  const parser = new DOMParser();
  return parser.parseFromString(template, `text/html`).body.firstChild;
};

export default getElementFromTemplate;
