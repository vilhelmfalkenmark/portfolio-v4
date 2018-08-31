////////////////////////////////////////////
// Set cookie
////////////////////////////////////////////
export const setCookie = guestId => {
  const date = new Date();
  date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000); // let the cookie be valid for a year
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `RSVP_COMPLETE=${JSON.stringify({
    id: guestId
  })};${expires};path=/`;
};

let guestObject = {};

////////////////////////////////////////////
// Read cookie
////////////////////////////////////////////
export const readCookie = () => {
  const allCookies = decodeURIComponent(document.cookie).split(";");
  for (var i = 0; i < allCookies.length; i++) {
    if (allCookies[i].indexOf("RSVP_COMPLETE") !== -1) {
      guestObject = JSON.parse(allCookies[i].replace(/RSVP_COMPLETE=/g, ""));
      return guestObject;
    }
  }
  return false;
};

////////////////////////////////////////////
// Delete cookie
////////////////////////////////////////////
export const deleteCookie = () => {
  document.cookie =
    "RSVP_COMPLETE=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
};
