import { action, Action, thunk, Thunk } from "easy-peasy";

export interface SelectionPayload {
  title: string
  watchList: string[]
}

interface TableState {
  selection: SelectionPayload[];
}

interface TableAction {
  setSelection: Action<TableModel, SelectionPayload[]>;
}

interface TableThunk {
  callService: Thunk<TableModel, never, any, TableModel, Promise<void>>;
  // fetchService: Thunk<TableModel, string, any, Promise<void>>;
}

export interface TableModel
  extends TableState,
    TableAction,
    TableThunk {}

export const tableModel: TableModel = {
  // *State
  selection: [],

  // *Action
  setSelection: action((state,payload) => {
    state.selection = payload;
  }),
  // setService: action((state, payload) => {
  //   state.service = payload;
  // }),

  // *Thunk
  callService: thunk(async (actions, _) => {}),
  // fetchService: thunk(async (action, payload) => {
  //   action.setService(payload);
  // }),
};