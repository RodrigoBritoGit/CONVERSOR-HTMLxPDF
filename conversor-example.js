const puppeteer = require('puppeteer');
const path = require('path');

async function login_to_gitlab(page) {
    // Preencha os campos de nome de usuário e senha (substitua os seletores pelos corretos na página de login do GitLab)
    await page.type('#user_login', 'seu_nome_de_usuario');
    await page.type('#user_password', 'sua_senha');

    // Clique no botão de login
    await Promise.all([
        page.waitForNavigation(), // Aguarde o redirecionamento após o login
        page.click('input[type="submit"]'), // Substitua o seletor pelo correto na página de login do GitLab
    ]);
}

async function webpage_to_pdf(url, pdfFilePath) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
        await page.goto(url);
        await login_to_gitlab(page); // Faça login no GitLab
        await new Promise(resolve => setTimeout(resolve, 8000)); // Aguarda 8 segundos após o login (ajuste conforme necessário)
        await page.pdf({ 
            path: pdfFilePath, 
            width: '297mm', // Largura do papel A3 em modo paisagem
            height: '210mm', // Altura do papel A3 em modo paisagem
            printBackground: true, // Imprimir o fundo da página (incluindo cores de plano de fundo e imagens)
            landscape: true // Define a orientação como paisagem
        });
        console.log(`Arquivo PDF '${pdfFile}' gerado com sucesso!`);
    } catch (error) {
        console.error('Erro ao carregar página:', error);
    } finally {
        await browser.close();
    }
}


const webpageURL = 'URL_DO_SITE'; // Substitua pela URL desejada
const pdfFile = 'NOME_DO_PDF';
const pdfFilePath = path.resolve(__dirname, pdfFile);
webpage_to_pdf(webpageURL, pdfFilePath);





