Aluna: Andressa Vitória Da Silva Macedo
Turma:P5 - A Noite


Como Rodar o Projeto

1. Clonar o Repositório


git clone https://github.com/Andressa5/Projeto-Docker.git

Após clonar o projeto entre na pasta do projeto com o comando abaixo

2. Navegar até a Pasta do Projeto


cd Projeto-Docker

3. Agora que estamos dentro da pasta do projeto, use o comando abaixo para executar o docker

docker compose up --build

OBS: Com o comando acima você faz o build e executa o docker, caso queira buildar e depois executar o docker seguem comandos abaixo relacionados ao build e up do docker respectivamente"# Projeto-Docker"

Comandos Docker Compose Adicionais

Apenas Construir as Imagens:
Para construir as imagens dos seus serviços sem iniciá-los:

docker compose build

Iniciar os Serviços:
Para iniciar todos os contêineres definidos no docker-compose.yml. Se as imagens dos serviços já existirem localmente, elas serão usadas. Caso contrário, o Docker Compose tentará baixá-las (pull) ou construí-las (se houver uma instrução build e a imagem não existir ou estiver desatualizada).

docker compose up

Parar os Serviços:
Para parar todos os contêineres em execução do seu projeto (mas mantê-los para um reinício rápido):

docker compose stop

Parar e Remover os Serviços e Redes:
Para parar e remover os contêineres e as redes criadas pelo Docker Compose (mantém os volumes de dados):

docker compose down

Parar e Remover os Serviços, Redes E Volumes (Limpeza Completa):
Para uma limpeza completa do ambiente Docker do projeto:

docker compose down --volumes