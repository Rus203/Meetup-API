import { StatusCodes } from 'http-status-codes';

import userServices from '../services/userServices.js';

const participants = {
  async addParticipant(request, response) {
    const userId = request.user.id;
    const meetupId = request.params.id;
    const meetupInfo = await userServices.addParticipantToMeetup(
      meetupId,
      userId
    );
    response.status(StatusCodes.CREATED).send(meetupInfo);
  },

  async readParticipantsOfMeetup(request, response) {
    const meetupId = request.params.id;
    const participants = await userServices.readParticipantsOfMeetup(meetupId);
    response.status(StatusCodes.OK).send(participants);
  },
};

export default participants;
