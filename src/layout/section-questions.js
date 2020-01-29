

import React, { Component } from "react"
import cmsSectionQuestions from "../dynamic/sectionQuestions.json"

import ImageObserver from '../layout/observer-image-target'
export default class SectionQuestions extends Component {
  render() {
    return (
      <section className="usecases_questions">
        <div className="ui container">
          <div className="usecases_questions__item usecases_questions_item">
            <div className="usecases_questions_item__title">
              <h3 className="title t-h2">Questions?</h3>
            </div>
            <div className="usecases_questions_item__text">
              <p className="t-p-lg">{cmsSectionQuestions.question_info}</p>
            </div>
          </div>
          <div className="usecases_questions__info usecases_questions_info">
            <div className="usecases_questions_info__avatar">
              <ImageObserver src={cmsSectionQuestions.support_image} altString="Avatar" />
            </div>
            <div className="usecases_questions_info__about">
              <h3 className="title">{cmsSectionQuestions.support_name}</h3>
              <a href="mailto:anastasianegru@purplerain.io">{cmsSectionQuestions.support_email}</a>
              <a href="tel:+411-987-9866">{cmsSectionQuestions.support_number}</a>
            </div>
            <div className="usecases_questions_info__btn">
              <a href="#/">Live support</a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}