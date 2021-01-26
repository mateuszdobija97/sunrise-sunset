export const getDate = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const today = new Date();

    const dayOfTheWeek = days[today.getDay() - 1];
    const month = months[today.getMonth()];
    const day = today.getDate();
    const year = today.getFullYear();
    const date = `${dayOfTheWeek}, ${month} ${day}, ${year}`;

    return date;
};