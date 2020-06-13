import Vue from "vue";
import Vuex from "vuex";

import logo from "../assets/images/Logo.svg"
import An from "../assets/gif/An.gif"
import Lea from "../assets/gif/Lea.gif"
import Sarah from "../assets/gif/Sarah.gif"
import Vincent from "../assets/gif/Vincent.gif"

import logoWhite from "../assets/images/Logo-white.svg"
import logoGobelins from "../assets/images/Logo-GOBELINS.png"
import logoCCI from "../assets/images/cci-paris.png"

import apk from "../assets/apk/ex-nihilo.apk"


import * as getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hero: {
      title: "Ex Nihilo",
      baseline: "the answer is out there",
      logo: logo,
      scroll: [
        "s",
        "c",
        "r",
        "o",
        "l",
        "l",
        " ",
        "d",
        "o",
        "w",
        "n",
        " ",
        "•",
        " ",
        "s",
        "c",
        "r",
        "o",
        "l",
        "l",
        " ",
        "d",
        "o",
        "w",
        "n",
        " ",
        "•",
        " "
      ]
    },
    content: [
      {
        design: "titleOnly",
        title: "Si vous trouviez un téléphone abandonné..."
      },
      {
        design: "titleOnly",
        title: "Quel secret pourriez-vous découvrir ?"
      },
      {
        design: "titleOnly",
        title: "Et si la réponse à vos question était autre part ?"
      },
      {
        design: "contentPromo",
        title: "A propos",
        bold:
          "Ex Nihilo est un jeu mobile, dans lequel on s’intoduit dans la vie privée d’une personne disparue pour découvrir ce qui lui est arrivé.",
        content:
          "Le jeu prend la forme d’une enquête, durant laquelle il faudra résoudre des énigmes, aidé d’un mystérieux personnage appelé Janus. Celui-ci pourrait en savoir beaucoup plus que ce qu’il laisse transparaître...",
        button: "Télécharger le jeu",
        video: "",
        download: apk
      }
    ],
    scrollInfo: {
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
      count: 0,
    },
    teams: [
      {
        name: "An",
        description:
          "Développeuse exerçant une passion beaucoup trop intense pour les chats.",
        gif: An
        },
      {
        name: "Vincent",
        description:
          "Développeur ayant du mal avec son reveil car passant beaucoup trop d’heure à dessiner des vêtements sur son ipad.",
        gif: Vincent
        },
      {
        name: "Léa",
        description:
          "Directrice artistique & UI designer tyrannisée par son chaton hors de contrôle.",
        gif: Lea
        },
      {
        name: "Sarah",
        description:
          "UX & UI designer râlant pour tout et n’importe quoi 24h/24.",
        gif: Sarah
        }
    ],
    footer: {
      logo: logoWhite,
      gobelins: logoGobelins,
      cci: logoCCI,
    }
  },
  getters,
  mutations: {
    scrollInfoIncrement(state) {
      state.scrollInfo.count++
    },
    setOffset(state, payload) {
      state.scrollInfo.offsets.push(payload)
    },
    activeSectionSet(state, payload) {
      state.scrollInfo.activeSection = payload
    },
    activeSectionInc(state) {
      state.scrollInfo.activeSection++
    },
    activeSectionDec(state) {
      state.scrollInfo.activeSection--
    },
    inMoveFalse(state) {
      state.scrollInfo.inMove = false
    },
    inMoveTrue(state) {
      state.scrollInfo.inMove = true
    },
    toucheYSet(state, payload) {
      state.scrollInfo.touchStartY = payload
    },
    setCount(state, payload) {
      state.scrollInfo.count = payload
    }
  },
  actions: {
    setOffset({ commit }, payload) {
      commit('setOffset', payload)
    },
    setActiveSection({ commit }, payload) {
      commit('activeSectionSet', payload)
    },
    setToucheY({ commit }, payload){
      commit('toucheYSet', payload)
    },
    setCount({ commit }, payload){
      commit('setCount', payload)
    }
  },
  modules: {}
});
