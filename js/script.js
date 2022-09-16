console.log("JS OK!");

const user = { name: "Sofia", avatar: "_io" };

const app = new Vue({
  el: "#app",
  data: {
    contacts,
    user,
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
  },
});

function parseDate(string) {
  let shortDate = string.slice(11, 16);
  return shortDate;
}
