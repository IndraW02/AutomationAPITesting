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
