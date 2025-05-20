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
