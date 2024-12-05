  function digitToPashtoWord(event, level) {

      if (level === void 0) { level = 0; }
      if (input === null) {
          return "";
      }

      var num = parseInt(input.toString());

      if (num < 0) {
          num = num * -1;
          return "منفی " + digitToPashtoWord(num, level);
      }
      if (num === 0) {
          if (level === 0) {
              return "صفر";
          } else {
              return "";
          }
      }

      var result = "";
      var yekan = ["یو", "دوه", "دری", "څلور", "پينځه", "شپږ", "اوه", "اته", "نه"],
          dahgan = ["شل", "دیرش", "څلویښت", "پنځوس", "شپیته", "اویا", "اتیا", "نوی"],
          sadgan = ["سل", "دوه سوه", "دری سوه", "څلور سوه", "پنځه سوه", "شپږ سوه", "اوه سوه", "اته سوه", "نه سوه"],
          dah = ["لس", "یوولس", "دولس", "دیارلس", "څوارلس", "پنځلس", "شپاړلس", "اوه لس", "اتلس", "نولس"];

      // Handling numbers less than 10
      if (num < 10) {
          result += yekan[num - 1];
      }
      // Handling numbers between 10 and 19
      else if (num < 20) {
          result += dah[num - 10];
      }
      // Handling numbers between 20 and 99
      else if (num < 100) {
          var units = num % 10;
          var tens = Math.floor(num / 10) - 2;
          if (units !== 0) {
              result += yekan[units - 1] + " " + dahgan[tens];
          } else {
              result += dahgan[tens];
          }
      }
      // Handling numbers between 100 and 999
      else if (num < 1000) {
          if (Math.floor(num / 100) === 1) {
              result += "یو سل";
          } else {
              result += sadgan[Math.floor(num / 100) - 1];
          }
          if (num % 100 !== 0) {
              result += " او " + digitToPashtoWord({ target: { value: num % 100 } }, level + 1, id);
          }
      }
      // Handling numbers between 1000 and 99999
      else if (num < 100000) {
          result += digitToPashtoWord({ target: { value: Math.floor(num / 1000) } }, level + 1, id) + " زره";
          if (num % 1000 !== 0) {
              result += " " + digitToPashtoWord({ target: { value: num % 1000 } }, level + 1, id);
          }
      }
      // Handling numbers between 100000 and 9999999
      else if (num < 10000000) {
          result += digitToPashtoWord({ target: { value: Math.floor(num / 100000) } }, level + 1, id) + " لکه";
          if (num % 100000 !== 0) {
              result += " " + digitToPashtoWord({ target: { value: num % 100000 } }, level + 1, id);
          }
      }
      // Handling numbers between 10000000 and 999999999
      else if (num < 1000000000) {
          result += digitToPashtoWord({ target: { value: Math.floor(num / 10000000) } }, level + 1, id) + " میلیون";
          if (num % 10000000 !== 0) {
              result += " او " + digitToPashtoWord({ target: { value: num % 10000000 } }, level + 1, id);
          }
      }
      // Handling numbers greater than 1000000000
      else if (num >= 1000000000) {
          result += digitToPashtoWord({ target: { value: Math.floor(num / 1000000000) } }, level + 1, id) + " میلیارد";
          if (num % 1000000000 !== 0) {
              result += " " + digitToPashtoWord({ target: { value: num % 1000000000 } }, level + 1, id);
          }
      }

      // Fix for special cases for numbers with 20 (like 20, 20000)
      if (num === 20) {
          result = "شل";
      } else if (num % 100 === 0) {
          result = result.replace("ویشت", "شل");
      } else if (result.includes("شل") && num >= 20) {
          result = result.replace("شل", "ویشت");
      }

      if (result.includes("یو سل") && num == 100) {
          result = result.replace("یو سل", "سل");
      }

      return result.trim();
  }
