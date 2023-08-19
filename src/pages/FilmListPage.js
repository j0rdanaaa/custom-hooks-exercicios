import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";
import { Title, PostContainer } from "./style";
import { Card } from "../components/Card/Card";
import useRequestData from "../hooks/useRequestData";

const FilmListPage = () => {
  const [filmsList, isLoading, isError] = useRequestData("/films");

  return (
    <div>
      <Title>Título dos filmes</Title>
      <PostContainer>
        {isError ? (
          <p>Erro no Título dos Filmes! Tente Novamente...</p>
        ) : isLoading ? (
          <p>CARREGANDO...</p>
        ) : (
          filmsList.map((film) => {
            return (
              <Card
                key={film.title}
                title={film.title}
                text={film.opening_crawl}
                backgroudColor={"gray"}
                textColor={"#ffffff"}
              />
            );
          })
        )}
      </PostContainer>
    </div>
  );
};

export default FilmListPage;
