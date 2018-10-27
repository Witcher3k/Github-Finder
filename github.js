class Github {
  constructor() {
    this.client_id = "6b4e59af610402fa2248";
    this.client_secret = "8bd7580281e85ee0efb44e08b2f6d3c6098296f3";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  static async getUSer(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();

    return profileData;
  }
}
