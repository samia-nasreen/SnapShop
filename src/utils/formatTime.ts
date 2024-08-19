const formatTime = (time: number) => {
  return time < 10 ? `0${time}` : time.toString();
};

export default formatTime;
