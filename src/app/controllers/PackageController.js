class PackageController {
  async get(request, response) {
    try {
      response.json("teste");
    } catch (exception) {
      console.log(exception);
    }
  }
}

export default new PackageController();
