export const findByTestAttr = (wrapper: any, val: string) => wrapper.find(`[data-test="${val}"]`);
