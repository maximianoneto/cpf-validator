// pages/api/cpf.js
import { MongoClient } from 'mongodb';
import { validationResult } from 'express-validator';
import { checkCPF } from '../../utils/cpfValidator';

export default async function handler(req, res) {
  console.log('Iniciando validação de CPF');
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log('Erro na validação do request:', errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  const cpf = req.body.cpf;
  console.log(`Validando CPF: ${cpf}`);

  if (!checkCPF(cpf)) {
    console.log('CPF inválido');
    return res.status(400).json({ status: 'UNABLE_TO_VOTE' });
  }

  console.log('CPF válido');
  let client;

  try {
    console.log('Conectando ao MongoDB');
    client = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexão com o MongoDB estabelecida');

    const db = client.db();

    console.log('Verificando se o CPF já existe no banco de dados');
    const existingCPF = await db.collection('cpf').findOne({ cpf: cpf });

    if (existingCPF) {
      console.log('CPF já existe no banco de dados');
      return res.status(201).json({ status: 'ABLE_TO_VOTE' });
    }

    console.log('Inserindo CPF no banco de dados');
    await db.collection('cpf').insertOne({ cpf: cpf });

    console.log('CPF inserido com sucesso');
    return res.status(201).json({ status: 'ABLE_TO_VOTE' });
  } catch (error) {
    console.error('Erro ao processar o request:', error.message);
    return res.status(500).json({ message: 'Internal server error' });
  } finally {
    if (client) {
      console.log('Fechando conexão com o MongoDB');
      client.close();
    }
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1kb',
    },
  },
};
