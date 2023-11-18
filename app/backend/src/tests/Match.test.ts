import * as sinon from 'sinon';
import * as chai from 'chai';
import ModelMatch from '../database/models/ModelMatche';
import ModelUser from '../database/models/ModelUsers';
import UserModel from '../database/models/ModelUsers';
import { App } from '../app'
import { matches, match } from './mocks/Match.model';
import { user, validLogin } from './mocks/Users.mock';
import MatchController from '../controllers/MatchController';

// @ts-ignore
import chaiHttp = require('chai-http');
import { Request, Response } from 'express';
chai.use(chaiHttp);
const { app } = new App();
const { expect } = chai;

describe('Match testes', function() {
    beforeEach(function () {
        // Restaura o stub antes de cada teste para evitar envelopar o mesmo método várias vezes
        sinon.restore();
    });

    it('Retorna todas as partidas findAll', async function() {
      sinon.stub(ModelMatch, 'findAll').resolves(matches as any)

      const { status, body } = await chai.request(app).get('/matches')

      expect(status).to.equal(200)
      expect(body).to.deep.equal(matches)
    })

    /* it('Retorna erro 400 se inProgress não fornecido', async function() {
        const { status, body } = await chai.request(app).get('/matches?inProgress=');

    expect(body).to.equal('Parâmetro inProgress não fornecido.');
      }); */

      it('Retorna partidas em andamento quando inProgress=true', async function() {
        sinon.stub(ModelMatch, 'findAll').resolves(matches as any);
    
        const { status, body } = await chai.request(app).get('/matches?inProgress=true');
    
        expect(status).to.equal(200);
        expect(body).to.deep.equal(matches);
      });

      it('Retorna partidas em andamento quando inProgress=false', async function() {
        sinon.stub(ModelMatch, 'findAll').resolves(matches as any);
    
        const { status, body } = await chai.request(app).get('/matches?inProgress=false');
    
        expect(status).to.equal(200);
        expect(body).to.deep.equal(matches);
      });

      it('should finish match', async () => {
        sinon.stub(ModelMatch, 'findOne').resolves(match as any);
        sinon.stub(ModelMatch, 'update').resolves([1]);
        sinon.stub(ModelUser, 'findOne').resolves(user as any);
        const { body: {token} } = await chai.request(app).post('/login').send(validLogin);
    
        const { status, body } = await chai.request(app).patch('/matches/1/finish').set('authorization', `Bearer ${token}`);
    
        expect(body).to.deep.equal({ message: 'Finished' });
      });

      it('should buu finish match', async () => {
        sinon.stub(ModelMatch, 'findOne').resolves(match as any);
        sinon.stub(ModelMatch, 'update').resolves([1]);
        sinon.stub(ModelUser, 'findOne').resolves(user as any);
        const { body: {token} } = await chai.request(app).post('/login').send(validLogin);
    
        const { status, body } = await chai.request(app).patch('/matches/1/finish').set('authorization', `Bearer ${token}`);
    
        expect(status).to.equal(401);
      });

      it('should buu finish match xxxdddd', async () => {
        sinon.stub(ModelMatch, 'findOne').resolves(match as any);
        sinon.stub(ModelMatch, 'update').resolves([1]);
        sinon.stub(ModelUser, 'findOne').resolves(user as any);
        const { body: {token} } = await chai.request(app).post('/login').send(validLogin);
    
        const { status, body } = await chai.request(app).patch('/matches/1/finish').set('authorization', `Bearer ${token}`);
    
        expect(status).to.equal(401);
      });
})