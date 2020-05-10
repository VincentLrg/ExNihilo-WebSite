import Vue from "vue";
import Vuex from "vuex";

import logo from "../assets/Logo.svg"

import * as getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hero: {
      title: "Ex Nihilo",
      baseline: "the answer is out there",
      logo: logo
    },
    content: [
      {
        design: "titleOnly",
        title: "Si vous trouviez un téléphone abandonné"
      },
      {
        design: "titleOnly",
        title: "Quel secret pourriez-vous découvrir"
      },
      {
        design: "titleOnly",
        title: "Et si la réponse à vos question était autre part"
      },
      {
        design: "contentPromo",
        title: "A propos",
        bold:
          "Ex Nihilo est un jeu mobile, dans lequel on s’intoduit dans la vie privée d’une personne disparue pour découvrir ce qui lui est arrivé.",
        content:
          "Le jeu prend la forme d’une enquête, durant laquelle il faudra résoudre des énigmes, aidé d’un mystérieux personnage appelé Janus. Celui-ci pourrait en savoir beaucoup plus que ce qu’il laisse transparaître...",
        button: "Télécharger le jeu",
        video: ""
      }
    ],
    teams: [
      {
        name: "An",
        description:
          "Développeuse exerçant une passion beaucoup trop intense pour les chats."
      },
      {
        name: "Vincent",
        description:
          "Développeur ayant du mal avec son reveil car passant beaucoup trop d’heure à dessiner des vêtements sur son ipad."
      },
      {
        name: "Léa",
        description:
          "Directrice artistique & UI designer tyrannisée par son chaton hors de contrôle."
      },
      {
        name: "Sarah",
        description:
          "UX & UI designer râlant pour tout et n’importe quoi 24h/24."
      }
    ]
  },
  getters,
  mutations: {},
  actions: {},
  modules: {}
});
