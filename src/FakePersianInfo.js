import data from "./data.json" assert { type: "json" };
class FakePersianInfo {
  constructor() {
    this.cachedData = data;
  }

  async getInfo() {
    return this.cachedData;
  }

  async getFirstName() {
    try {
      const data = await this.getInfo();
      const randomIndex = Math.floor(Math.random() * data.length);
      const info = {
        firstName: data[randomIndex].firstName,
        gender: data[randomIndex].gender,
      };
      return info;
    } catch (err) {
      console.error("Fetch error : ", err);
      throw err;
    }
  }

  async getLastName() {
    try {
      const data = await this.getInfo();
      const randomIndex = Math.floor(Math.random() * data.length);
      return data[randomIndex].lastName;
    } catch (err) {
      console.error("Fetch error : ", err);
      throw err;
    }
  }

  async getFullInfo() {
    try {
      const data = await this.getInfo();
      const randomIndex = Math.floor(Math.random() * data.length);
      return data[randomIndex];
    } catch (err) {
      console.error("Fetch error : ", err);
      throw err;
    }
  }

  async getMaleFullInfo() {
    try {
      const data = await this.getInfo();
      let filteredData = data.filter((item) => item.gender == "مرد");
      const randomIndex = Math.floor(Math.random() * filteredData.length);
      return filteredData[randomIndex];
    } catch (err) {
      console.error("Fetch error : ", err);
      throw err;
    }
  }

  async getFemaleFullInfo() {
    try {
      const data = await this.getInfo();
      let filteredData = data.filter((item) => item.gender == "زن");
      const randomIndex = Math.floor(Math.random() * filteredData.length);
      return filteredData[randomIndex];
    } catch (err) {
      console.error("Fetch error : ", err);
      throw err;
    }
  }
}

export default FakePersianInfo;
