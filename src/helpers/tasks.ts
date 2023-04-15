import {tasksData} from "../dataStore/seed";

export const generateTaskID = () => {
    const lastID =  tasksData[tasksData.length - 1].id;
    return  (parseInt(lastID) + 1).toString();
}

export const findTaskByID = (taskID) => {
    return  tasksData.find((el) => el.id === taskID);
}
