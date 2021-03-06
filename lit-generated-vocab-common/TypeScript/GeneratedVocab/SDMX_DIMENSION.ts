/*
 * Proprietary and Confidential
 *
 * Copyright 2020 Inrupt Inc. - all rights reserved.
 *
 * Do not use without explicit permission from Inrupt Inc.
 */

import { LitVocabTerm, getLocalStore } from "@inrupt/lit-vocab-term";
import dataFactory from "@rdfjs/data-model";
const namedNode = dataFactory.namedNode;

/**
  Generated by artifact generator [@inrupt/lit-artifact-generator], version [0.10.5]
  as part of artifact: [vocab-common], version: [0.3.4]
  at 'Tuesday, May 5, 2020 4:12 PM'.

  Vocabulary built from vocab list file: [lit-rdf-vocab/Common/Vocab-List-LIT-Common.yml].
 */

function _NS(localName: string) { 
  return (namedNode("http://purl.org/linked-data/sdmx/2009/dimension#" + localName));
}

const SDMX_DIMENSION = {
  PREFIX: "sdmx-dimension",
  NAMESPACE: "http://purl.org/linked-data/sdmx/2009/dimension#",
  PREFIX_AND_NAMESPACE: { "sdmx-dimension": "http://purl.org/linked-data/sdmx/2009/dimension#" },
  NS: _NS,


  // *******************
  // All the Properties.
  // *******************

  /**
   * The length of time that a person has lived or a thing has existed.
   */
  age: new LitVocabTerm(
    _NS("age"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Age`, "en")
    .addComment(`The length of time that a person has lived or a thing has existed.`, "en"),

  /**
   * Legal, conjugal status of each individual in relation to the marriage laws or customs of the country.
   */
  civilStatus: new LitVocabTerm(
    _NS("civilStatus"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Civil Status`, "en")
    .addComment(`Legal, conjugal status of each individual in relation to the marriage laws or customs of the country.`, "en"),

  /**
   * Monetary denomination of the object being measured.
   */
  currency: new LitVocabTerm(
    _NS("currency"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Currency`, "en")
    .addComment(`Monetary denomination of the object being measured.`, "en"),

  /**
   * The highest level of an educational programme the person has successfully completed.
   */
  educationLev: new LitVocabTerm(
    _NS("educationLev"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Education Level`, "en")
    .addComment(`The highest level of an educational programme the person has successfully completed.`, "en"),

  /**
   * The time interval at which observations occur over a given time period.
   */
  freq: new LitVocabTerm(
    _NS("freq"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Frequency`, "en")
    .addComment(`The time interval at which observations occur over a given time period.`, "en"),

  /**
   * Job or position held by an individual who performs a set of tasks and duties.
   */
  occupation: new LitVocabTerm(
    _NS("occupation"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Occupation`, "en")
    .addComment(`Job or position held by an individual who performs a set of tasks and duties.`, "en"),

  /**
   * The country or geographic area to which the measured statistical phenomenon relates.
   */
  refArea: new LitVocabTerm(
    _NS("refArea"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Reference Area`, "en")
    .addComment(`The country or geographic area to which the measured statistical phenomenon relates.`, "en"),

  /**
   * The period of time or point in time to which the measured observation is intended to refer.
   */
  refPeriod: new LitVocabTerm(
    _NS("refPeriod"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Reference Period`, "en")
    .addComment(`The period of time or point in time to which the measured observation is intended to refer.`, "en"),

  /**
   * The state of being male or female.
   */
  sex: new LitVocabTerm(
    _NS("sex"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Sex`, "en")
    .addComment(`The state of being male or female.`, "en"),

  /**
   * The period of time or point in time to which the measured observation refers.
   */
  timePeriod: new LitVocabTerm(
    _NS("timePeriod"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Time Period`, "en")
    .addComment(`The period of time or point in time to which the measured observation refers.`, "en"),

};

export { SDMX_DIMENSION };
