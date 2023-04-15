import {phasesData, tasksData} from "../dataStore/seed";
import {UserInputError} from "apollo-server";
import {PROGRESS_STATUS} from "./enum";

//Assuming phase data always exists, and we are not starting from 0
//Otherwise, we would check if data exist, if not we would start order and ID from 0
export const generatePhaseID = () => {
    const lastID =  phasesData[phasesData.length - 1].id;
    return  (parseInt(lastID) + 1).toString();
}

export const getHighestPhaseOrder = () => {
    const orders = phasesData.map((a) => a.order)
    return Math.max(...orders)
}

export const findPhaseByID = (phaseID) => {
   return  phasesData.find((el) => el.id === phaseID);
}

export const markPhaseAsDone = (phaseID) => {
    const phase = findPhaseByID(phaseID);
    if (!phase) {
        return new UserInputError('Could not update Task');
    }
    phase.status = PROGRESS_STATUS.COMPLETED;
    return phase;
};
export const checkIfPreviousPhasesDone = (phaseID) => {
    try {
        const currentPhase = findPhaseByID(phaseID)
        if (!currentPhase) {
            return new UserInputError('phase does not exist');
        }
        const { order } = currentPhase;
        // Order = 1 it means this is the first phase, so there is no need to check for incomplete
        if (order === 1) {
            return true;
        }

        // Check if previous phases are all DONE
        const previousPhases = phasesData.filter(
            (el) => el.order < order && el.status !== PROGRESS_STATUS.COMPLETED,
        );

        return previousPhases.length === 0;
    } catch (e) {
        console.log(e);
        return false;
    }
};

export const isCurrentPhaseDone = (phaseID) => {
    const pendingTasks = tasksData.filter(
        (el) => el.phase === phaseID && el.status !== PROGRESS_STATUS.COMPLETED,
    );
    if (pendingTasks?.length > 0) {
        return false;
    }
    markPhaseAsDone(phaseID);
    return true;
};
