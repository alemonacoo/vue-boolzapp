console.log("JS OK!");

const user = { name: "Sofia", avatar: "_io" };

const app = new Vue({
  el: "#app",
  data: {
    contacts,
    user,
    activeIndex: 0,
    message: "",
  },
  methods: {
    getLastMessage(i) {
      let lastMessage = "";
      lastMessage =
        this.contacts[i].messages[this.contacts[i].messages.length - 1].message;
      return lastMessage;
    },
    getMessageTime(i, message) {
      return parseDate(this.contacts[i].messages[message].date);
    },
    getLastMessageTime(i) {
      return parseDate(
        this.contacts[i].messages[this.contacts[i].messages.length - 1].date
      );
    },
    setActiveIndex(i) {
      this.activeIndex = i;
      console.log(this.activeIndex);
      return this.activeIndex;
    },
    getVisibility(i) {
      if (this.contacts[i].visible) {
        return "Online";
      } else {
        return "Offline";
      }
    },
    sendMessage(message) {
      let newMessage = {
        date: setMessageDate(),
        message: message,
        status: "sent",
      };
      this.contacts[this.activeIndex].messages.push(newMessage);
      this.message = "";
    },
  },
});

// Useful Functions:
// Function to get date from data
function parseDate(string) {
  let shortDate = string.slice(11, 16);
  return shortDate;
}

// Function to creat a date just like the ones found in our data
function setMessageDate() {
  let day = new Date().getDate();
  if (day < 10) {
    day = `0${day}`;
  }
  let month = new Date().getMonth();
  if (month < 10) {
    month = `0${month}`;
  }
  let year = new Date().getFullYear();
  let hours = new Date().getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = new Date().getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let seconds = new Date().getSeconds();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  let string = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  console.log(string);
  return string;
}
