export const codingQuestionFormat = (str) => {
    str = str.replace(/\n/g, "<br/>");
    let i = 0;
  try {
    let res = "";
    let flag = true;
    while (i + 1 < str.length) {
      if (str[i] == "*" && str[i + 1] == "*") {
        if (flag) {
          res += "<strong>";
          flag = false;
        } else {
          res += "</strong>";
          flag = true;
        }
        i++;
      } else {
        res += str[i];
      }

      i++;
    }
    return res;

  } catch (e) {
    return str.replace(/\n/g, "<br/>");
  }
};
