class APIClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.url = this.baseURL;
    return this;
  }
  endpoint(path) {
    this.url += path;
    return this;
  }
  queryParams(params) {
    this.url.indexOf("?") === -1 ? (this.url += `?`) : (this.url += "&");
    const queryParamValues = [];
    for (let key in params) {
      queryParamValues.push(`${key}=${params[key]}`);
    }
    this.url += queryParamValues.join("&");
    return this;
  }
  get() {
    console.log("Your URL is " + this.url);
  }
}

new APIClient("basURL")
  .endpoint("path")
  .queryParams({ name: "sibashrit", place: "Bengaluru" })
  .queryParams({ name: "pattnaik", place: "Hyderabad" })
  .get();
