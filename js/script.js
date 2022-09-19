console.log("JS OK!");

const user = { name: "Sofia", avatar: "_io" };

const app = new Vue({
  el: "#app",
  data: {
    contacts,
    user,
    activeIndex: 0,
    message: "",
    char: "",
  },
  methods: {
    getOnlineOffline(i) {
      if (this.contacts[i].visible) {
        return "Online";
      } else {
        return "Offline";
      }
    },
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
      console.log("Active Chat:" + this.activeIndex);
      return this.activeIndex;
    },
    sendMessage(message) {
      let newSentMessage = {
        date: setMessageDate(),
        message: message,
        status: "sent",
      };
      this.contacts[this.activeIndex].messages.push(newSentMessage);
      this.message = "";
      setTimeout(this.receiveMessage, 2000);
    },
    receiveMessage() {
      let newReceivedMessage = {
        date: setMessageDate(),
        message: "OK! (automated response after 2s)",
        status: "received",
      };
      this.contacts[this.activeIndex].messages.push(newReceivedMessage);
      console.log("questa è una risposta automatica!");
    },
    isVisible(i) {
      if (!this.contacts[i].visible) {
        return "hideChat";
      }
    },
    searchChat(char) {
      console.log(char);
      for (i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].visible) {
          if (!this.contacts[i].name.includes(char)) {
            this.changeVisibility(i);
          }
        } else {
          if (this.contacts[i].name.includes(char)) {
            this.changeVisibility(i);
          }
        }
      }
    },

    changeVisibility(i) {
      this.contacts[i].visible = !this.contacts[i].visible;
      console.log("Visibility changed for:", this.contacts[i].name);
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
