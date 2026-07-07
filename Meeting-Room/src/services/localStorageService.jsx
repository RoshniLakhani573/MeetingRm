const localStorageService = {
  initializeRooms(rooms) {

    const existingRooms  = localStorage.getItem("meetingRooms");
    if (!existingRooms){
      localStorageService.setItem("meetingRooms",JSON.stringify(rooms));
    }
  },

  getRooms() {
    return JSON.parse(localStorage.getItem("meetingRooms")) || [];
  },
  

  getBookings() {
    return JSON.parse(localStorage.getItem("bookings")) || [];
  },

  saveBookings(bookings) {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  },
};

export default localStorageService;