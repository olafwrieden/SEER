// NOTE: sorry that eslint hates this file. not sure what to do
// arrange: require user
const chai = require('chai');
const expect = chai.expect;
const User = require('../../../app/models/User');
// act: create user
const validUser = new User({
  first_name: 'KJ',
  last_name: 'Millar',
  email: 'kj@gmail.com',
  password: '123'
});
// assert: test user
describe('Create valid user', () => {
  it('should be a valid object', function () {
    expect(validUser).to.be.an('object');
    expect(validUser).to.not.be.undefined;
    expect(validUser).to.have.property('first_name');
  });
  it('should have default role set to standard', function () {
    expect(validUser).to.have.property('role');
    expect(validUser.role).to.have.string('STANDARD');
  });
  it('should be enabled', function () {
    expect(validUser).to.have.property('enabled');
    expect(validUser.enabled).to.equal(true);
  });
});
