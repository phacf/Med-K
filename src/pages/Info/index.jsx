import Slide from "react-reveal/Slide";

import { StyledImageDiv, Container, CardsContent } from "./styles";

import PageTitle from "../../components/PageTitle";
import InfoCard from "../../components/InfoCard";

import pessoas from "../../assets/pessoas.png";

const Info = () => {
  return (
    <div>
      <StyledImageDiv>
        <img src={pessoas} alt="Pessoas" />
      </StyledImageDiv>
      <Container>
        <PageTitle title={"Informações"} />
        <Slide bottom>
          <CardsContent>
            <InfoCard
              title={"O que é o Med-K?"}
              text={
                "o Med-K é uma plataforma que centraliza suas informações de saúde e permite que o seu contato com o médico seja mais rápido e menos burocrático."
              }
            />
            <InfoCard
              title={"Como me cadastrar?"}
              text={
                "Para realizar seu cadastro no Med-K é bem simples, basta inserir suas informações no formulário de cadastro."
              }
            />
            <InfoCard
              title={"Consultas, exames e vacinas"}
              text={
                "Esse é o objetivo do Med-K, facilitar o agendamento e acesso às informações. No menu você terá acesso aos resultados dos seus exames e obter as recomendações do seu médico sobre sua saúde, visualizar um relatório completo sobre todas as suas consultas, realizar agendamentos de consultas, exames e vacinação através da aba solicitações e, por fim, verificar seu CVD (Cartão de vacinação Digital) e acompanhar se suas vacinas estão em dia ou quando serão as próximas doses."
              }
            />
            <InfoCard
              title={"É possível realizar minha consulta online?"}
              text={
                "No momento não, mas estamos trabalhando nisso! Em breve você poderar ter acompanhamento no confirto de sua casa através de video-conferências."
              }
            />
            <InfoCard
              title={"MInhas informações estão seguras?"}
              text={
                "Sim, 100% seguras! Contamos com uma equipe de especialistas em segurança da informação e as unicas pessoas que têm acesso às suas informações são você e o profissional da saúde responsável pelo atendimento."
              }
            />
          </CardsContent>
        </Slide>
      </Container>
    </div>
  );
};

export default Info;
