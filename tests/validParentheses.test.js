const request = require('supertest');
const app = require('../src/app');

describe("POST /valid-parentheses", () => {
  it("should return true for balanced parentheses", async () => {
    const res = await request(app)
      .post('/valid-parentheses')
      .send({ s: "([{}])" });

    expect(res.body.valid).toBe(true);
  });

  it("should return false for unbalanced parentheses", async () => {
    const res = await request(app)
      .post('/valid-parentheses')
      .send({ s: "([)]" });

    expect(res.body.valid).toBe(false);
  });
});
