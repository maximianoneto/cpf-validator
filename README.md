<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Validador de CPF em Next.js e MongoDB</h1>
    <p>
        Este projeto foi criado utilizando o Next.js, uma estrutura popular baseada no React que permite criar aplicações web com renderização no lado do servidor e otimização para desempenho e SEO. Escolhi o Next.js devido à sua facilidade de uso e integração com a plataforma Vercel para implantação contínua e hospedagem.
    </p>
    <p>
        A aplicação é uma simples API para validar CPFs e armazenar os CPFs válidos em um banco de dados MongoDB. Optei pelo MongoDB por ser um banco de dados NoSQL altamente escalável e fácil de usar, que se adapta bem a esse tipo de aplicação.
    </p>
    <p>
        A Vercel é uma plataforma de hospedagem e implantação que oferece integração perfeita com o Next.js e outros frameworks JavaScript. Utilizei a Vercel para implantar nossa aplicação, já que ela fornece uma solução fácil e rápida para colocar nossa API Next.js em produção.
    </p>
    <p>
        Com esta configuração, podemos aproveitar a velocidade e a escalabilidade do Next.js e do MongoDB, enquanto a Vercel cuida da implantação e hospedagem da aplicação. Para testar a aplicação faça uma requisição POST para o endpoint: https://cpf-validator-nextjs.vercel.app/api/cpf e passe como parâmetro o body da requisição
        <br>
{ <br>
  "cpf": "903.517.200-06" <br>
}<br>
    </p>
</body>
</html>
