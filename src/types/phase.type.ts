import {PROGRESS_STATUS} from "../helpers/enum";

export type Phase = {
    id: string;
    name: string;
    order: number;
    status: PROGRESS_STATUS
};

export type CreatePhaseInput = {
    name: string;
}
