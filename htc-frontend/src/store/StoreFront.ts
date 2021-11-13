import { createStore, createTypedHooks } from "easy-peasy";
import { tableModel, TableModel } from "./misc/table.store";

export interface StoreModel {
  tableModel: TableModel;
}

export const model: StoreModel = {
  tableModel,
};

export const store = createStore(model);

const { useStoreActions, useStoreState } = createTypedHooks<StoreModel>();

export { useStoreActions, useStoreState };