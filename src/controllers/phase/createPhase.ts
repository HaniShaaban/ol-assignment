import {ApolloError} from "apollo-server";
import {CreatePhaseInput, Phase} from "../../types/phase.type";
import {phasesData} from "../../dataStore/seed";
import {PROGRESS_STATUS} from "../../helpers/enum";
import {generatePhaseID, getHighestPhaseOrder} from "../../helpers/phases";

export const createPhase =  (_,{input}) => {
    try {
        const { name } : CreatePhaseInput = input;

        // Generate ID based on last id in order to create the newly added phase,
        const generatedID = generatePhaseID();

        const createPhasePayload: Phase = {
            status: PROGRESS_STATUS.PENDING,
            id: generatedID,
            name,
            order: getHighestPhaseOrder()
        };
        phasesData.push(createPhasePayload);
        return createPhasePayload;
    }
    catch (e){
        //Should be reported - ex: Sentry, Winston
        console.log(e);
        return new ApolloError('Error has occurred')
    }
}
