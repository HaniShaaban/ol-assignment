import {PROGRESS_STATUS} from "../helpers/enum";

export type Task = {
    id: string;
    name: string;
    phase: string;
    status: PROGRESS_STATUS;
};

export type CreateTaskInput = {
    name: string;
    phase: string
}
