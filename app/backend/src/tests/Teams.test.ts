import * as sinon from 'sinon';
import * as chai from 'chai';
import ModelTeams from '../database/models/ModelTeams';
import { App } from '../app'
import { team, teams } from './mocks/Teams.mock'

// @ts-ignore
import chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { app } = new App();
const { expect } = chai;

describe('Teams testes', function() {
  it('retorne uma lista de teams "findAll"', async function() {
    sinon.stub(ModelTeams, 'findAll').resolves(teams as any);

    const { status, body } = await chai.request(app).get('/teams')

    expect(status).to.equal(200)
    expect(body).to.deep.equal(teams)
  })

  it('retorne um team baseado no id "findById"', async function() {
    sinon.stub(ModelTeams, 'findOne').resolves(team as any);

    const { status, body } = await chai.request(app).get('/teams/1');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(team);
  })

  it('retorne um erro caso o id de team não exista', async function() {
    sinon.stub(ModelTeams, 'findOne').resolves(null);

    const { status, body } = await chai.request(app).get('/teams/1');

    expect(status).to.equal(500);
    expect(body.message).to.equal('Team 1 not found');
  })
})