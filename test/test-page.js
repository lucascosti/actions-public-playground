var expect  = require('chai').expect;
var request = require('request');
// test/app.js
const chai = require('chai')
const chaiHttp = require('chai-http')
// `require` the exported `app`.
const app = require('../app.js')

const should = chai.should();
chai.use(chaiHttp);

it('Main page content', function(done) {
    chai.request(app)
      .get('/')
      .end((err, res) => {
            console.log(err); // outputs null
            console.log(res.body) // {}
            res.text.should.be.eql('Hello World! Everything is awesome!!!'); // passes test
            done();
        });
});
