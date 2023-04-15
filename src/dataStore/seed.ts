import {Phase} from "../types/phase.type";
import {PROGRESS_STATUS} from "../helpers/enum";
import {Task} from "../types/task.type";

export const phasesData: Phase[] = [
    {
        id: '3',
        name: 'Delivery',
        order: 3,
        status: PROGRESS_STATUS.PENDING,
    },
    {
        id: '1',
        name: 'Foundation',
        order: 1,
        status: PROGRESS_STATUS.PENDING,
    },
    {
        id: '2',
        name: 'Discovery',
        order: 2,
        status: PROGRESS_STATUS.PENDING,
    },
];

export const tasksData: Task[] = [
    {
        id: '1',
        name: 'Setup virtual office',
        phase: '1',
        status: PROGRESS_STATUS.PENDING,
    },
    {
        id: '2',
        name: 'Set mission & vision',
        phase: '1',
        status: PROGRESS_STATUS.PENDING,
    },
    {
        id: '3',
        name: 'Select business name',
        phase: '1',
        status: PROGRESS_STATUS.PENDING,
    },
    {
        id: '4',
        name: 'Buy domains',
        phase: '1',
        status: PROGRESS_STATUS.PENDING,
    },
    {
        id: '5',
        name: 'Create roadmap',
        phase: '2',
        status: PROGRESS_STATUS.PENDING,
    },
    {
        id: '6',
        name: 'Competitor analysis',
        phase: '2',
        status: PROGRESS_STATUS.PENDING,
    },
    {
        id: '7',
        name: 'Release marketing website',
        phase: '3',
        status: PROGRESS_STATUS.PENDING,
    },
    {
        id: '8',
        name: 'Release MVP',
        phase: '3',
        status: PROGRESS_STATUS.PENDING,
    },
];
