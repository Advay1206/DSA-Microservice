const request = require('supertest');
const app = require('../src/app');

describe("POST /lru-cache", () => {
  it("should perform put and get operations correctly", async () => {
    const res = await request(app)
      .post('/lru-cache')
      .send({
        capacity: 2,
        operations: [["put", 1, 1], ["put", 2, 2], ["get", 1]]
      });

    expect(res.body.results).toEqual([null, null, 1]);
  });

  it("should evict the least recently used key", async () => {
    const res = await request(app)
      .post('/lru-cache')
      .send({
        capacity: 2,
        operations: [["put",1,1],["put",2,2],["put",3,3],["get",1]]
      });

    // key 1 should have been evicted, so result is -1
    expect(res.body.results).toEqual([null, null, null, -1]);
  });
});
