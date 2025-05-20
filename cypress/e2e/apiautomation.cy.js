// cypress/e2e/GET_ListUsers.cy.js
describe("GET List Users", () => {
  it("should return a list of users on page 2", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?page=2",
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.data).to.be.an("array");
    });
  });
});

// cypress/e2e/GET_SingleUser.cy.js
describe("GET Single User", () => {
  it("should return user details for ID 2", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users/2",
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.data.id).to.eq(2);
    });
  });
});

// cypress/e2e/POST_CreateUser.cy.js
describe("POST Create User", () => {
  it("should create a new user", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      headers: {
        "x-api-key": "reqres-free-v1",
        "Content-Type": "application/json",
      },
      body: {
        name: "morpheus",
        job: "leader",
      },
    }).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body).to.have.property("id");
    });
  });
});

// cypress/e2e/PUT_UpdateUser.cy.js
describe("PUT Update User", () => {
  it("should update the user data", () => {
    cy.request({
      method: "PUT",
      url: "https://reqres.in/api/users/2",
      headers: {
        "x-api-key": "reqres-free-v1",
        "Content-Type": "application/json",
      },
      body: {
        name: "morpheus",
        job: "zion resident",
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
    });
  });
});

// cypress/e2e/DELETE_User.cy.js
describe("DELETE User", () => {
  it("should delete user with ID 2", () => {
    cy.request({
      method: "DELETE",
      url: "https://reqres.in/api/users/2",
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    }).then((res) => {
      expect(res.status).to.eq(204);
    });
  });
});
