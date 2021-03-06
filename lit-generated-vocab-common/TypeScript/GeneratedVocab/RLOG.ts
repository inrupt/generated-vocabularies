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

  Inrupt-created copy of RLOG, needed due to Server 500 errors resolving original uni-leipzig.org!
 */

function _NS(localName: string) { 
  return (namedNode("http://persistence.uni-leipzig.org/nlp2rdf/ontologies/rlog#" + localName));
}

const RLOG = {
  PREFIX: "rlog",
  NAMESPACE: "http://persistence.uni-leipzig.org/nlp2rdf/ontologies/rlog#",
  PREFIX_AND_NAMESPACE: { "rlog": "http://persistence.uni-leipzig.org/nlp2rdf/ontologies/rlog#" },
  NS: _NS,

  // *****************
  // All the Classes.
  // *****************

  /**
   * look here: http://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/Level.html 
   */
  Level: new LitVocabTerm(
    _NS("Level"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Log Level`, "en")
    .addComment(`look here: http://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/Level.html `, "en"),

  /**
   * An entry in a log.
   */
  Entry: new LitVocabTerm(
    _NS("Entry"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Log Entry`, "en")
    .addComment(`An entry in a log.`, "en"),

  /**
   * A status code which can occur in an application. Instances of this class must put the name of the status as rdfs:label and describe it with rdfs:comment.
   */
  StatusCode: new LitVocabTerm(
    _NS("StatusCode"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Status Code`, "en")
    .addComment(`A status code which can occur in an application. Instances of this class must put the name of the status as rdfs:label and describe it with rdfs:comment.`, "en"),

  // *******************
  // All the Properties.
  // *******************

  /**
   * The ALL has the lowest possible rank and is intended to turn on all logging.
   */
  ALL: new LitVocabTerm(
    _NS("ALL"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`ALL`, "en")
    .addComment(`The ALL has the lowest possible rank and is intended to turn on all logging.`, "en"),

  /**
   * Attention: the ids here can change, they are just used to define an order over the levels!
   */
  priority: new LitVocabTerm(
    _NS("priority"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`logLevel`, "en")
    .addComment(`Attention: the ids here can change, they are just used to define an order over the levels!`, "en"),

  /**
   * The DEBUG Level designates fine-grained informational events that are most useful to debug an application.
   */
  DEBUG: new LitVocabTerm(
    _NS("DEBUG"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`DEBUG`, "en")
    .addComment(`The DEBUG Level designates fine-grained informational events that are most useful to debug an application.`, "en"),

  /**
   * The ERROR level designates error events that might still allow the application to continue running.
   */
  ERROR: new LitVocabTerm(
    _NS("ERROR"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`ERROR`, "en")
    .addComment(`The ERROR level designates error events that might still allow the application to continue running.`, "en"),

  /**
   * The FATAL level designates very severe error events that will presumably lead the application to abort.
   */
  FATAL: new LitVocabTerm(
    _NS("FATAL"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`FATAL`, "en")
    .addComment(`The FATAL level designates very severe error events that will presumably lead the application to abort.`, "en"),

  /**
   * The INFO level designates informational messages that highlight the progress of the application at coarse-grained level.
   */
  INFO: new LitVocabTerm(
    _NS("INFO"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`INFO`, "en")
    .addComment(`The INFO level designates informational messages that highlight the progress of the application at coarse-grained level.`, "en"),

  /**
   * The OFF has the highest possible rank and is intended to turn off logging.
   */
  OFF: new LitVocabTerm(
    _NS("OFF"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`OFF`, "en")
    .addComment(`The OFF has the highest possible rank and is intended to turn off logging.`, "en"),

  /**
   * The TRACE Level designates finer-grained informational events than the DEBUG.
   */
  TRACE: new LitVocabTerm(
    _NS("TRACE"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`TRACE`, "en")
    .addComment(`The TRACE Level designates finer-grained informational events than the DEBUG.`, "en"),

  /**
   * The WARN level designates potentially harmful situations.
   */
  WARN: new LitVocabTerm(
    _NS("WARN"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`WARN`, "en")
    .addComment(`The WARN level designates potentially harmful situations.`, "en"),

  /**
   * Outputs the fully qualified class name of the caller issuing the logging request.
   */
  className: new LitVocabTerm(
    _NS("className"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`class name`, "en")
    .addComment(`Outputs the fully qualified class name of the caller issuing the logging request.`, "en"),

  /**
   * The numerical value of the code, e.g. 200, 404 or 42.
   */
  codeId: new LitVocabTerm(
    _NS("codeId"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`code id`, "en")
    .addComment(`The numerical value of the code, e.g. 200, 404 or 42.`, "en"),

  /**
   * Logging datetime (or just date)
   */
  date: new LitVocabTerm(
    _NS("date"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Logging datetime (or just date)`, "en"),

  /**
   * Links a log message to a status code.
   */
  hasCode: new LitVocabTerm(
    _NS("hasCode"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`has code`, "en")
    .addComment(`Links a log message to a status code.`, "en"),

  /**
   * logLevel
   */
  level: new LitVocabTerm(
    _NS("level"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`logLevel`, "en"),

  /**
   * Logging message
   */
  message: new LitVocabTerm(
    _NS("message"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Logging message`, "en"),

  /**
   * If we mix normal and log output, this can be used to refer to the resource in the RDF the error is connected to. 
   */
  resource: new LitVocabTerm(
    _NS("resource"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`an associated resource`, "en")
    .addComment(`If we mix normal and log output, this can be used to refer to the resource in the RDF the error is connected to. `, "en"),

};

export { RLOG };
