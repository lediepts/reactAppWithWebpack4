export interface IIncrementCountAction {
    readonly type: 'INCREMENT';
}
export interface IDecrementCountAction {
    readonly type: 'DECREMENT';
}
export interface SetUser {
        type:"GET_NAME",
        payload: string
}

export type CountActions =
| IIncrementCountAction
| IDecrementCountAction
| SetUser