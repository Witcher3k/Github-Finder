class UI {
  constructor(profile) {
    this.profile = document.querySelector(".profile");
  }
  showProfile(user) {
    console.log(user.avatar_url);
    this.profile.innerHTML = `<div class="card card-body mb-3 mt-3">
            <div class="row">
             <div class="col-md-3">
              <img class="img-fluid mb-2" src="${user.avatar_url}">
              <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
              </div>
             <div class="col-md-9">
              <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
              <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
              <span class="badge badge-success">Public Followers: ${user.followers}</span>
              <span class="badge badge-info">Following Repos: ${user.following}</span>
              <br><br>
              <ul class="list-group">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                <li class="list-group-item">Company: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
              </ul>
             </div>
            </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }
  clearProfile() {
    this.profile.innerHTML = ``;
  }
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  showAlert(message) {
    this.clearAlert();
    const div = document.createElement("div");
    div.className = "alert alert-danger";
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");
    console.log(search);
    container.insertBefore(div, search);
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }
}
