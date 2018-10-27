const searchUser = document.getElementById("search");
const ui = new UI();

searchUser.addEventListener("keyup", e => {
  const searchText = e.target.value;
  if (searchText !== "") {
    Github.getUSer(searchText).then(data => {
      console.log(data);
      if (data.message === "Not Found") {
        //show alert
        ui.showAlert(`User not found`);
      } else {
        ui.showProfile(data);
      }
    });
  } else {
    //clear datau
    ui.clearProfile();
  }
});
