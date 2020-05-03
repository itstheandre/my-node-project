import { DocumentType } from '@typegoose/typegoose';

export function cleanId<T>(el: DocumentType<T>): T {
  return { ...el.toJSON(), id: el._id };
}
