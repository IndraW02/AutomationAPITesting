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
