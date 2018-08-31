////////////////////////////////////////////
// SELECTOR FOR ALREADY RSVP-D GUEST
////////////////////////////////////////////
export const fetchingGuestFulfilled = guestData => {
  if (
    guestData.fetching === false &&
    guestData.fulfilled &&
    guestData.data &&
    guestData.error === false
  ) {
    return true;
  }
  return false;
};

///////////////////////////////////////////////
// SELECTOR FOR WHEN A RSVP HAS BEEN FULFILLED
///////////////////////////////////////////////
export const successfulRsvp = rsvp => {
  if (rsvp.fulfilled && !rsvp.error) {
    return true;
  }
  return false;
};
