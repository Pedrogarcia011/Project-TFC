import * as sinon from 'sinon';
import * as chai from 'chai';
import { App } from '../app';
import UserModel from '../database/models/ModelUsers';
import { user, invalidEmail, invalidPasword, validLogin } from './mocks/Users.mock';

const { app } = new App();
const { expect } = chai;

// @ts-ignore
import chaiHttp = require('chai-http');
chai.use(chaiHttp)

describe('Users testes', () => {
 it('Retorna um token ao entrar com dados validos XXXDDDDD', async () => {
    sinon.stub(UserModel, 'findOne').resolves(user as any);

    const { status, body } = await chai.request(app).post('/login')

    expect(status).to.equal(200);
 });

 it('deve retornar um erro caso email não exista', async () => {
    const { status, body } = await chai.request(app).post('/login').send(invalidEmail);

    expect(status).to.equal(400);
    expect(body).to.deep.equal({ message: 'All fields must be filled' });
  });

  it('deve retornar um erro caso a senha não exista', async () => {
    const { status, body } = await chai.request(app).post('/login').send(invalidPasword);

    expect(status).to.equal(400);
    expect(body).to.deep.equal({ message: 'All fields must be filled' });
  });

  it('deve retornar um erro caso email e senha estejam invalidos', async () => {
    sinon.stub(UserModel, 'findOne').resolves(null);
    const { status, body } = await chai.request(app).post('/login').send(validLogin);

    expect(status).to.equal(401);
    expect(body).to.deep.equal({ message: 'Invalid email or password' });
  });

  afterEach(() => {
    sinon.restore();
  })

  it('Retorne um erro caso token não seja fornecido', async () => {
    const {status, body} = await chai.request(app).get('/login/role/');

    expect(status).to.equal(401);
    expect(body).to.deep.equal({ message: 'Token not found' });
  })
})