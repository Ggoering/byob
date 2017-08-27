const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
const server = require('../server');

const environment = process.env.NODE_ENV || 'test';
const configuration = require('../knexfile')[environment];
const configuration = require('../knexfile')[environment];
const knex = require('knex')(configuration);

chai.use(chaiHttp);

describe('API Routes', () => {
  before((done) => {
    knex.migrate.latest()
      .then(() => done());
  });

  beforeEach((done) => {
    knex.seed.run()
      .then(() => done());
  });

  // describe('GET /v1/:regionType', () => {
  //   it.skip(':) should return all entries for specified region type', (done) => {
  //     // GEORGE
  //     chai.request(server)
  //       .get('/api/v1/state')
  //       .end((err, response) => {
  //         // test all the things!
  //         done();
  //       });
  //   });
  // 
  //   it(':) should return filtered entries for region type with provided query parameters', (done) => {
  //     // LINDSAY
  //     chai.request(server)
  //       .get('/api/v1/city?state=NY')
  //       .end((err, response) => {
  //         response.should.have.status(200);
  //         response.should.be.json;
  //         response.body.should.be.a('array');
  //         response.body.length.should.equal(2);
  //         response.body[0].should.have.property('id');
  //         response.body[0].should.have.property('name');
  //         response.body[0].should.have.property('metro_id');
  //         response.body[0].should.have.property('state_id');
  //         response.body[0].should.have.property('collected_on');
  //         response.body[0].should.have.property('median_rent');
  //         response.body[0].should.have.property('monthly_change');
  //         response.body[0].should.have.property('quarterly_change');
  //         response.body[0].should.have.property('yearly_change');
  //         response.body[0].should.have.property('size_rank');
  //         response.body[0].should.have.property('state');
  //         response.body[0].should.have.property('metro');
  //         response.body[0].should.have.property('county');
  //         response.body[0].should.have.property('created_at');
  //         response.body[0].should.have.property('updated_at');
  //         response.body[0].name.should.equal('New York');
  //         response.body[1].name.should.equal('Yonkers');
  //         response.body[0].state.should.equal('NY');
  //         response.body[1].state.should.equal('NY');
  //         done();
  //       });
  //   });
  // 
  //   it(':) should return no entries if the provided query parameters do not match any records', (done) => {
  //     // LINDSAY
  //     chai.request(server)
  //       .get('/api/v1/city?state=XX')
  //       .end((err, response) => {
  //         response.should.have.status(200);
  //         response.should.be.json;
  //         response.body.should.be.a('object');
  //         response.body.err.should.equal('No matching entries');
  //         done();
  //       });
  //   });
  // 
  //   it.skip(':( should return an error message for unprocessable region types', (done) => {
  //     // GEORGE
  //     chai.request(server)
  //       .get('/api/v1/country')
  //       .end((err, response) => {
  //         // test all the things!
  //         done();
  //       });
  //   });
  // });
  // 
  // describe('POST /v1/:regionType', () => {
  //   // GEORGE
  //   it.skip(':) should add an entry to the zipcode table', (done) => {
  //     chai.request(server)
  //       .post('/api/v1/zipcode')
  //       .end((err, response) => {
  //         // test all the things!
  //         done();
  //       });
  //   });
  // 
  //   it.skip(':) should add an entry to the neighborhood table', (done) => {
  //     chai.request(server)
  //       .post('/api/v1/neighborhood')
  //       .end((err, response) => {
  //         // test all the things!
  //         done();
  //       });
  //   });
  // 
  //   it.skip(':( should not add an entry to the specified table if missing required parameters', (done) => {
  //     chai.request(server)
  //       .post('/api/v1/neighborhood')
  //       .end((err, response) => {
  //         // test all the things!
  //         done();
  //       });
  //   });
  // 
  //   it.skip(':( should return a clear error message if associated region does not exist in the database', (done) => {
  //     chai.request(server)
  //       .post('/api/v1/neighborhood')
  //       .end((err, response) => {
  //         // test all the things!
  //         done();
  //       });
  //   });
  // });
  // 
  // describe('PUT /v1/:regionType', () => {
  //   // LINDSAY
  //   it(':) should be a secure endpoint', (done) => {
  //     const update = {
  //       data: [
  //         {
  //           name: 'Upper West Side',
  //           median_rent: 3999,
  //           size_rank: 2,
  //         },
  //       ],
  //     };
  // 
  //     chai.request(server)
  //       .put('/api/v1/neighborhood')
  //       .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx3cEB0dXJpbmcuaW8iLCJhcHBOYW1lIjoiYm9iIiwiYWRtaW4iOnRydWUsImlhdCI6MTUwMzYwODAyNn0.tLsJdo6YmImo5pXMALELcBvhUERQbbAHi1NYw8sF1W8')
  //       .send(update)
  //       .end((err, response) => {
  //         response.should.have.status(200);
  //       });
  // 
  //     chai.request(server)
  //       .put('/api/v1/neighborhood')
  //       .set('Authorization', 'BADTOKENeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx3cEB0dXJpbmcuaW8iLCJhcHBOYW1lIjoiYm9iIiwiYWRtaW4iOnRydWUsImlhdCI6MTUwMzYwODAyNn0.tLsJdo6YmImo5pXMALELcBvhUERQbbAHi1NYw8sF1W8')
  //       .send(update)
  //       .end((err, response) => {
  //         response.should.have.status(403);
  //       });
  // 
  //     chai.request(server)
  //       .put('/api/v1/neighborhood')
  //       // no token
  //       .send(update)
  //       .end((err, response) => {
  //         response.should.have.status(403);
  //         done();
  //       });
  //   });
  // 
  //   it(':) should update all matching provided entries in the associated region table', (done) => {
  //     const updates = {
  //       data: [
  //         {
  //           name: 'Upper West Side',
  //           median_rent: 3999,
  //           size_rank: 2,
  //         },
  //         {
  //           name: 'Sherman Oaks',
  //           median_rent: 3499,
  //           size_rank: 5,
  //         },
  //       ],
  //     };
  // 
  //     chai.request(server)
  //       .put('/api/v1/neighborhood')
  //       .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx3cEB0dXJpbmcuaW8iLCJhcHBOYW1lIjoiYm9iIiwiYWRtaW4iOnRydWUsImlhdCI6MTUwMzYwODAyNn0.tLsJdo6YmImo5pXMALELcBvhUERQbbAHi1NYw8sF1W8')
  //       .send(updates)
  //       .end((err, response) => {
  //         response.should.have.status(200);
  //         response.should.be.json;
  //         response.body.results[0].should.be.a('array');
  //         response.body.results[0][0].should.be.a('object');
  //         response.body.results[0][0].should.have.property('id');
  //         response.body.results[0][0].should.have.property('name');
  //         response.body.results[0][0].should.have.property('metro_id');
  //         response.body.results[0][0].should.have.property('state_id');
  //         response.body.results[0][0].should.have.property('city_id');
  //         response.body.results[0][0].should.have.property('collected_on');
  //         response.body.results[0][0].should.have.property('median_rent');
  //         response.body.results[0][0].should.have.property('monthly_change');
  //         response.body.results[0][0].should.have.property('quarterly_change');
  //         response.body.results[0][0].should.have.property('yearly_change');
  //         response.body.results[0][0].should.have.property('size_rank');
  //         response.body.results[0][0].should.have.property('state');
  //         response.body.results[0][0].should.have.property('metro');
  //         response.body.results[0][0].should.have.property('county');
  //         response.body.results[0][0].should.have.property('city');
  //         response.body.results[0][0].should.have.property('created_at');
  //         response.body.results[0][0].should.have.property('updated_at');
  //         response.body.results[0][0].id.should.equal(1);
  //         response.body.results[0][0].name.should.equal('Upper West Side');
  //         response.body.results[0][0].metro_id.should.equal(1);
  //         response.body.results[0][0].state_id.should.equal(3);
  //         response.body.results[0][0].city_id.should.equal(1);
  //         response.body.results[0][0].median_rent.should.equal(3999);
  //         response.body.results[0][0].size_rank.should.equal(2);
  //         response.body.results[0][0].state.should.equal('NY');
  //         response.body.results[0][0].metro.should.equal('New York');
  //         response.body.results[0][0].county.should.equal('New York');
  //         response.body.results[0][0].city.should.equal('New York');
  //         response.body.results[2][0].id.should.equal(3);
  //         response.body.results[2][0].name.should.equal('Sherman Oaks');
  //         response.body.results[2][0].metro_id.should.equal(2);
  //         response.body.results[2][0].state_id.should.equal(1);
  //         response.body.results[2][0].city_id.should.equal(2);
  //         response.body.results[2][0].median_rent.should.equal(3499);
  //         response.body.results[2][0].size_rank.should.equal(5);
  //         response.body.results[2][0].state.should.equal('CA');
  //         response.body.results[2][0].metro.should.equal('Los Angeles-Long Beach-Anaheim');
  //         response.body.results[2][0].county.should.equal('Los Angeles');
  //         response.body.results[2][0].city.should.equal('Los Angeles');
  //       });
  // 
  //     chai.request(server)
  //       .get('/api/v1/neighborhood?name=East+New+York')
  //       .end((err, response) => {
  //         response.should.have.status(200);
  //         response.should.be.json;
  //         response.body.should.be.a('array');
  //         response.body[0].should.have.property('id');
  //         response.body[0].should.have.property('name');
  //         response.body[0].should.have.property('metro_id');
  //         response.body[0].should.have.property('state_id');
  //         response.body[0].should.have.property('city_id');
  //         response.body[0].should.have.property('collected_on');
  //         response.body[0].should.have.property('median_rent');
  //         response.body[0].should.have.property('monthly_change');
  //         response.body[0].should.have.property('quarterly_change');
  //         response.body[0].should.have.property('yearly_change');
  //         response.body[0].should.have.property('size_rank');
  //         response.body[0].should.have.property('state');
  //         response.body[0].should.have.property('metro');
  //         response.body[0].should.have.property('county');
  //         response.body[0].should.have.property('city');
  //         response.body[0].should.have.property('created_at');
  //         response.body[0].should.have.property('updated_at');
  //         response.body[0].id.should.equal(4);
  //         response.body[0].name.should.equal('East New York');
  //         response.body[0].metro_id.should.equal(1);
  //         response.body[0].state_id.should.equal(3);
  //         response.body[0].city_id.should.equal(1);
  //         response.body[0].median_rent.should.equal(2217);
  //         response.body[0].size_rank.should.equal(8);
  //         response.body[0].state.should.equal('NY');
  //         response.body[0].metro.should.equal('New York');
  //         response.body[0].county.should.equal('Kings');
  //         response.body[0].city.should.equal('New York');
  //         done();
  //       });
  //   });
  // 
  //   it(':( should return a clear error message if entry is unprocessable', (done) => {
  //     const updates = {
  //       data: [
  //         {
  //           name: 'West Side',
  //           median_rent: 3999,
  //           size_rank: 2,
  //         },
  //         {
  //           name: 'Sherman Maples',
  //           median_rent: 3499,
  //           size_rank: 5,
  //         },
  //       ],
  //     };
  // 
  //     chai.request(server)
  //       .put('/api/v1/neighborhoods')
  //       .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx3cEB0dXJpbmcuaW8iLCJhcHBOYW1lIjoiYm9iIiwiYWRtaW4iOnRydWUsImlhdCI6MTUwMzYwODAyNn0.tLsJdo6YmImo5pXMALELcBvhUERQbbAHi1NYw8sF1W8')
  //       .send(updates)
  //       .end((err, response) => {
  //         response.should.have.status(404);
  //         response.should.be.json;
  //         response.body.should.be.a('object');
  //         response.body.err.should.equal('Table not found');
  //         done();
  //       });
  //   });
  // });
  // 
  // describe('PUT /v1/:regionType/:id', () => {
  //   // LINDSAY
  //   it(':) should be a secure endpoint', () => {
  //     const update = {
  //       name: 'Upper West Side',
  //       median_rent: 3999,
  //       size_rank: 2,
  //     };
  // 
  //     chai.request(server)
  //       .put('/api/v1/neighborhood')
  //       .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx3cEB0dXJpbmcuaW8iLCJhcHBOYW1lIjoiYm9iIiwiYWRtaW4iOnRydWUsImlhdCI6MTUwMzYwODAyNn0.tLsJdo6YmImo5pXMALELcBvhUERQbbAHi1NYw8sF1W8')
  //       .send(update)
  //       .end((err, response) => {
  //         response.should.have.status(200);
  //       });
  // 
  //     chai.request(server)
  //       .put('/api/v1/neighborhood')
  //       .set('Authorization', 'BADTOKENeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx3cEB0dXJpbmcuaW8iLCJhcHBOYW1lIjoiYm9iIiwiYWRtaW4iOnRydWUsImlhdCI6MTUwMzYwODAyNn0.tLsJdo6YmImo5pXMALELcBvhUERQbbAHi1NYw8sF1W8')
  //       .send(update)
  //       .end((err, response) => {
  //         response.should.have.status(403);
  //       });
  // 
  //     chai.request(server)
  //       .put('/api/v1/neighborhood')
  //       // no token
  //       .send(update)
  //       .end((err, response) => {
  //         response.should.have.status(403);
  //         done();
  //       });
  //   });
  // 
  //   it(':) should update single matching entry in region table', (done) => {
  //     const update = {
  //       median_rent: 2999,
  //       size_rank: 2,
  //     };
  // 
  //     chai.request(server)
  //       .put('/api/v1/neighborhood/1')
  //       .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx3cEB0dXJpbmcuaW8iLCJhcHBOYW1lIjoiYm9iIiwiYWRtaW4iOnRydWUsImlhdCI6MTUwMzYwODAyNn0.tLsJdo6YmImo5pXMALELcBvhUERQbbAHi1NYw8sF1W8')
  //       .send(update)
  //       .end((err, response) => {
  //         response.should.have.status(200);
  //         response.should.be.json;
  //         response.body.should.be.a('object');
  //         response.body.should.have.property('msg');
  //         response.body.should.have.property('result');
  //         response.body.msg.should.equal('1 record(s) successfully updated');
  //         response.body.result.should.equal(1);
  // 
  //         chai.request(server)
  //           .get('/api/v1/neighborhood?name=Upper+West+Side')
  //           .end((err, response) => {
  //             response.body[0].should.have.property('id');
  //             response.body[0].should.have.property('name');
  //             response.body[0].should.have.property('metro_id');
  //             response.body[0].should.have.property('state_id');
  //             response.body[0].should.have.property('city_id');
  //             response.body[0].should.have.property('collected_on');
  //             response.body[0].should.have.property('median_rent');
  //             response.body[0].should.have.property('monthly_change');
  //             response.body[0].should.have.property('quarterly_change');
  //             response.body[0].should.have.property('yearly_change');
  //             response.body[0].should.have.property('size_rank');
  //             response.body[0].should.have.property('state');
  //             response.body[0].should.have.property('metro');
  //             response.body[0].should.have.property('county');
  //             response.body[0].should.have.property('city');
  //             response.body[0].should.have.property('created_at');
  //             response.body[0].should.have.property('updated_at');
  //             response.body[0].id.should.equal(1);
  //             response.body[0].name.should.equal('Upper West Side');
  //             response.body[0].metro_id.should.equal(1);
  //             response.body[0].state_id.should.equal(3);
  //             response.body[0].city_id.should.equal(1);
  //             response.body[0].median_rent.should.equal(2999);
  //             response.body[0].size_rank.should.equal(2);
  //             response.body[0].state.should.equal('NY');
  //             response.body[0].metro.should.equal('New York');
  //             response.body[0].county.should.equal('New York');
  //             response.body[0].city.should.equal('New York');
  //             done();
  //           });
  //       });
  //   });
  // 
  //   it(':( should return a clear error message if entry is unprocessable', (done) => {
  //     const update = {
  //       median_rent: 2999,
  //       size_rank: 2,
  //     };
  // 
  //     chai.request(server)
  //       .put('/api/v1/neighborhoods/10')
  //       .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx3cEB0dXJpbmcuaW8iLCJhcHBOYW1lIjoiYm9iIiwiYWRtaW4iOnRydWUsImlhdCI6MTUwMzYwODAyNn0.tLsJdo6YmImo5pXMALELcBvhUERQbbAHi1NYw8sF1W8')
  //       .send(update)
  //       .end((err, response) => {
  //         response.body.err.should.equal('Table not found');
  //       });
  // 
  //     const badUpdate = {
  //       BADKEYmedian_rent: 2999,
  //       size_rank: 2,
  //     };
  // 
  //     chai.request(server)
  //       .put('/api/v1/neighborhood/1')
  //       .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx3cEB0dXJpbmcuaW8iLCJhcHBOYW1lIjoiYm9iIiwiYWRtaW4iOnRydWUsImlhdCI6MTUwMzYwODAyNn0.tLsJdo6YmImo5pXMALELcBvhUERQbbAHi1NYw8sF1W8')
  //       .send(badUpdate)
  //       .end((err, response) => {
  //         response.body.err.should.equal('Undefined column');
  //         done();
  //       });
  //   });
  // });
  // 
  // describe('DELETE /v1/:regionType', () => {
  //   // GEORGE
  //   it.skip(':) should delete all entries in a region table', (done) => {
  //     chai.request(server)
  //       .delete('/api/v1/neighborhood')
  //       .end((err, response) => {
  //         // test all the things!
  //         done();
  //       });
  //   });
  // 
  //   it.skip(':( should return a clear error message if entry is unprocessable', (done) => {
  //     chai.request(server)
  //       .delete('/api/v1/neighborhoods')
  //       .end((err, response) => {
  //         // test all the things!
  //         done();
  //       });
  //   });
  // });
  // 
  // describe('DELETE /v1/:regionType/:id', () => {
  //   // LINDSAY
  //   it(':) should be a secure endpoint', (done) => {
  //     chai.request(server)
  //       .delete('/api/v1/neighborhood/2')
  //       .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx3cEB0dXJpbmcuaW8iLCJhcHBOYW1lIjoiYm9iIiwiYWRtaW4iOnRydWUsImlhdCI6MTUwMzYwODAyNn0.tLsJdo6YmImo5pXMALELcBvhUERQbbAHi1NYw8sF1W8')
  //       .end((err, response) => {
  //         response.should.have.status(200);
  //       });
  // 
  //     chai.request(server)
  //       .delete('/api/v1/neighborhood/3')
  //       .set('Authorization', 'BADTOKENeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx3cEB0dXJpbmcuaW8iLCJhcHBOYW1lIjoiYm9iIiwiYWRtaW4iOnRydWUsImlhdCI6MTUwMzYwODAyNn0.tLsJdo6YmImo5pXMALELcBvhUERQbbAHi1NYw8sF1W8')
  //       .end((err, response) => {
  //         response.should.have.status(403);
  //       });
  // 
  //     chai.request(server)
  //       .delete('/api/v1/neighborhood/4')
  //       // no token
  //       .end((err, response) => {
  //         response.should.have.status(403);
  //         done();
  //       });
  //   });
  // 
  //   it(':) should delete a single entry in a region table', (done) => {
  //     chai.request(server)
  //       .delete('/api/v1/neighborhood/1')
  //       .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx3cEB0dXJpbmcuaW8iLCJhcHBOYW1lIjoiYm9iIiwiYWRtaW4iOnRydWUsImlhdCI6MTUwMzYwODAyNn0.tLsJdo6YmImo5pXMALELcBvhUERQbbAHi1NYw8sF1W8')
  //       .end((err, response) => {
  //         response.should.have.status(200);
  //         response.should.be.json;
  // 
  //         chai.request(server)
  //           .get('/api/v1/neighborhood?name=Upper+West+Side')
  //           .end((err, response) => {
  //             response.should.have.status(200);
  //             response.should.be.json;
  //             response.body.should.have.property('err');
  //             response.body.err.should.equal('No matching entries');
  //             done();
  //           });
  //       });
  //   });
  // 
  //   it(':( should return a clear error message if entry is unprocessable', (done) => {
  //     chai.request(server)
  //       .delete('/api/v1/neighborhood/100')
  //       .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx3cEB0dXJpbmcuaW8iLCJhcHBOYW1lIjoiYm9iIiwiYWRtaW4iOnRydWUsImlhdCI6MTUwMzYwODAyNn0.tLsJdo6YmImo5pXMALELcBvhUERQbbAHi1NYw8sF1W8')
  //       .end((err, response) => {
  //         response.should.have.status(200);
  //         response.should.be.json;
  //         response.body.should.have.property('err');
  //         response.body.err.should.equal('No matching entry to delete');
  //         done();
  //       });
  //   });
  // });
});

