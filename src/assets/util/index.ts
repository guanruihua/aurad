import { isEmpty } from "asura-eye";

export const prefixHoc = (prefix: string) => (name?: string) => `${prefix}${isEmpty(name) ? '' : ('-' + name)}`
