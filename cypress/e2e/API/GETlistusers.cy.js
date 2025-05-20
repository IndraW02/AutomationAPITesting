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
