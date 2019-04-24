export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_BOOKING_MODAL = 'OPEN_BOOKING_MODAL';

export const openModal = modal => {
  return {
    type: OPEN_MODAL,
    modal
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

export const openBookingModal = (modal, data) => {
  return {
    type: OPEN_BOOKING_MODAL,
    modal,
    data,
  }
}