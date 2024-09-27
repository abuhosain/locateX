interface IDate {
  calender: {
    identifier: string;
  };
  day: number;
  era: string;
  month: string;
  year: string;
}

const dateToISO = (date: IDate) => {
  if (!date) {
    return new Date().toISOString();
  }
  return new Date(`${date?.month}-${date?.day}-${date?.year}`).toISOString();
};
export default dateToISO;
